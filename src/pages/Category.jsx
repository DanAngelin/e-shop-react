import React, { Component } from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {}
        }
    }

    componentDidMount() {

        console.log(this.props);

        const { match } = this.props;

        const categoryName = match.params.categoryName;

        this.setState({ category: products[categoryName] });
    }

    render() {
        return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <h2>{ this.state.category.name }</h2>
                </div>
            </Layout>
        );
    }
}

export default Category;