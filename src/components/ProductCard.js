import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class ProductCard extends Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.details.image} />
            <Card.Body>
                <Card.Title>{this.props.details.title}</Card.Title>
                <Card.Text>
                {this.props.details.description}
                </Card.Text>
                <Button variant="primary">Add To Cart +</Button>
            </Card.Body>
            </Card>
        )
    }
}
 export default ProductCard;