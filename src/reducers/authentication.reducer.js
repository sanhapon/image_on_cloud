const user = localStorage.getItem('user');
const initialState = user ? {loggedIn:true, username:user.username, role:user.role} : {}

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case 'login_request':
            return {
                loggingIn:true,
                payload: action.username
            }
        case 'login_success':
            return {
                loggedIn: true,
                payload: user
            }
        case 'login_failure':
            return {}
        case 'logout':
            return {}
        default:
            return state;
    }
}

export default authentication;