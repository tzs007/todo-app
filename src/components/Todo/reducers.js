import { GET_TASKS_SUCCESS, CREATE_TASK } from '../../redux/action.types';

export default (state = {}, { type = '', payload = {} }) => {
  switch (type) {
    case GET_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: payload,
      };
    }

    case CREATE_TASK: {
      return {
        ...state,
        task: payload,
      };
    }

    default:
      return state;
  }
};
