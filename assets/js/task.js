const totalTasks = 15;
const completedTasks = 3;

const line = document.querySelector('.calendar__line-hline');
const points = document.querySelectorAll('.calendar__line-point');
const lastPoint = points[completedTasks - 1];

// Изменяем цвет и заполнение горизонтальной полосы в зависимости от количества выполненных заданий
if (completedTasks > 0) {
  line.style.background = 'linear-gradient(to right, #45A29E ' + ((completedTasks / totalTasks) * 100) + '%, #ccc ' + ((completedTasks / totalTasks) * 100) + '%)';
}

// Изменяем цвет точек в зависимости от количества выполненных заданий
points.forEach((point, index) => {
  if (index < completedTasks) {
    point.style.backgroundColor = '#264155';
  }
});

// Изменяем цвет обводки последней точки
lastPoint.style.borderColor = '#45A29E';
lastPoint.style.backgroundColor = '#FFC107';


