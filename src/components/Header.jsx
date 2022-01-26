import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { ReactComponent as LoginIcon } from '../assets/icons/login.svg';
import './Header.css';
import { connect } from 'react-redux';


function Header(props) {


  // props for google, facebook and number of products in cart
const {user, signOut, numberOfProducts} = props;

function handleSignOut() {
  signOut();
}


  return(
    <header className="border-bottom mb-3">
      <div className="container-fluid container-min-max-width
                      d-flex justify-content-between align-items-center">

          {/* logo site */}
          <Link to="/" className="my-3">
              <img src={Logo} alt="E-Shop-React" className="logo"/>
          </Link>


          {/* display name from google or facebook - login - logout */}
          <div>
                  { user && <p>Hello, {user.displayName}!</p> }
            <div className="d-flex justify-content-end align-items-center ">
                { user
                  ? <p className="logout h5" onClick={handleSignOut}>Logout</p>
                  : <Link to="/login" className="h5">Login<LoginIcon className='login-icon'/></Link>
                }


                  {/* Link to page cart - svg cart - number of products in cart */}
                <div className='d-flex align-items-center'>
                  <Link to="/cart" className="d-flex align-items-center">
                    <ShoppingCart className="ml-2" />
                    <p className="ml-2 mb-0 h5">{ numberOfProducts }</p>
                  </Link>
                </div>

            </div>
          </div>
      </div>
    </header>
);
}


// function mapStateToProps for number of products in cart
function mapStateToProps(state) {
  return {
    numberOfProducts: state.products.length
  }
}
// connect, HOC
export default connect(mapStateToProps, null)(Header);
