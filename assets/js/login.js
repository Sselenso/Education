// Preloader


// Login Form
$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    var login = $('#login').val();
    var password = $('#password').val();

    // Проверка логина и пароля для администратора
    if (login === 'admin' && password === 'admin') {
      window.location.href = '/main.html';
      return;
    }

    // Хэширование пароля для обычных пользователей
    // var hash = sha256(password);

    // Отправка данных на сервер
    $.ajax({
      type: 'POST',
      url: '/login',
      data: { login: login, password: hash }, // Используем хэш вместо исходного пароля
      success: function (response) {
        if (response === 'success') {
          window.location.href = '/main.html';
        } else {
          $('.error-message').html('Invalid login or password.').show();
        }
      },
    });
  });
});
