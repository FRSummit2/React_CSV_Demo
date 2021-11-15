const testReduxData = (state = null, action) => {
    switch (action.type) {
        case 'TEST_REDUX_DATA':
            return action.payload
        default:
            return state
    }
};

export default testReduxData;