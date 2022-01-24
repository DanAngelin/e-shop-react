import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../assets/icons/fb.svg';
import './Login.css'

function Login(props) {

  const {signInWithGoogle, signInWithFacebook, history} = props;

  function handleGoogleLogin() {
    const googleLoginResponse = signInWithGoogle();

    googleLoginResponse.then(() => {
      history.push('/');
    });
  }

  function handleFacebookLogin() {
    const facebookLoginResponse = signInWithFacebook();

    facebookLoginResponse.then(() => {
      history.push('/');
    })
  }

  return(
      <div className='login-page col-8 d-flex '>
            <Link to='/'>
                <img src={Logo} alt="logo" className="mb-2 w-50"/>
            </Link>
        <h1>Login</h1>
        <p>Choose the provider you want to log in with:</p>
        <button
              className='btn btn-outline-dark d-flex align-items-center'
              onClick={handleGoogleLogin}
        >
            <Google className='w-50 mr-3' />
            <span className='text-nowrap'>Sign in with Google</span>
        </button>
        <button
              className='btn btn-outline-dark d-flex align-items-center mt-2'
              onClick={handleFacebookLogin}
        >
            <Facebook className='w-50 mr-3' />
            <span className='text-nowrap'>Sign in with Facebook</span>
        </button>
        <Link to='/'>Home</Link>
        <Link to='/register'></Link>
      </div>
  );
}

export default Login;
