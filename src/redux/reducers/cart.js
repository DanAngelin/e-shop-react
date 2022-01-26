

const initialState = {
    products: []
}


export function cartReducer(state = initialState, action) {


    switch(action.type) {
        case 'ADD_TO_CART':
            console.log('ADD_TO_CART_REDUCER')
            let productInCart = false;

            const updatedProducts = state.products.map(product => {
                console.log("PAYLOAD_PRODUCT_ID", action.payload.product.id)
                if (product.id === action.payload.product.id) {
                    productInCart = true

                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product;
                }
            })


            if (!productInCart) {

                return {
                            ...state,
                            products: [
                                ...state.products,
                                {
                                    ...action.payload.product,
                                    quantity: 1
                                }
                            ]
                        }
            } else {
                        return {
                            ...state,
                            products: updatedProducts
                        }
                    }

            case 'REMOVE_FROM_CART':
                console.log("REMOVE_FROM_CART", state.products)
                return {
                    ...state,
                    products: state.products.filter(product => product.id !== action.payload.id)
                }
            
            default:
                return state;

    } 
}