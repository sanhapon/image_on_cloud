const centerList = (state = { centers:[], page:0 }, action) => {
    switch (action.type) {
        case 'get_centers_request' :
            return {
                page: action.payload.page,
                centers: action.payload.centers
            }
        default :
            return state;
    };
}

export default centerList;