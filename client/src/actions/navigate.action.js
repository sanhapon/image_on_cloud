import history from '../helper/history';

export const backToList = (currentRoute) => {
    let toRoute = '';
    
    switch(currentRoute) {
        case 'RadioCenterPage' : toRoute = '/admin/RadioCenterPageList';
            break;
        default : toRoute = '/';
            break;
    }
   
    return dispatch => {
        dispatch(clearAlertStatus('กำลังเก็บข้อมูล'));
        history.push(toRoute)
    }
}

export const stayInCurrentRoute = () => {
    return dispatch => dispatch(clearAlertStatus(''));
}


const clearAlertStatus = (msg) => { return {type:'clear_alert_status', payload:{msg:msg}}};
