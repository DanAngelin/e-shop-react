import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../assets/icons/fb.svg';
import './Login.css';
import { loginUser, loginUserFb } from '../redux/actions/user';
import { connect } from 'react-redux';

class Login extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
        this.props.history.push('/');
    }
}
 render() {
  return(
      <div className='login-page col-8 d-flex '>
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-2 w-50"/>
                </Link>
            <h1>Login</h1>
            <p>Choose the provider you want to log in with:</p>

            {/* Button Login Google */}
            <button
                className='btn btn-outline-dark d-flex align-items-center'
                onClick={() => this.props.signInWithGoogle()}
            >
                <Google className='w-50 mr-3' />
                <span className='text-nowrap'>Sign in with Google</span>
            </button>

            {/* Button Login FB */}
            <button
                className='btn btn-outline-dark d-flex align-items-center mt-2'
                onClick={() => this.props.signInWithFacebook()}
            >
                <Facebook className='w-50 mr-3' />
                <span className='text-nowrap'>Sign in with Facebook</span>
            </button>
            
            <Link to='/'>Home</Link>
            <Link to='/register'></Link>
      </div>
  );
 }
}

const mapStateToProps = (state) => {
  return {
      user: state.user.data
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      signInWithGoogle: () => dispatch(loginUser()),
      signInWithFacebook: () => dispatch(loginUserFb())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
