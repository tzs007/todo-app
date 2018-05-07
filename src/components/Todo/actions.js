import { GET_TASKS, SAVE_TASK } from '../../redux/action.types';

// =================
// TODO LIST ACTIONS
// =================

// GET TASKS
export const getTasks = () => dispatch =>
  dispatch({
    type: GET_TASKS,
    payload: [],
  });

// CREATE TASK
export const saveTask = task => dispatch => {
  dispatch({
    type: SAVE_TASK,
    payload: task,
  });
};
