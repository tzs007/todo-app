import { combineReducers } from 'redux';
import tasks from '../components/Todo/reducers';

const rootReducer = combineReducers({
  tasks,
});

export default rootReducer;
