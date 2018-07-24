import { combineReducers } from 'redux';
import authentication from './authentication.reducer';

const rootReducers = combineReducers({
    authentication
});

export default rootReducers;