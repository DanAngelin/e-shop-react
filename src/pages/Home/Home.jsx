import React from 'react';
import Layout from '../../components/Layout/Layout';
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import products from '../../utils/products.json';
import './Home.css'
import Banner from '../../assets/images/banner.png'

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {

        const categories = Object.keys(products);

        this.setState({categories});
    }

    render() {
        return(
                    <Layout>
                        <div className="container-fluid container-min-max-width">
                            <div className='banner'>
                                <img src={Banner} alt='banner'className='col-10'/>
                            </div>
                            <div className="row">
                                {this.state.categories.map((category, index) =>
                                    <HomeCategory
                                        key={index}
                                        route={category}
                                        name={products[category].name}
                                        description={products[category].description}
                                        image={products[category].image}
                                    />
                                )}
                            </div>
                        </div>
                    </Layout>
                );
    }
}

export default Home;
