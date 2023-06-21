$(document).ready(function() {
    $('#changePasswordForm').submit(function(e) {
      e.preventDefault();
      var oldPassword = $('#oldPassword').val();
      var newPassword = $('#newPassword').val();
      var confirmPassword = $('#confirmPassword').val();
  
      // Validação dos campos
      if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      // Verificação da nova senha
      if (!validatePassword(newPassword)) {
        alert('A nova senha deve ter pelo menos 6 caracteres, uma letra maiúscula e um número.');
        return;
      }
  
      // Verificação da confirmação da senha
      if (newPassword !== confirmPassword) {
        alert('A confirmação da nova senha não corresponde à nova senha.');
        return;
      }
  
      // Requisição AJAX para troca de senha
      $.ajax({
        url: 'changepassword.php',
        type: 'POST',
        data: {
          oldPassword: oldPassword,
          newPassword: newPassword
        },
        success: function(response) {
          alert('Senha trocada com sucesso.');
          window.location.href = 'index.html'; // Redirecionar para a página principal após a troca de senha
        },
        error: function(xhr, status, error) {
          alert('Ocorreu um erro ao trocar a senha. Por favor, tente novamente.');
          console.log(xhr.responseText);
        }
      });
    });
  
    // Função para validar a senha
    function validatePassword(password) {
      var regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
      return regex.test(password);
    }
  });
  