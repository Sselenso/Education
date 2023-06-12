// выбираем элементы для уведомлений
const messageIcon = document.querySelector('.menu__link.message-icon');
const notificationIcon = document.querySelector('.notification-icon');
const modalNotifications = document.getElementById('modal-notifications');
const notificationsList = modalNotifications.querySelector('.notifications-list');

// выбираем элементы для чата
const messageForm = document.querySelector('#message-form');
const messageInput = document.querySelector('#message-input');
const messageList = document.querySelector('#message-list');
const chatbox = document.querySelector('#chatbox');
const chatboxClose = document.querySelector('#chatbox-close');
const messagesContainer = document.querySelector('#messages');
const badge = messageIcon.querySelector('.notification');

// Добавляем кнопку закрытия модального окна уведомлений
const closeButton = document.createElement('button');
closeButton.setAttribute('type', 'button');
closeButton.classList.add('close-button');
closeButton.innerHTML = '&times;'; // добавляем символ "X" в кнопку
modalNotifications.querySelector('.modal-content').insertBefore(closeButton, modalNotifications.querySelector('h4'));

// устанавливаем обработчик на клик по иконке сообщения
messageIcon.addEventListener('click', () => {
  // добавляем класс для анимации показа чата
  chatbox.classList.add('animate-chatbox');
  // показываем чат
  chatbox.style.display = 'block';
});

// устанавливаем обработчик на клик по кнопке закрытия чата
chatboxClose.addEventListener('click', () => {
  // скрываем чат
  chatbox.style.display = 'none';
});

// устанавливаем обработчик на отправку формы сообщений
messageForm.addEventListener('submit', (event) => {
  event.preventDefault(); // предотвращаем перезагрузку страницы
  const messageContent = messageInput.value.trim(); // получаем текст сообщения
  if (messageContent.length > 0) { // проверяем, что сообщение не пустое
    // добавляем новое сообщение в список
    const newMessage = document.createElement('li');
    newMessage.textContent = messageContent;
    messageList.appendChild(newMessage);
    // очищаем поле ввода
    messageInput.value = '';
    
    // обновляем количество непрочитанных сообщений на иконке
    let unreadCount = parseInt(messageIcon.getAttribute('data-badge'));
    if (isNaN(unreadCount)) {
      unreadCount = 0;
    }
    badge.textContent = ++unreadCount;
    messageIcon.setAttribute('data-badge', unreadCount);
  }
});

// устанавливаем обработчик на клик по чату для отметки сообщений как прочитанные
chatbox.addEventListener('click', () => {
  // обнуляем количество непрочитанных сообщений на иконке
  badge.textContent = '';
  messageIcon.setAttribute('data-badge', '0');
});

// Обработчик клика на значке уведомлений
notificationIcon.addEventListener('click', (event) => {
  event.preventDefault();
  // Открываем модальное окно уведомлений
  modalNotifications.style.display = 'block';
  // добавляем класс для анимации
  modalNotifications.classList.add('animate-notifications');
});

// Устанавливаем обработчик клика на кнопку закрытия модального окна уведомлений
closeButton.addEventListener('click', () => {
  modalNotifications.style.display = 'none';
  // убираем класс с анимацией
  modalNotifications.classList.remove('animate-notifications');
});

// Пример добавления уведомлений в список
function addNotification(text, maxNotifications = 10) {
  if (notificationsList.children.length >= maxNotifications) {
    notificationsList.removeChild(notificationsList.children[0]);
  }
  const li = document.createElement('li');
  li.innerText = text;
  notificationsList.appendChild(li);
}

// Функция добавления нового сообщения в чат
function addNewMessage(message) {
  // Создаем новый элемент сообщения и добавляем его в контейнер
  const newMessage = document.createElement('div');
  newMessage.textContent = message;
  messagesContainer.appendChild(newMessage);
}

// Использование делегирования событий для удаления сообщений
message// устанавливаем обработчик на клик по элементам списка сообщений для удаления сообщений
messageList.addEventListener('click', (event) => {
if (event.target.tagName === 'LI') {
event.target.remove();
}
});

// Использование делегирования событий для открытия ссылок в новом окне
document.addEventListener('click', (event) => {
if (event.target.tagName === 'A' && event.target.getAttribute('target') !== '_blank') {
event.preventDefault();
window.open(event.target.href, '_blank');
}
});


