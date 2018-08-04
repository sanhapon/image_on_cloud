const initialState = { alertStatus : -999, payload: {msg:''}};

const saveAlert = (state = initialState, action) => {
    switch(action.type) {
        case 'save_reqeust':
            return { alertStatus : 0, payload: { msg: action.payload.msg } }
        case 'save_success':
            return { alertStatus : 1, payload: { msg: action.payload.msg } }
        case 'save_failure':
            return { alertStatus : -1,  payload: { msg: action.payload.msg } }
        case 'clear_alert_status':
            return state;
        default :
            return state;
    }
}

export default saveAlert;