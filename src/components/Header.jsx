import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import { ReactComponent as LoginIcon } from '../assets/icons/login.svg';
import './Header.css';


function Header(props) {

const {user, signOut} = props;

function handleSignOut() {
  signOut();
}


  return(
    <header className="border-bottom mb-3">
      <div className="container-fluid container-min-max-width
                      d-flex justify-content-between align-items-center">
          <Link to="/" className="my-3">
              <img src={Logo} alt="E-Shop-React" className="logo"/>
          </Link>
          <div>
                  { user && <p>Hello, {user.displayName}!</p> }
            <div className="d-flex justify-content-end align-items-center ">
                { user
                  ? <p className="logout h5" onClick={handleSignOut}>Logout</p>
                  : <Link to="/login" className="h5">Login<LoginIcon className='login-icon'/></Link>
                }
                <ShoppingCart className="ml-2"/>
            </div>
          </div>
      </div>
    </header>
);
}

export default Header;
