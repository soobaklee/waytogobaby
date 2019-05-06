import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { getAllBabyProdCat } from '../../utils/walmartService';
import userService from '../../utils/userService';
import styles from './Products.module.css';
import ProductDetailPage from '../ProductDetailPage';

class ProductsPage extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    async componentDidMount() {
        const user = userService.getUser();
        const allBabyProdCat = await getAllBabyProdCat();
        this.setState({
            user,
            babyCat: allBabyProdCat.items,
        })
    }


    render() {
        let productview =
            <div className={`${styles.firstdiv}`}>
                <div className={`${styles.div}`}>
                    {this.state.babyCat && this.state.babyCat.map((cat, idx) =>
                        <div className={`${styles.ProductBox}`} key={idx}>
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

        return (
            <Switch>
                <Route exact path='/products' render={(props) => (
                    <div className='ProductsView'>
                        
                        {productview}
                    </div>
                )}
                />
                <Route exact path='/products/:id' render={(props) => (
                    <ProductDetailPage
                        {...props}
                        user={this.state.user}
                        babyCat={this.state.babyCat}
                    />
                )} />
            </Switch>
            )
        }
    }
    
export default ProductsPage;