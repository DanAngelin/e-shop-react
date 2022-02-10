
const initialState = {
    min:  '',
    max: ''
}


export function filterReducer(state = initialState, action) {
    switch(action.type) {
        case 'FILTER_0_999':
                        return {
                            ...state,
                            min: 0, 
                            max: 9.99
                        }

        case 'FILTER_10_2999':
                        return {
                            ...state,
                            min: 10, 
                            max: 29.99
                        }

        case 'FILTER_30_3999':
                        return {
                            ...state,
                            min: 30, 
                            max: 39.99
                        }

        case 'FILTER_40_7999':
                        return {
                            ...state,
                            min: 40, 
                            max: 79.99
                        }

        case 'NO_FILTER':
                        return {
                                ...state,
                                min: 0, 
                                max: 100
                            }

        default: return state
            
    }

}