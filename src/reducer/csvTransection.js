const csvTransection = (state = null, action) => {
    switch (action.type) {
        case 'CSV_TRANSFER':
            return action.payload
        default:
            return state
    }
};

export default csvTransection;