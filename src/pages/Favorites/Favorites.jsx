import React from "react";
import Layout from '../../components/Layout/Layout';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../../redux/Favorites/RemoveFromFavoritesActions';
import clickHeart from '../../assets/images/clickheart.png';
import { ReactComponent as RemoveFavorites } from '../../assets/icons/remove_from_favorites.svg';
import './Favorites.css';


function Favorites(props) {
        return(
            <Layout>
                <div className="favorites-page content-min-height container-fluid container-min-max-width d-flex flex-row justify-content-center align-items-start">
                    {

                        props.productsFavorites.length
                        ? <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                            {
                                // display the products in page favorites
                                props.productsFavorites.map(product => {
                                    return <div className="w-100 mt-2 item-favorite d-flex justify-content-around align-items-center text-center" key={product.id}>
                                        <img src={ product.image } className="w-25" alt="product" />
                                                    <p className="mb-1 text-center w-25">{ product.name }</p>
                                                <p className="text-center w-25">{ product.price } { product.currency }</p>
                                                <RemoveFavorites onClick={() => props.removeFromFavorites({id: product.id})} />
                                                </div>

                                })
                            }
                    </div>
                    // display a message if don't have products in card and button to home
                    :   <div className="d-flex flex-column align-items-center justify-content-center">
                            <p className="h3">You don't have any favorite product</p>
                            <p>You can add an product to favorites by clicking on the heart</p>
                            <img src={clickHeart} alt="click favorite" className="mb-4 w-75" />
                            <Link to="/"><button className="btn btn-outline-dark d-inline-flex">Back to Home</button></Link>
                        </div>
                    }
                </div>
            </Layout>
        )

}


function mapStateToProps(state) {
    return {
        productsFavorites: state.addfavorite.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);