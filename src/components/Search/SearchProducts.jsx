import React, {Component} from 'react';


class SearchProducts extends Component {
    constructor(props) {
        this.state = {
            searchProductResults: []
        }
    }

    searchProduct = (searchValue) => {
        var product = searchValue.replace(/ /ig, '+');
        var URL
    }
}