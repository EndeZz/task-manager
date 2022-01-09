import { loadTasksAction, newTaskAction, editTaskAction, deleteTaskAction, publicTaskAction } from "../reducer/reducerTasks";

const url = 'http://localhost:3000/tasks';

export const fetchGetTasks = () => {
  return function (dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadTasksAction(json)))
  }
}

export function fetchNewTask(task) {
  return function (dispatch) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .then(json => console.log(json))
    // .then(json => dispatch(newTaskAction(json)))
  }
}

export function fetchUpdateTask(id, task) {
  return function (dispatch) {
    return fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    })
      .then(response => response.json())
      .then(json => dispatch(editTaskAction(json)))
  }
}

export function fetchDeleteTask(id) {
  return function (dispatch) {
    return fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
      .then(() => dispatch(deleteTaskAction(id)))
  }
}