import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setSortOrder } from '../actions/sortOrderAction';

class SortOrder extends Component {
    setPriceSort(order){
        this.props.setSortOrder(order);
    }

    render() {
        return (
            <DropdownButton title={this.props.sort.sort}>
                <Dropdown.Item onClick={() => {this.setPriceSort('Price: Highest to Lowest')}}>Price: Highest to Lowest</Dropdown.Item>
                <Dropdown.Item onClick={() => {this.setPriceSort('Price: Lowest to Highest')}}>Price: Lowest to Highest</Dropdown.Item>
            </DropdownButton>
        )
    }
}

const mapStateToProps = state => ({
    sort: state.sort
});

export default connect(mapStateToProps, {setSortOrder})(SortOrder);