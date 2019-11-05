import React, { Component } from 'react';

class CardProduct extends Component {
    state = {
        order: 1
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgdTu2zXzS2Sc3aL7bSGX2_scT8mGNV7-lX4ZqQI4wzTL97C3ISqINg4MJpYvOnQ&usqp=CAc" alt="product_image" />
                </div>
                <p className="product-title">Google Pixel 4 XL</p>
                <p className="product-price">$ 900</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="minus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;