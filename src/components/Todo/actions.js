import {
  GET_TASKS_PENDING,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILED,
  CREATE_TASK,
} from '../../redux/action.types';

// =================
// TODO LIST ACTIONS
// =================
// GET TASKS

/* export const getTasksPending = () => ({
  type: GET_TASKS_PENDING,
  payload: {},
});

export const getTasksSuccess = tasks => ({
  type: GET_TASKS_SUCCESS,
  payload: tasks,
});

export const getTasksFailed = error => ({
  type: GET_TASKS_FAILED,
  payload: error,
}); */

export const getTasks = () => dispatch => {
  console.log('Get Tasks');
};

// CREATE TASK
export const createTask = task => ({
  type: CREATE_TASK,
  payload: {
    id: task.id,
    task: task.text,
    done: false,
  },
});

// UPDATE TASK

// REMOVE TASK

// ===

// MARK AS DONE

// MARK AS UNDONE
