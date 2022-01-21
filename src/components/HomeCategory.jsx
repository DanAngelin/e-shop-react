import React from 'react';
import {Link} from 'react-router-dom';
import './HomeCategory.css'


function HomeCategory(props) {
    const {route, name, description, image} = props;

    return(
        <div className="col-sm-12 col-md-4 mb-5 card">
            <Link to={`/category/${route}`}>
                <div className="w-100">
                    <img src={image} alt={name} className="w-100 image-category"/>
                </div>
                <h2 className="h4 my-1"><strong>{name}:</strong></h2>
                <p className="m-0">{description}</p>
            </Link>
        </div>
    );
}

export default HomeCategory;