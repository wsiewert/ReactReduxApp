import React, { Component } from 'react'
import NavBar from '../components/NavigationBar';
import ProductsContainer from '../containers/ProductsContainer';
import { connect } from 'react-redux';
import CartContainer from '../containers/CartContainer';

class Home extends Component {

    render() {
        return (
            <div>
                <NavBar/>
                <h1 className="text-center m-5">React-Redux Store</h1>
                {this.props.cart.showCart ? <CartContainer/> : <ProductsContainer/> }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Home);;