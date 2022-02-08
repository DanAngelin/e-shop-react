export function addToFavorites(payload) {
    console.log('ADD_FAVORITES_ACTIONS')
    return {
        type: 'ADD_TO_FAVORITES',
        payload
    }
}