import React from 'react';
// import { getAllBabyProdCat } from '../../utils/walmartService';
import styles from './ProductDetailPage.module.css';

const ProductDetailPage = (props) => {
    // state = {};

    // async componentDidMount() {
    //     this.setState({
    //         
    //     })
    // }

    // render() {
    return (
        <div className={`${styles.div}`}>

            <h2>{props.babyCat[props.match.params.id].name}</h2>
            <img src={`${props.babyCat[props.match.params.id].largeImage}`} alt={`${props.babyCat[props.match.params.id].name}`} ></img><br></br>
            <p>{props.babyCat[props.match.params.id].brandName} Model: {props.babyCat[props.match.params.id].modelNumber}</p>
            <p>Description: {props.babyCat[props.match.params.id].shortDescription}</p>
            <p>MSRP: ${props.babyCat[props.match.params.id].msrp}</p>
        </div>
    )
    // }
}

export default ProductDetailPage;