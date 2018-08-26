export const getCenters = page => {
    return async (dispatch) => {
        const result = await fetch('/api/center') //+ page
        const centers = await result.json();

        dispatch(get_centers_request(centers, page));
    }
}

const get_centers_request = (centers, page) => { return {type : 'get_centers_request', payload : { centers, page }}};