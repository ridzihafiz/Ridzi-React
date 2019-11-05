import React, { Component, Fragment } from 'react';
import './Product.css'
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        order: 1
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://www.freepik.com/redirect?url=aHR0cHM6Ly9zaHV0dGVyc3RvY2suN2Vlci5uZXQvYy8zOTQyMi80MzA2OC8xMzA1P3N1YklkMT1vcmdhbmljX0VOX0Emc3ViSWQyPXNlYXJjaCZzdWJJZDM9aWNvbitwbmcmc2hhcmVkSWQ9NWRiNmE0M2Y5NDBmMi41ZGI2YTQzZjk0MGYzJnU9aHR0cCUzQSUyRiUyRnd3dy5zaHV0dGVyc3RvY2suY29tJTJGZW4lMkZwaWMubWh0bWwlM0ZpZCUzRDExNjQwMjAyODc=&client_id=0" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://thumb7.shutterstock.com/thumb_large/203747315/1162911214/stock-vector-shopping-cart-vector-icon-isolated-on-transparent-background-shopping-cart-logo-concept-1162911214.jpg" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>
            </Fragment>
        )
    }
}

export default Product;