<?php
$passwords = [
    'test1' => password_hash('mockTestEnglish1', PASSWORD_DEFAULT),
    'test2' => password_hash('mockTestEnglish2', PASSWORD_DEFAULT)
];

$test = isset($_POST['test']) ? $_POST['test'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

if (array_key_exists($test, $passwords) && password_verify($password, $passwords[$test])) {
    header("Location: $test.html");
    exit;
} else {
    echo '<script>alert("Неправильний пароль або тест не знайдено!"); window.location.href="index.php";</script>';
}
?>