import React, { Component } from 'react'
import CartList from '../components/CartList'

export default class CartContainer extends Component {
    render() {
        return (
            <div>
                <h1>CART CONTAINER</h1>
                <CartList/>
            </div>
        )
    }
}
