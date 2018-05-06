import {
  GET_TASKS,
  CREATE_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  TOGGLE_TASK,
} from '../../redux/action.types';
import store from '../../redux/store';

// =================
// TODO LIST ACTIONS
// =================
// GET TASKS

export const getTasks = () => dispatch =>
  dispatch({
    type: GET_TASKS,
    payload: store.getState(),
  });

// CREATE TASK
export const createTask = task => dispatch => {
  dispatch({
    type: CREATE_TASK,
    payload: task,
  });
};

/*export const createTask = ({ id, task, completed }) => dispatch => {
  dispatch({
    type: CREATE_TASK,
    payload: {
      id,
      task,
      completed,
    },
  });
}; */

// UPDATE TASK

// REMOVE TASK

// === TOGGLE TASK

// MARK AS DONE

// MARK AS UNDONE
