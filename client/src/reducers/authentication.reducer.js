const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? 
    {loggedIn:true, payload: {username:user.username, role:user.role}} : 
    {loggedIn:false, payload: {username:'', role:''}}

const authentication = (state = initialState, action) => {
    
    switch (action.type) {
        case 'login_request':
            return {
                loggingIn: true,
                payload: action.username
            }
        case 'login_success': {
            const { username, role } = action.payload;
            return {
                loggedIn: true,
                payload: { username: username, role:role }
            }
        }
        case 'login_failure':
            return {
                loggedInFail: true,
                payload:{}
            }
        case 'logout_request':
            return {
                loggedIn: false,
                payload: { username: '', role:'' }
            }
        default:
            return state;
    }
}

export default authentication;