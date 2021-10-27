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
            <Card className="my-5" style={{ width: '18rem'}}>
            <Card.Img variant="top" style={{ height: '16rem', 'object-fit': 'cover'}} src={this.props.details.image} />
            <Card.Body >
                <Card.Title>{this.props.details.title}</Card.Title>
                <Card.Title className="text-muted">${this.props.details.price.toFixed(2)}</Card.Title>
                <Card.Text style={{ 
                    overflow: 'hidden', height: '7rem',
                                'display': '-webkit-box',
                                '-webkit-line-clamp': 3,
                                '-webkit-box-orient': 'vertical'}}>
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