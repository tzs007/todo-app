import { GET_TASKS, SAVE_TASK } from '../../redux/action.types';

export default (state = {}, { type = '', payload = [] }) => {
  switch (type) {
    // Reducer for get all tasks
    case GET_TASKS: {
      return {
        ...state,
        tasks: payload,
      };
    }

    // Reducer for saving task
    case SAVE_TASK: {
      return {
        ...state,
        tasks: payload,
      };
    }

    default:
      return state;
  }
};
