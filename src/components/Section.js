import React, { Component } from 'react';
import Products from './section/Products';
import Details from './section/Details';
import {Route} from "react-router-dom";
import Cart from './section/Cart';
import Payment from './section/Payment';
import Contact from './section/Contact';
import Shipping from './section/Shipping';
import Upload from './section/SelectDropDown';

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Products} exact />
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route path="/payment" component={Payment} />
                <Route path="/contact" component={Contact}/>
                <Route path="/upload" component={Upload} exact/>
                <Route path="/shipping" component={Shipping}/>
            </section>
        )
    }
}

export default Section