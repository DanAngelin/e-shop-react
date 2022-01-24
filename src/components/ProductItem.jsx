import React from 'react';
import './ProductItem.css';

function ProductItem(props) {

    const {name, price, currency, image} = props;

    return(
        <div className='col-md-4 col-sm-12 d-flex flex-row justify-content-center product-page'>
        <div className="product-item col-md-12 mb-4 d-flex flex-column align-items-center justify-content-center">
            <img src={image} alt="productPhoto" className="mb-2"/>
            <p className="mb-1 text-center">{ name }</p>
            <p className="text-center">{ price + currency }</p>
        </div>
        </div>
    );
}

export default ProductItem;