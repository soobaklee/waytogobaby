import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { getAllBabyProdCat } from '../../utils/walmartService';
import userService from '../../utils/userService';
import styles from './Products.module.css';
import ProductDetailPage from '../ProductDetailPage';

class ProductsPage extends Component {
    // constructor() {
    //     super();
    state = {
        babyCat: []
    }
    // }

    async componentDidMount() {
        const user = userService.getUser();
        const allBabyProdCat = await getAllBabyProdCat();
        this.setState({
            user,
            babyCat: allBabyProdCat.items,
        });
    }


    render() {
        let productview =
            <div className={`${styles.firstdiv}`}>
                <div className={`${styles.div}`}>
                    {this.state.babyCat.map((cat, idx) =>
                        <Link to={`/products/${idx}`} key={idx}>
                            <div className={`${styles.ProductBox}`} >
                                <p>{cat.name}</p><br></br>
                                <div className={`${styles.thumbnail}`}>
                                    <img src={`${cat.thumbnailImage}`} alt={`${cat.name}`} ></img>
                                </div>
                                <h4>msrp: ${cat.msrp}</h4>
                            </div>
                        </Link>
                    )}
                </div>
            </div>

        return (
            <Switch>
                <Route exact path='/products' render={() => (
                    <div className={`${styles.ProductsView}`}>
                        {/* <div className={`${styles.firstdiv}`}> */}
                        <div className={`${styles.div}`}>
                            {this.state.babyCat.map((cat, idx) =>
                                <Link to={`/products/${idx}`} key={idx}>
                                    <div className={`${styles.ProductBox}`} >
                                        <p>{cat.name}</p><br></br>
                                        <div className={`${styles.thumbnail}`}>
                                            <img src={`${cat.thumbnailImage}`} alt={`${cat.name}`} ></img>
                                        </div>
                                        <h4>msrp: ${cat.msrp}</h4>
                                    </div>
                                </Link>
                            )}
                        </div>
                        {/* </div> */}
                    </div>
                )}
                />
                <Route exact path='/products/:id' render={(props) => (
                    <div>
                        <h1>This is a product detail page</h1>
                        <ProductDetailPage
                            {...props}
                            user={this.state.user}
                            babyCat={this.state.babyCat}
                        />
                    </div>
                )} />
            </Switch>
        )
    }
}

export default ProductsPage;