import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Phone } from '../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../assets/icons/linkedin.svg';
import './Footer.css';

function Footer() {
  return(
    <footer className='bottom-fixed'>
    <div className="container-fluid container-min-max-width
        d-flex justify-content-between align-items-center">
        <div>
            <h3 className='h5'>Quick Links:</h3>
            <p className='mb-1'>
                <Link to="/about">About</Link>
            </p>
            <p className='mb-0'>
                <Link to='/terms-and-conditions'>Terms and Conditions</Link>
            </p>
        </div>

        <div>
            <h3 className='h5'>Contact me:</h3>
            <p className='mb-1'>
                <a href="mailto:dan.angelin@hotmail.com">
                    <Mail className='mr-1 mb-1 footer-icon' />
                    dan.angelin@hotmail.com
                </a>
            </p>
            <p className='m-0'>
                <Phone className='mr-1 footer-icon' />
                +4072222222
            </p>
        </div>

        <div>
            <h3 className='h5'>Social Links</h3>
            <p className='mb-1'>
               <a href="https://github.com/DanAngelin">
                   <GitHub className='mr-1 mb-1 footer-icon' />
                   DanAngelin
               </a>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/angelindan/">
                    <LinkedIn className='mr-1 footer-icon' />
                    angelindan
                </a>
            </p>
        </div>

    </div>
    
    <div className='text-center py-3'>
            &copy; Dan Angelin, 2022 | For Educational Purposes Only
        </div>
    </footer>
  );
}

export default Footer;
