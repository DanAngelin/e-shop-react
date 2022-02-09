export function addToFavorites(payload) {
    console.log('ADD_FAVORITES_ACTIONS');
    console.log(payload)
    return {
        type: 'ADD_TO_FAVORITES',
        payload
    }
}