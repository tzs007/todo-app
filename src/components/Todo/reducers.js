import { GET_TASKS, CREATE_TASK } from '../../redux/action.types';

export default (state = {}, { type = '', payload = {} }) => {
  switch (type) {
    case GET_TASKS: {
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
