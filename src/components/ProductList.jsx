import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

render() {
    const { products } = this.props;
    return (
        <div>
        <div className="row mb-4">
            {
               products.map((product) => {
                    return <ProductItem
                                          {...product}
                                          key={product.id}
                                      />
                })

            }
        </div>
        </div>
    );
        }
}

export default ProductList;