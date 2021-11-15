export const csvTransection = (csv) => {
    return {
        type: 'CSV_TRANSFER',
        payload: csv
    }
}

export const testReduxData = (csv) => {
    console.log(csv)
    return {
        type: 'TEST_REDUX_DATA',
        payload: csv
    }
}