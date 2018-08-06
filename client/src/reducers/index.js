import { combineReducers } from 'redux';
import authentication from './authentication.reducer';
import saveAlert from './save.reducer';
import centerList from './radioCenterPageList.reducer';

const rootReducers = combineReducers({
    authentication,
    saveAlert,
    centerList
});

export default rootReducers;