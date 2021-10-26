import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productAction'
import ProductCard from '../components/ProductCard';
import ProductCategoryDropDown from '../components/ProductCategoryDropDown';
import { setCategories } from '../actions/categoriesAction';

class ProductsContainer extends Component {

    componentDidMount(){
        this.props.fetchProducts()
    }

    componentDidUpdate(prevProps, prevState){
        //Update Categories After Fetch Products
        if (prevProps.products !== this.props.products) {
            this.props.setCategories(this.getCategoriesFromProducts());
        }
    }

    getCategoriesFromProducts(){
        let categoryList = ["All"];
        this.props.products.forEach((item, index) => {
            if(!categoryList.includes(item.category)){
                categoryList.push(item.category);
            }
        })
        return categoryList;
    }

    //TODO: fix after filter state
    render() {
        const categoryFilter = (prod) => {
            if(this.props.category.category === "All"){
               return prod; 
            } else {
                return prod.category === this.props.category.category
            }
        }

        //TODO: use displayedProducts Filter and sort
        const productItems = this.props.products
            .filter(categoryFilter)
            // .filter(prod => prod.price > 40)
            .map(prod => (
                <Col key={prod.id}>
                    <ProductCard details={prod}/>
                </Col>
        ));

        return (
            <div>
                <h2>Browse Products</h2>
                <ProductCategoryDropDown/>
                <Container fluid>
                <Row>
                    {productItems}
                </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    category: state.categories,
    products: state.products.items
});

export default connect(mapStateToProps, { fetchProducts, setCategories })(ProductsContainer);