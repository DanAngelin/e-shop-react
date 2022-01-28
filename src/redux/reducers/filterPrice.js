
const initialState = {
    allFilters: {min: 0, max: 100}
}


export function filterReducer(state = initialState, action) {

    switch(action.type) {
        case 'FILTER_0_999':
            return {
                ...state,
                allFilters: {min: 0, max: 9.99}
            }

        case 'FILTER_10_2999':
                return {
                    ...state,
                    allFilters: {min: 10, max: 29.99}
                }

        case 'FILTER_30_3999':
                    return {
                        ...state,
                        allFilters: {min: 30, max: 39.99}
                    }

        case 'FILTER_40_7999':
                        return {
                            ...state,
                            allFilters: {min: 40, max: 79.99}
                        }

        case 'NO_FILTER':
                            return {
                                ...state,
                                allFilters: {min: 0, max: 100}
                            }

        default:
            return state
    }

}