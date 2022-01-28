export function filterPrice0999(payload) {
    return {
        type: 'FILTER_0_999',
        payload
    }
}

export function filterPrice102999(payload) {
    return {
        type: 'FILTER_10_2999',
        payload
    }
}

export function filterPrice303999(payload) {
    return {
        type: 'FILTER_30_3999',
        payload
    }
}

export function filterPrice407999(payload) {
    return {
        type: 'FILTER_40_7999',
        payload
    }
}

export function filterPriceNoFilter(payload) {
    return {
        type: 'NO_FILTER',
        payload
    }
}