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
            <div className={`${styles.firstdiv}`}>
                <div className={`${styles.div}`}>
                    {this.props.babyCat && this.props.babyCat.map((cat, idx) =>
                        <div className={`${styles.ProductBox}`} key={`${idx}`}>
                            <Link to={`/products/${idx}`}>
                                <p>{cat.name}</p><br></br>
                                <div className={`${styles.thumbnail}`}>
                                    <img src={`${cat.thumbnailImage}`} alt={`${cat.name}`} ></img>
                                </div>
                                <h4>msrp: ${cat.msrp}</h4>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ProductsPage;