import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartAction';

class CartList extends Component {

    removeItem(index){
        console.log("Removed Item");
        this.props.removeFromCart(index);
    }

    getTotalPrice(){
        console.log("THIS MADE IT");
        let total = 0;
        this.props.cart.items.forEach((item) => {
            total += item.price;
        });
        return total.toFixed(2);
    }

    render() {
        const tableData = this.props.cart.items.map(
            (item, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td><Button variant="danger" onClick={() => {this.removeItem(index)}}>Remove</Button></td>
                </tr>
            ));

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total: {this.getTotalPrice()}</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

 export default connect(mapStateToProps, { removeFromCart })(CartList);