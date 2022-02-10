import { connect } from 'react-redux';
import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import BaseListSidebar from './BaseListSidebar/BaseListSidebar';


class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

render() {

    const { products, filters } = this.props;

    return (
        <div>
                <BaseListSidebar />
            <div className="row mb-4">
                {
                    
                products.filter(product => product.price > filters.min && product.price < filters.max).map((product) => {
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


function mapStateToProps(state) {
    return {
      filters: state.filter
    }
  }



  export default connect(mapStateToProps, null)(ProductList);