import React from 'react';
import {Link} from 'react-router-dom';
import './HomeCategory.css'


function HomeCategory(props) {
    const {route, name, description, image} = props;

    return(
        <div className='col-md-4 col-sm-12 mb-4 d-flex flex-row justify-content-center'>
        <div className="col-md-12 mb-4 card">
            <Link to={`/category/${route}`}>
                <div className="w-100">
                    <img src={image} alt={name} className="w-100 image-category"/>
                </div>
                <h2 className="h4 my-1"><strong>{name}:</strong></h2>
                <p className="m-0">{description}</p>
            </Link>
        </div>
         </div>
    );
}

export default HomeCategory;