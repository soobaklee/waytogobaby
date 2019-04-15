import React, { Component } from 'react';
// import { getAllBabyProdCat } from '../../utils/walmartService';
import styles from './ProductDetailPage.module.css';

const ProductDetailPage = (props) => {
    // state = {};

    // async componentDidMount() {
    //     const allBabyProdCat = await getAllBabyProdCat();
    //     this.setState({
    //         babyCat: allBabyProdCat.items
    //     })
    // }

    // render() {
    return (
        <div className={`${styles.div}`}>

            <h2>{props.babyCat[props.match.params.id].name}</h2>
            {props.babyCat[props.match.params.id].largeImage}<br></br>
            <p>From: {props.babyCat[props.match.params.id].brandName}</p>
            <p>Description: {props.babyCat[props.match.params.id].longDescription}</p>
            <p>Model: {props.babyCat[props.match.params.id].modelNumber}</p>
            <p>MSRP: {props.babyCat[props.match.params.id].msrp}</p>



        </div>
    )
    // }
}

export default ProductDetailPage;