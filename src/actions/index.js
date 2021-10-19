export const csvTransection = (csv) => {
    return {
        type: 'CSV_TRANSFER',
        payload: csv
    }
}