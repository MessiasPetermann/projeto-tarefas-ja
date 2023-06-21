$(document).ready(function() {
    $('#registerForm').submit(function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
      var password = $('#password').val();
  
      // Validação dos campos
      if (name === '' || email === '' || password === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  
      // Verificação da senha
      if (!validatePassword(password)) {
        alert('A senha deve ter pelo menos 6 caracteres, uma letra maiúscula e um número.');
        return;
      }
  
      // Requisição AJAX para registro de usuário
      $.ajax({
        url: 'register.php',
        type: 'POST',
        data: {
          name: name,
          email: email,
          password: password
        },
        success: function(response) {
          alert('Usuário registrado com sucesso.');
          window.location.href = 'login.html'; // Redirecionar para a página de login após o registro
        },
        error: function(xhr, status, error) {
          alert('Ocorreu um erro ao registrar o usuário. Por favor, tente novamente.');
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
  