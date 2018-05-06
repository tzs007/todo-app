import { GET_TASKS, CREATE_TASK } from '../../redux/action.types';

export default (state = {}, { type = '', payload = [] }) => {
  console.log(payload);
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
        tasks: payload,
      };
    }

    default:
      return state;
  }
};
