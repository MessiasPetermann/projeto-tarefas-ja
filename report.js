$(document).ready(function() {
    // Carregar as tarefas do usuário
    loadTasks();
  
    function loadTasks() {
      // Requisição AJAX para obter as tarefas do usuário
      $.ajax({
        url: 'gettasks.php',
        type: 'GET',
        success: function(response) {
          var tasks = JSON.parse(response);
          var tableBody = $('#tasksTableBody');
          tableBody.empty();
  
          // Adicionar as tarefas na tabela
          tasks.forEach(function(task) {
            var row = $('<tr></tr>');
            row.append('<td>' + task.title + '</td>');
            row.append('<td>' + task.description + '</td>');
            row.append('<td>' + task.creation_date + '</td>');
            row.append('<td>' + task.completion_date + '</td>');
  
            // Adicionar os botões de editar e excluir
            var actions = $('<td></td>');
            actions.append('<button class="btn btn-primary btn-sm">Editar</button>');
            actions.append('<button class="btn btn-danger btn-sm">Excluir</button>');
  
            row.append(actions);
            tableBody.append(row);
          });
        },
        error: function(xhr, status, error) {
          alert('Ocorreu um erro ao carregar as tarefas. Por favor, tente novamente.');
          console.log(xhr.responseText);
        }
      });
    }
  });
  