import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../../model/model';
import './ProductDetailsDumb.scss';
import { DetailsItems } from '../DetailsItems/DetailsItems';
import { CustomModal } from '../../../util/CustomModal';

interface IProductDetailsProps {
    product: Product;
    modalStatus: boolean;
    deleteOnClick: (product: Product) => void;
    addOnClick: (product: Product) => void;
    closeModal: () => void;
    confirmModal: () => void;
}

export const ProductDetailsDumb: React.FC<IProductDetailsProps> = (props: IProductDetailsProps) => {

        const title = "Are you sure you want to delete this item?";

        return (
        <div>
            <CustomModal title={title} status={props.modalStatus} 
                        closeModal={() => props.closeModal()} confirmModal={() => props.confirmModal()} />
                        
            <div className="flexContainer">
                <h1 className="title is-3 titleDetails">Product: {props.product.name}</h1>
                <Link to={"/products/" + props.product.id + "/edit"} 
                        className="button is-primary is-large productOperationsButton editButtonDetails">
                        EDIT</Link>
                <Link to="/shopping-cart" className="button is-info is-large productOperationsButton addButtonDetails" 
                        onClick={(e) => props.addOnClick(props.product)}>ADD</Link>
                <button className="button is-danger is-large productOperationsButton deleteButtonDetails" onClick={(e) => {
                        props.deleteOnClick(props.product);
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
