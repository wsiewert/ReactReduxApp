import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class CartList extends Component {


    render() {

        const tableData = this.props.cart.items.map(
            (item, index) => (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td><Button variant="danger">Remove</Button></td>
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
                </tbody>
            </Table>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

 export default connect(mapStateToProps)(CartList);