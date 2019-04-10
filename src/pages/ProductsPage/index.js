import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../components/Category/Category';
import { getAllBabyProdCat } from '../../utils/tp-api';
const babyKey = process.env.BABYPROD_KEY;

class ProductsPage extends Component {

    async componentDidMount() {
        // const user = userService.getUser();
        let cat = 5427;
        const allBabyProdCat = await getAllBabyProdCat(cat, babyKey);
        console.log(allBabyProdCat.items);
        this.setState({
            babyCat: allBabyProdCat.items
        })
    }

    render() {
        return (
            <div>
                <ul>
                  {/* {this.state.babyCat.map((cat, idx) =>
                    <li>
                      {cat.name}
                    </li>
                  )} */}
                </ul>
                <Category
                    // babyCat={this.state.babyCat}
                />
            </div>
        )
    }
}

export default ProductsPage;