const defaultState = {
  tasks: []
}

const LOAD_TASKS = 'LOAD_TASKS';
const NEW_TASK = 'NEW_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';
const PUBLIC_TASK = 'PUBLIC_TASK';

export const reducerTasks = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_TASKS: return { ...state, tasks: [...action.payload] };
    case NEW_TASK: return { ...state, tasks: [...state.tasks, ...action.payload] };
    case EDIT_TASK: return {
      ...state, tasks: state.tasks.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload }
        }
        return item
      })
    };
    case DELETE_TASK: return { ...state, tasks: state.tasks.filter(item => item.id !== action.payload) };
    case PUBLIC_TASK: return state;
    case 'TEST': return state;

    default: return state;
  }
}

export const loadTasksAction = (payload) => ({ type: LOAD_TASKS, payload });
export const newTaskAction = (payload) => ({ type: NEW_TASK, payload });
export const editTaskAction = (payload) => ({ type: EDIT_TASK, payload });
export const deleteTaskAction = (payload) => ({ type: DELETE_TASK, payload });
export const publicTaskAction = (payload) => ({ type: PUBLIC_TASK, payload });
