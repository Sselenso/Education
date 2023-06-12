$(document).ready(function() {
  var currentPage = 0; // текущая страница
  var pagesCount = 0; // общее количество страниц

  // загрузка содержимого файла и разделение его на страницы
  function loadPages(file) {
    $.get(file, function(data) {
      var content = data; // получение содержимого элемента .body-text из загруженного файла
      var lines = content.split('\n'); // разбиение текста на строки
      var pageContent = ''; // содержимое текущей страницы

      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];

        if (pageContent.length + line.length > 3000) { // если текущая страница заполнена
          $('#body-text').append('<div id="page' + pagesCount + '" class="page">' + pageContent + '</div>'); // добавление страницы в блок #body-text
          pagesCount++;
          pageContent = '';
        }

        pageContent += line + '\n';
      }

      if (pageContent.length > 0) { // добавление последней страницы
        $('#body-text').append('<div id="page' + pagesCount + '" class="page">' + pageContent + '</div>');
        pagesCount++;
      }

      showPage(currentPage); // отображение текущей страницы
      updateButtons(); // обновление кнопок переключения страниц
    });
  }

  // отображение указанной страницы
  function showPage(page) {
    $('#body-text').find('.page').hide(); // скрытие всех страниц
    $('#page' + (page + 1)).show(); // отображение указанной страницы
    $('#current-page').html('Страница ' + (page + 1) + ' из ' + pagesCount); // обновление номера текущей страницы
    currentPage = page; // сохранение текущей страницы
  }

  // переключение на следующую страницу
  function nextPage() {
    if (currentPage < pagesCount - 1) {
      showPage(currentPage + 1);
      updateButtons();
    }
  }

  // переключение на предыдущую страницу
  function prevPage() {
    if (currentPage > 0) {
      showPage(currentPage - 1);
      updateButtons();
    }
  }

  // обновление состояния кнопок переключения страниц
  function updateButtons() {
    if (currentPage == 0) {
      $('#prev-page').attr('disabled', true);
    } else {
      $('#prev-page').attr('disabled', false);
    }

    if (currentPage == pagesCount - 1) {
      $('#next-page').attr('disabled', true);
    } else {
      $('#next-page').attr('disabled', false);
    }
  }

  // загрузка содержимого файла при клике на элемент .menu__wrapper-item
  $('.menu__wrapper-item').click(function() {
    var file = $(this).data('file');
    $('#body-text').empty(); // очистка блока #body-text
    loadPages(file);
  });

  // переключение на следующую страницу при клике на кнопку #next-page
  $('#next-page').click(function() {
    nextPage();
  });

  // переключение на предыдущую страницу при клике на кнопку #prev-page
  $('#prev-page').click(function() {
    prevPage();
  });
});
