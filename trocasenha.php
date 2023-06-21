<?php
// Verificar se o formulário de alteração de senha foi enviado
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
    $email = $_POST["email"];
    $senhaAntiga = $_POST["senhaAntiga"];
    $novaSenha = $_POST["novaSenha"];

    // Verificar se a senha antiga está correta para o usuário informado
    $sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senhaAntiga'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // Atualizar a senha do usuário
        $sql = "UPDATE usuarios SET senha = '$novaSenha' WHERE email = '$email'";

        if ($conn->query($sql) === TRUE) {
            echo "Senha alterada com sucesso!";
        } else {
            echo "Erro ao alterar a senha: " . $conn->error;
        }
    } else {
        echo "Senha antiga incorreta.";
    }

    // Fechar a conexão com o banco de dados
    $conn->close();
}
?>
