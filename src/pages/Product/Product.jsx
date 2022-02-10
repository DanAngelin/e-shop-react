import React from 'react';
import Layout from '../../components/Layout/Layout'
import products from '../../utils/products.json';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Cart/CartActions';
import { addToFavorites } from '../../redux/Favorites/AddToFavoritesActions';
import { removeFromFavorites } from '../../redux/Favorites/RemoveFromFavoritesActions';
import { ReactComponent as AddFavorites } from '../../assets/icons/add_to_favorites.svg';
import { ReactComponent as RemoveFavorites } from '../../assets/icons/remove_from_favorites.svg';
import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId

        const categoryValues = Object.values(products);

        let product;

        categoryValues.forEach((category) => {
            const result = category.items.find(product => product.id === Number(productId))

            if (result) {
                product = result;
            }
        });

        this.setState({product});
    }

    render() {
        const { product } = this.state;
        const { productsFavorites } = this.props;
        const idFavorites = productsFavorites.map(favorites => favorites.id);

        return(
            <Layout>
                <div className='product-page content-min-height container-fluid container-min-max-width'>
                    <h1 className='my-4 h2'>{product.name}</h1> 

                    <div className='product-info d-flex align-items-center'>

                            {/* ADD/REMOVE FAVORITES PRODUCTS */} 
                        { idFavorites.includes(product.id) ?
                            <RemoveFavorites className='heart-icon' onClick={() => this.props.removeFromFavorites({id: product.id})}/>
                            :  
                            <AddFavorites className='heart-icon' onClick={() => this.props.addToFavorites({
                                product: {
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    currency: product.currency,
                                    image: product.image,
                                }
                            }) } 
                            />
                        }

                            {/* SECTION PRODUCT DETAILS */}
                            <div className='image-wrapper mr-5'>
                                <img src={product.image} alt="product cover" />
                            </div>
                            <div className='product-details'>
                                <p className='h3 text-danger'>{product.price} {product.currency}</p>
                                <button 
                                        className='btn btn-dark mb-4 font-weight-bold'
                                        onClick={() => {
                                            this.props.addToCart({
                                            product: {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                currency: product.currency,
                                                image: product.image,
                                            }
                                        })
                                    }}
                                        >
                                            Add To Cart
                                </button>
                                <p><span className="font-weight-bold">Size</span>: {product.size}</p>
                                <p><span className="font-weight-bold">Colour</span>: {product.colour}</p>
                                <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                                <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                                <p className="font-weight-bold mb-1">Description:</p>
                                <p>{product.description}</p>
                            </div>
                    </div>

                </div>
            </Layout>
        );
    }
}


function mapStateToProps(state) {
    return {
        productsFavorites: state.addfavorite.products,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (payload) => dispatch(addToFavorites(payload)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);