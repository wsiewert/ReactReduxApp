import React, { Component } from 'react'
import NavBar from '../components/NavigationBar';

import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productAction'

class Home extends Component {

    componentDidMount(){
        this.props.fetchProducts();
        console.log(this.props.products);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h2>Home Page</h2>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.items
});

export default connect(mapStateToProps, { fetchProducts })(Home);