export const save = (url, data) => {
    return async dispatch => {
        dispatch(save_request);

        try {
            const result = await fetch('http://localhost:3000/api/center', { 
                                        method: 'POST', 
                                        body: JSON.stringify(data),
                                        headers: { 'Content-Type': 'application/json' }})
            const text = await result.text();
            if (text === 'done') {
                dispatch(save_success());
                return;
            } else {
                dispatch(save_fail('ไม่สามารถเก็บข้อมูลได้'));
                return;
            }
        } catch (err) {
            dispatch(save_fail(err || 'ไม่สามารถเก็บข้อมูลได้'));
            return;
        }  
    }
}

const save_request = () => { return {type:'save_request', payload:{msg:'กำลังเก็บข้อมูล'}}};
const save_success = () => { return {type:'save_success', payload:{msg:'เก็บข้อมูลเรียบร้อย'}}};
const save_fail = (reason) => { return {type:'save_failure', payload:{msg:reason}}};