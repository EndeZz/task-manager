import './loader.scss';

const loadIndicator = document.querySelector('.loader');

// const loaderId = setInterval(() => {
//   if (taskList.clientHeight > innerHeight) clearInterval(loaderId)
//   uploadTasks(1)
// }, 50)

addEventListener('scroll', () => {
  let scrollPosition = Math.floor(document.body.getBoundingClientRect().bottom - innerHeight);

  if (scrollPosition <= 0) {
    loadIndicator.style.display = 'block';
  }
})

// function uploadTasks(count) {
//   for (let i = 0; i < count; i++) {
//     const taskItem = document.createElement('li')
//     taskItem.innerText = `Task${taskList.children.length + 1}`

//     taskList.append(taskItem)
//   }
// }