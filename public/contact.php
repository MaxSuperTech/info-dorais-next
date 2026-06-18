<?php
declare(strict_types=1);

$to = 'contact@infodorais.com';
$turnstileSecret = 'REMPLACE_PAR_TA_CLE_SECRETE_TURNSTILE';

function clean_field(string $value): string {
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contact');
    exit;
}

$lang = ($_POST['lang'] ?? 'fr') === 'en' ? 'en' : 'fr';
$redirectBase = $lang === 'en' ? '/en/contact' : '/contact';

// Honeypot anti-spam. Real visitors never fill this hidden field.
if (!empty($_POST['website'] ?? '')) {
    header('Location: ' . $redirectBase . '?sent=1#diagnostic');
    exit;
}

$name = clean_field((string)($_POST['name'] ?? ''));
$emailRaw = (string)($_POST['email'] ?? '');
$email = filter_var($emailRaw, FILTER_VALIDATE_EMAIL);
$phone = clean_field((string)($_POST['phone'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$turnstileToken = (string)($_POST['cf-turnstile-response'] ?? '');

if ($name === '' || !$email || $message === '') {
    header('Location: ' . $redirectBase . '?error=1#diagnostic');
    exit;
}

if (
    $turnstileSecret === 'REMPLACE_PAR_TA_CLE_SECRETE_TURNSTILE'
    || $turnstileToken === ''
) {
    header('Location: ' . $redirectBase . '?error=1#diagnostic');
    exit;
}

$verifyPayload = http_build_query([
    'secret' => $turnstileSecret,
    'response' => $turnstileToken,
    'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
]);

$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
        'content' => $verifyPayload,
        'timeout' => 8,
    ],
]);

$verifyResponse = file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, $context);
$verifyData = $verifyResponse ? json_decode($verifyResponse, true) : null;

if (!is_array($verifyData) || empty($verifyData['success'])) {
    header('Location: ' . $redirectBase . '?error=1#diagnostic');
    exit;
}

$safeMessage = trim(strip_tags($message));
$subject = 'Demande de diagnostic - Info Dorais';
$body = "Nouvelle demande depuis infodorais.com\n\n";
$body .= "Nom: {$name}\n";
$body .= "Courriel: {$email}\n";
$body .= "Téléphone: {$phone}\n\n";
$body .= "Message:\n{$safeMessage}\n";

$headers = [];
$headers[] = 'From: Info Dorais <no-reply@infodorais.com>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

header('Location: ' . $redirectBase . ($sent ? '?sent=1' : '?error=1') . '#diagnostic');
exit;
