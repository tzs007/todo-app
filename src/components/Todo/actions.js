import {
  GET_TASKS,
  CREATE_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  TOGGLE_TASK,
} from '../../redux/action.types';

// =================
// TODO LIST ACTIONS
// =================
// GET TASKS

export const getTasks = () => dispatch =>
  dispatch({
    type: GET_TASKS,
    payload: [
      { id: 1, task: 'Buy a new lightsaber', status: true },
      { id: 2, task: 'Learn the Force', status: false },
      { id: 3, task: 'Kill da Emperor', status: false },
    ],
  });

/*// CREATE TASK
export const createTask = ({ id, task, status }) => dispatch => {
  dispatch({
    type: CREATE_TASK,
    payload: {
      id,
      task,
      status,
    },
  });
}; */

// UPDATE TASK

// REMOVE TASK

// === TOGGLE TASK

// MARK AS DONE

// MARK AS UNDONE
