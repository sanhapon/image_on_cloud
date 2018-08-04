import { combineReducers } from 'redux';
import authentication from './authentication.reducer';
import saveAlert from './save.reducer';

const rootReducers = combineReducers({
    authentication,
    saveAlert
});

export default rootReducers;