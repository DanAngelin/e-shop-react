import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
import ProductList from './ProductList';
import { ReactComponent as Add } from '../assets/icons/add.svg';

function ProductItem(props) {

    // product props
    const {id, name, price, currency, image} = props;

    return(
        // display product
        <div className='col-md-4 col-sm-12 d-flex flex-row justify-content-center product-page'>
        <div className="product-item col-md-12 mb-4 d-flex flex-column align-items-center justify-content-center">
            <img src={image} alt="productPhoto" className="mb-2"/>
            <p className="mb-1 text-center">{ name }</p>
            <p className="text-center">{ currency + " " + price }</p>

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


// function mapDipatchToProps - param dispatch, return object - map dispatch actions to reducers with props
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    };
}

// connect, HOC
export default connect(null, mapDispatchToProps)(ProductItem);