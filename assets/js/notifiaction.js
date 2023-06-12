// Получаем ссылку на элемент значка сообщений
const messageIcon = document.querySelector('.message-icon');
// Получаем ссылку на элемент значка уведомлений
const notificationIcon = document.querySelector('.notification-icon');
// Получаем ссылку на модальное окно уведомлений
const modalNotifications = document.getElementById('modal-notifications');
// Получаем ссылку на список уведомлений в модальном окне
const notificationsList = modalNotifications.querySelector('.notifications-list');

// Обработчик клика на значке сообщений
messageIcon.addEventListener('click', function(event) {
  event.preventDefault();
  // Открываем модальное окно уведомлений
  modalNotifications.style.display = 'block';
});

// Обработчик клика на значке уведомлений
notificationIcon.addEventListener('click', function(event) {
  event.preventDefault();
  // Открываем модальное окно уведомлений
  modalNotifications.style.display = 'block';
});

// Обновление значка уведомлений
function updateBadge(count) {
  const badge = messageIcon.querySelector('.notification');
  // Если количество уведомлений больше 0, то показываем значок с количеством уведомлений
  if (count > 0) {
    badge.innerText = count;
    badge.style.display = 'block';
  } else {
    badge.style.display = 'none';
  }
}

// Пример добавления уведомлений в список
function addNotification(text) {
  const li = document.createElement('li');
  li.innerText = text;
  notificationsList.appendChild(li);
}