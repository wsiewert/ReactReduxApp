import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setCategoryFilter, setCategories } from '../actions/categoriesAction';

class ProductCategoryDropDown extends Component {
    componentDidMount(){

    }

    setCatFilter(cat){
        this.props.setCategoryFilter(cat);
    }

    render() {
        const categoriesList = this.props.category.categories.map(
            cat => (
                <Dropdown.Item key={cat} onClick={() => {this.setCatFilter(cat)}}>{cat}</Dropdown.Item>
            )
        );

        return (
            <DropdownButton title={this.props.category.category}>
                {categoriesList}
            </DropdownButton>
        )
    }
}

const mapStateToProps = state => ({
    category: state.categories,
    products: state.products.items
});

export default connect(mapStateToProps, {setCategoryFilter, setCategories})(ProductCategoryDropDown);