import React from 'react';
import './Page404.css';
import Img404 from '../../assets/images/404notfound.png';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icons/home.svg';

function Page404() {
  return(
      <div className='page_404 container-min-max-width d-flex flex-column align-items-center justify-content-center'>
          <img src={Img404} alt="404 page"/>
          <Link to='/'><button className="btn btn-outline-dark d-flex align-items-center p-2 mt-2"><Home />Home</button></Link>
      </div>
  );
}

export default Page404;
