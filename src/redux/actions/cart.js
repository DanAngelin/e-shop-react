export function addToCart(payload) {
    console.log('ADD_TO_CART_ACTIONS')
    return {
        type: 'ADD_TO_CART',
        payload
    }
}