import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getAllBabyProdCat } from '../../utils/walmartService';
import styles from './Products.module.css';

class ProductsPage extends Component {
    // state = {};

    // async componentDidMount() {
    //     const allBabyProdCat = await getAllBabyProdCat();
    //     this.setState({
    //         babyCat: allBabyProdCat.items
    //     })
    // }


    render() {        

        return (
            <div className={`${styles.div}`}>
                    {this.props.babyCat && this.props.babyCat.map((cat, idx) =>
                <div className={`${styles.ProductBox}`} key={`${idx}`}>
                        <Link to={`/products/${idx}`}>
                            <h5>{cat.name}</h5>
                            <img src={`${cat.thumbnailImage}`} alt={`${cat.name}`} ></img>
                            <h4>{cat.msrp}</h4>
                        </Link>
                </div>
                    )}
            </div>
        )
    }
}

export default ProductsPage;