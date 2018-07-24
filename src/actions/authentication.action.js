import history from '../helper/history';

export const login = (username, password) => {
    console.log('action login--', username, password)
    return dispatch => {
        dispatch(login_request({username:username}));

        if(username === 'test' && password === 'test') {
            dispatch(login_success({username:username}));

            const user = {username:username, role:'staff'};
            localStorage.setItem('user', JSON.stringify(user) );
            
            console.log('push history');
            history.push('/dashboard');

        } else {
            dispatch(login_failure({username:username}));
        }
    }
}

export const logout = () => {
    localStorage.removeItem('user');
}

const login_request = (user) => { return {type:'login_request', payload:user.username}};
const login_success = (user) => { return {type:'login_success', payload:user.username, role:'staff'}};
const login_failure = (user) => { return {type:'login_failure', payload:user.username}};