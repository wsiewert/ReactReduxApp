import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartAction';

class ProductCard extends Component {

    addItemToCart(item){
        this.props.addToCart(item);
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.details.image} />
            <Card.Body>
                <Card.Title>{this.props.details.title}</Card.Title>
                <Card.Text>
                {this.props.details.description}
                </Card.Text>
                <Button variant="primary" onClick={()=>{this.addItemToCart(this.props.details)}}>Add To Cart +</Button>
            </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

 export default connect(mapStateToProps, {addToCart})(ProductCard);