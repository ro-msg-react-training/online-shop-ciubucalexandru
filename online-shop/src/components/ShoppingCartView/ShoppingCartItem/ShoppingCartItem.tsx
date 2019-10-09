import React from 'react';
import { Product, CartItem } from '../../../model/model';
import './ShoppingCartItem.scss';

export { ShoppingCartItem };

class ShoppingCartItem extends React.Component<CartItem, {currentPrice: number, quantity: number}> {

    constructor(props: CartItem) {
        super(props);
        this.state = {
            quantity: this.props.quantity,
            currentPrice: this.props.product.price * this.props.quantity
        };
        this.initializeOptions();
    }

    private initializeOptions() {

        let populateOptionsArray: number[] = [];

        for(let i:number = 1; i <= 30; i++) {
            populateOptionsArray[populateOptionsArray.length] = i;
        }
    
        return populateOptionsArray.map((value) => {
            return <option key={value}>{value}</option>;
        });
    }
    
    private calculateCurrentSum(price: number, event: any) {
        this.setState({
            quantity: event.target.value,
            currentPrice: price * event.target.value
        });
        this.props.updateQuantity(event.target.value);
    }

    render () {
        return (
            <div key={this.props.product.id} className="list-item box columns boxProps is-vcentered">
                <figure className="image is-pulled-left productImage">
                    <img src={this.props.product.image}/>
                </figure>
                <div className="column">
                    <p className="title is-5">{this.props.product.name}</p>
                    <p className="box productDescription">{this.props.product.description}</p>
                </div>
                <div className="column columns is-one-fifth  is-vcentered">
                    <div className="column">
                        <p>{this.state.currentPrice} RON</p>
                        <p>({this.state.quantity} * {this.props.product.price})</p>
                        <br></br>
                        <div className="field control">
                            <div className="select is-info">
                                <select onChange={(e) => this.calculateCurrentSum(this.props.product.price, e)}>
                                    <option>{this.props.quantity}</option>
                                    {this.initializeOptions()}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-fifth">
                        <a className="button is-primary is-small is-pulled-right">X</a>
                    </div>
                </div>
                
            </div>
        );
    }
}