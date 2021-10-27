import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productAction'
import ProductCard from '../components/ProductCard';
import ProductCategoryDropDown from '../components/ProductCategoryDropDown';
import { setCategories } from '../actions/categoriesAction';
import SortOrder from '../components/SortOrder';

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

        const sortOrder = (a, b) => {
            if(this.props.sort === "Price: Highest to Lowest"){
                return b.price-a.price;
            } else {
                return a.price-b.price;
            }
        }

        //TODO: use displayedProducts Filter and sort
        const productItems = this.props.products
            .filter(categoryFilter)
            .sort(sortOrder)
            .map(prod => (
                <Col key={prod.id}>
                    <ProductCard details={prod}/>
                </Col>
        ));

        return (
            <div className="p-5">
                <h2 >Browse Products</h2>
                <div className="d-inline">
                    <ProductCategoryDropDown />
                    <SortOrder/>
                </div>
                <span className="mx-5"/>
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
    products: state.products.items,
    sort: state.sort.sort
});

export default connect(mapStateToProps, { fetchProducts, setCategories })(ProductsContainer);