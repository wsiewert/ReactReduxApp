import React, { Component } from 'react';
import { Nav, Navbar, Badge } from 'react-bootstrap';
import { connect } from 'react-redux';
import {showCart, hideCart} from '../actions/cartAction';

class NavigationBar extends Component {

    showCart(){
        this.props.showCart()
    }

    hideCart(){
        this.props.hideCart();
    }

    render() {
        return (
            <Navbar className="nav-gradient" bg="light" expand="lg">
                <Navbar.Brand onClick={()=>{this.hideCart()}}>Online React-Redux Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={()=>{this.showCart()}}>
                            Cart Items: <Badge bg="secondary">{this.props.cart.items.length}</Badge>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

 export default connect(mapStateToProps, {showCart, hideCart})(NavigationBar);