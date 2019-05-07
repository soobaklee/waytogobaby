import React from 'react';
import styles from './ProductDetailPage.module.css';

class ProductDetailPage extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    // }

    // async componentDidMount() {
    //     this.setState({
    //         
    //     })
    // }

    render() {
        return (
            <div> Hello
                <div className={`${styles.ProductDetailPage}`}>
                    <div className={`${styles.div}`}>
                        <h1>Works</h1>
                        <h2>{this.props.babyCat[this.props.match.params.id].name}</h2>
                        <img src={`${this.props.babyCat[this.props.match.params.id].largeImage}`} alt={`${this.props.babyCat[this.props.match.params.id].name}`} ></img><br></br>
                        <p>{this.props.babyCat[this.props.match.params.id].brandName} Model: {this.props.babyCat[this.props.match.params.id].modelNumber}</p>
                        <p className={`${styles.descrip}`}>Description: {this.props.babyCat[this.props.match.params.id].shortDescription}</p>
                        <p>MSRP: ${this.props.babyCat[this.props.match.params.id].msrp}</p>
                    </div>
                </div>
            </div>
        );
    }

}

// const ProductDetailPage = () => {
//     return (
//         <div>
//             {/* <h1>{props.babyCat[props.match.params.id].name}</h1> */}
//             <h2>HELLOOOOOOOOOO</h2>
//         </div>
//     )
// }

export default ProductDetailPage;