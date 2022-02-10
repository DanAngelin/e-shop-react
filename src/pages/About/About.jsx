import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import './About.css';

function About() {
  return(
    <div>
    <Layout>
        <div className='about content-min-height container-min-max-width'>
            <h3>Welcome To <span>E-Shop</span></h3>
                <p> E-Shop s a Professional Online shop Platform. </p>
                <p>Founded in <span>2022 by Dan Angelin</span>, E-Shop has come a long way from its beginnings in <span>Bucharest located in Romania.</span> </p>
                <p>Here we will provide you only interesting content, which you will like very much. </p>
                <p>We're dedicated to providing you the best of Online shop , with a focus on dependability and clothing store online.</p>
                <p>We're dedicated to providing you the best of Store, with a focus on dependability and Hike & Camp. </p>
                <p>We're working to turn our passion for Online shop into a booming online website. </p>
                <p>We hope you enjoy our  Online shop as much as we enjoy offering them to you.</p>
                <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
                <p>Thanks For Visiting Our Site</p>
                <p>Have a nice day !</p>
                <div className='d-flex justify-content-center'>
                  <Link to='/'><button className="btn btn-outline-dark d-flex justify-content-center align-items-center p-2 mt-2"><Home />Home</button></Link>
                </div>
        </div>
    </Layout>
</div>
  );
}

export default About;
