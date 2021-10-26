import React, { Component } from 'react'
import NavBar from '../components/NavigationBar';
import ProductsContainer from '../containers/ProductsContainer';

class Home extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                <h2>Home Page STORE TITLE GOES HERE</h2>
                <ProductsContainer/>
            </div>
        )
    }
}

export default Home;