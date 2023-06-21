<?php
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

// Obter as tarefas do usuário
$usuario_id = $_GET["usuario_id"];

$sql = "SELECT * FROM tarefas WHERE usuario_id = $usuario_id";
$result = $conn->query($sql);

$tasks = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $task = array(
            "title" => $row["titulo"],
            "description" => $row["descricao"],
            "creation_date" => $row["data_criacao"],
            "completion_date" => $row["data_conclusao"]
        );

        array_push($tasks, $task);
    }
}

// Converter as tarefas para formato JSON e retornar a resposta
echo json_encode($tasks);

// Fechar a conexão com o banco de dados
$conn->close();
?>
