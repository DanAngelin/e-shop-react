

export function removeFromCart(payload) {
    console.warn('REMOVE_FROM_CART_ACTIONS')
    return {
        type: 'REMOVE_FROM_CART',
        payload
    }
}