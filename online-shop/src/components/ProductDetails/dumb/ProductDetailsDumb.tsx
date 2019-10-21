import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './ProductDetailsDumb.scss';
import { DetailsItems } from '../DetailsItems/DetailsItems';
import { CustomModal } from '../../../util/CustomModal';
import { IProductDetailsPropsSmart } from '../smart/ProductDetailsSmart';
import { ErrrorMessageLabel } from '../../../util/ErrorMessageLabel/ErrorMessageLabel';
import { STATUS_FAIL, STATUS_SUCCESS } from '../../../util/util';

export const ProductDetailsDumb: React.FC<IProductDetailsPropsSmart> = (props: IProductDetailsPropsSmart) => {

    const RETRIEVE_PRODUCT_MESSAGE = "Failed to retrieve product details.";
    const DELETE_PRODUCT_MESSAGE = "Failed to delete product.";
    const title = "Are you sure you want to delete this item?";

    if (props.hasFetchError) {
        return (
            <ErrrorMessageLabel errorMessage={RETRIEVE_PRODUCT_MESSAGE} />
        );
    } else if (props.deleteStatus === STATUS_FAIL) {
        return (
            <ErrrorMessageLabel errorMessage={DELETE_PRODUCT_MESSAGE} />
        );
    } else if (props.deleteStatus === STATUS_SUCCESS) {
        props.clearDeleteStatus();
        return (
            <Redirect to="/products"></Redirect>
        );
    }

    return (
        <div>
            <CustomModal title={title} status={props.showModal} 
                        closeModal={() => props.closeModal()} confirmModal={() => props.confirmModal()} />
                        
            <div className="flexContainer">
                <h1 className="title is-3 titleDetails">Product: {props.product.name}</h1>
                <Link to={"/products/" + props.product.id + "/edit"} 
                        className="button is-primary is-large productOperationsButton editButtonDetails">
                        EDIT</Link>
                <Link to="/shopping-cart" className="button is-info is-large productOperationsButton addButtonDetails" 
                        onClick={(e) => props.addItemToCart(props.product)}>ADD</Link>
                <button className="button is-danger is-large productOperationsButton deleteButtonDetails" 
                        onClick={(e) => {
                            props.openModal();
                }}>DELETE</button>
            </div>

            <div className="box productDetails">
                <div className="columns is-vcentered">
                    <div className="column is-one-fifth">
                        <figure className="image">
                            <img src={props.product.image} alt={props.product.name}/>
                        </figure>
                    </div>
                    <DetailsItems {...props.product} />
                </div>
            </div>
        </div>
    )
}
