import React from "react";
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import { removeFromCart } from '../../redux/Cart/RemoveFromCartActions';
import { ReactComponent as Home } from '../../assets/icons/home.svg';;

function Cart(props) {
    return(

        <Layout>
            <div className="cart-page content-min-height container-fluid container-min-max-width
                            d-flex flex-column justify-content-center align-items-center p-1">
                {

                    // products are coming from the store and saved in props by mapStateToProps
                    props.products.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Product</p>
                            <p className="w-25">Price</p>
                            <p className="w-25">Amount</p>
                            <p className="w-25">Total</p>
                        </div>

                        {
                            // display the products in page cart
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                            <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                                <img src={product.image} alt="Produs"/>
                                                <p>{ product.name }</p>
                                            </div>
                                            <p className="w-25">{ product.price } { product.currency }</p>
                                            <p className="w-25">{ product.quantity }</p>
                                            <div className="w-25 d-flex justify-content-center align-items-start">
                                                <p className="mr-2">{ (product.price * product.quantity).toFixed(2) } { product.currency }</p>

                                                {/* button remove item cart */}
                                                <Close onClick={() => props.removeFromCart(product)}/>
                                            </div>
                                        </div>
                            })
                        }
                </div>

                // display a message if don't have products in card and button to home
                :   <div className="d-flex flex-column align-items-center">
                        <p className="h3">No products in the cart</p>
                        <Link to="/"><button className="btn btn-outline-dark d-flex align-items-center p-2 mt-2"><Home />Back to Home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        products: state.cart.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);