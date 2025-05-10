<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тести з паролем</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
            background-color: #f4f4f4;
        }
        .test-container {
            display: inline-block;
            margin: 15px;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
        }
        h3 {
            margin: 0 0 10px;
            color: #007bff;
        }
        input[type="password"] {
            padding: 8px;
            margin: 10px 0;
            width: 200px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        input[type="submit"] {
            padding: 8px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Доступ до тестів</h1>
    <div class="test-container">
        <h3>Тест 1: Азія</h3>
        <form action="check_password.php" method="post">
            <input type="hidden" name="test" value="test1">
            <input type="password" name="password" placeholder="Введіть пароль" required>
            <br>
            <input type="submit" value="Перейти до тесту">
        </form>
    </div>
    <div class="test-container">
        <h3>Тест 2: Європа</h3>
        <form action="check_password.php" method="post">
            <input type="hidden" name="test" value="test2">
            <input type="password" name="password" placeholder="Введіть пароль" required>
            <br>
            <input type="submit" value="Перейти до тесту">
        </form>
    </div>
</body>
</html>