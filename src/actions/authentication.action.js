import history from '../helper/history';

export const login = (username, password) => {

    return dispatch => {
        dispatch(login_request({username:username}));

        if(username === 'admin' && password === 'nocnocnoc') {
            const user = {username:username, role:'administrator'};
            localStorage.setItem('user', JSON.stringify(user) );
            dispatch(login_success({username:username}));
            
            history.push('/dashboard');

        } else {
            dispatch(login_failure({username:username}));
        }
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('user');
        dispatch(logout_request());
        history.push('/login')
    }

}

const login_request = (user) => { return {type:'login_request', payload:user.username}};
const login_success = (user) => { return {type:'login_success', payload: {username:user.username, role:'administrator'}}};
const login_failure = (user) => { return {type:'login_failure', payload:user.username}};
const logout_request = () => { return {type:'logout_request'}};