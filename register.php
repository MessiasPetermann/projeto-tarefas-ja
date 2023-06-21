<?php
// Verificar se o formulário de registro foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conectar ao banco de dados
    $servername = "localhost";
    $username = "seu_usuario";
    $password = "sua_senha";
    $dbname = "TarefasJa";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar a conexão
    if ($conn->connect_error) {
        die("Falha na conexão com o banco de dados: " . $conn->connect_error);
    }

    // Obter os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Inserir os dados na tabela de usuários
    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro realizado com sucesso!";
    } else {
        echo "Erro ao registrar o usuário: " . $conn->error;
    }

    // Fechar a conexão com o banco de dados
    $conn->close();
}
?>
