import { combineReducers } from 'redux';

import toDoReducer from './to-do/to-do.reducer';

const rootReducer = combineReducers({
    todos: toDoReducer
});

export default rootReducer;