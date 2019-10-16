import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCartItemDumb.scss';
import { Product } from '../../../../model/model';

interface IShoppingCartItemDumb {
    product: Product;
    quantity: number;
    updateItemQuantity: (newQuantity: number) => void;
    deleteItemFromCart: () => void;
}

export const ShoppingCartItemDumb: React.FC<IShoppingCartItemDumb> = (props: IShoppingCartItemDumb) => {
    return (
        <div key={props.product.id} className="list-item box columns boxProps is-vcentered">
            <Link to={"/products/" + props.product.id} className="is-pulled-left productImage">
                <figure className="image">
                    <img src={props.product.image} alt={props.product.name}/>
                </figure>
            </Link>
            
            <div className="column">
                <p className="title is-5">{props.product.name}</p>
                <p className="box productDescription">{props.product.description}</p>
            </div>
            <div className="column columns is-one-fifth is-vcentered">
                <div className="column">
                    <p>{props.quantity * props.product.price} RON</p>
                    <p>({props.quantity} * {props.product.price})</p>
                    <br></br>
                    <div className="field control">
                        <div className="select is-info">
                            <select onChange={(e) => props.updateItemQuantity(Number(e.target.value))}>
                                <option>{props.quantity}</option>
                                {initializeOptions()}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="column is-one-fifth">
                    <div className="button is-primary is-small is-pulled-right" onClick={(e) => props.deleteItemFromCart()}>X</div>
                </div>
            </div>
            
        </div>
    );
}

function initializeOptions() {

    let populateOptionsArray: number[] = [];

    for(let i:number = 1; i <= 30; i++) {
        populateOptionsArray[populateOptionsArray.length] = i;
    }

    return populateOptionsArray.map((value) => {
        return <option key={value}>{value}</option>;
    });
}