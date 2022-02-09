import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import { ReactComponent as Add } from '../assets/icons/add.svg';
import { ReactComponent as AddFavorites } from '../assets/icons/add_to_favorites.svg';
import { ReactComponent as RemoveFavorites } from '../assets/icons/remove_from_favorites.svg';
import { addToFavorites } from '../redux/actions/favorites/addToFavorites';
import { removeFromFavorites } from '../redux/actions/favorites/removeFromFavorites';
import { Link } from 'react-router-dom';

function ProductItem(props) {

    // product props
    const { id, name, price, currency, image, productsFavorites } = props;
    const idFavorites = productsFavorites.map(favorites => favorites.id);

    return(
        // display product
        
        <div className='col-md-4 col-sm-12 d-flex flex-row justify-content-center product-page'>
            <div className="product-item col-md-12 mb-4 d-flex flex-column align-items-center justify-content-center">

{/* ADD/REMOVE FAVORITES PRODUCTS */} 
                { idFavorites.includes(id) ?
                    <RemoveFavorites className='heart-icon' onClick={() => props.removeFromFavorites({id})}/>
                    :  
                    <AddFavorites className='heart-icon' onClick={() => props.addToFavorites({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    }) } 
                    />
                }
            
                
                <Link to={`/product/${id}`} className="text-dark d-flex flex-column align-items-center">
                    <img src={image} alt="productPhoto" className="mb-2"/>
                    <p className="mb-1 text-center">{ name }</p>
                    <p className="text-center">{ currency + " " + price }</p>
                </Link>

                {/* button add to cart */}
                <button
                    className="btn btn-outline-dark"
                    onClick={() => props.addToCart({
                        product: {
                            id,
                            name,
                            price,
                            currency,
                            image
                        }
                    })}
                >
                    ADD TO CART<Add />
                </button>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        productsFavorites: state.addfavorite.products,
    };
}

// function mapDipatchToProps - param dispatch, return object - map dispatch actions to reducers with props
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (payload) => dispatch(addToFavorites(payload)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    };
}

// connect, HOC
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);