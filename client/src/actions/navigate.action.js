import history from '../helper/history';

export const backToList = (currentRoute) => {
    let toRoute = '';
    
    switch(currentRoute) {
        case 'RadioCenterPage' : toRoute = '/admin/RadioCenterPageList';
            break;
        default : toRoute = '/';
            break;
    }
    history.push(toRoute)

    return dispatch => {
        dispatch(clearAlertStatus());
    }
}

const clearAlertStatus = () => { return {type:'clear_alert_status', payload:{msg:'กำลังเก็บข้อมูล'}}};
