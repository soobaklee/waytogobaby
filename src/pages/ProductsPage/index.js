import React, { Component } from 'react';
import {getAllBabyProdCat} from '../../utils/walmartService';
import styles from './Products.module.css';

class ProductsPage extends Component {
    state = {};

    async componentDidMount() {
        const allBabyProdCat = await getAllBabyProdCat();
        console.log(allBabyProdCat);
        this.setState({
            babyCat: allBabyProdCat.items
        })
    }

    render() {
        return (
            <div className={`${styles.div}`}>
                  {this.state.babyCat && this.state.babyCat.map((cat, idx) =>
                <div className={`${styles.ProductBox}`} key={`${idx}`}>
                    
                      {cat.name}, MSRP: {cat.msrp}
                    
                </div>
                  )}
            </div>
        )
    }
}

export default ProductsPage;