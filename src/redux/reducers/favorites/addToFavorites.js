const initialState = {
    products: [],
}


export function addFavoritesReducer(state = initialState, action) {

    switch(action.type) {
        case 'ADD_TO_FAVORITES': 
        let productInFavorites = false;

        const updatedFavorites = state.products.map(product => {
            if (product.id === action.payload.product.id) {
                productInFavorites = true;

                return {
                    ...product,

                }
            } else {
                return product;
            }
        })


        if (!productInFavorites) {

            return {
                        ...state,
                        products: [
                            ...state.products,
                            {
                                ...action.payload.product,
                                
                            },
                        ],
                    }
        } else {
                    return {
                        ...state,
                        products: updatedFavorites,
                    }
                }

                case 'REMOVE_FROM_FAVORITES':
            console.warn("REMOVE_FAV")
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id),
            }


        default:
            return state;
    }
}