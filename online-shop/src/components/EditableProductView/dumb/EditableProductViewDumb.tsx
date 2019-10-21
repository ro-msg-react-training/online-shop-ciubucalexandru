import React from 'react';
import './EditableProductViewDumb.scss';
import { FormBasicItem } from '../../../util/FormBasicItem';
import { FormButtons } from '../FormButtons/FormButtons';
import { FormTextAreaItem } from '../../../util/FormTextAreaItem';
import { IEditableProductViewSmartProps } from '../smart/EditableProductViewSmart';
import { ErrrorMessageLabel } from '../../../util/ErrorMessageLabel/ErrorMessageLabel';
import { Redirect } from 'react-router';
import { STATUS_SUCCESS, STATUS_FAIL } from '../../../util/util';

export const EditableProductViewDumb: React.FC<IEditableProductViewSmartProps> = 
            (props: IEditableProductViewSmartProps) => {

    const redirectLink: string = props.getOperationMethod(props).toLowerCase() === 'put' ? 
        '/products/' + props.getProductId(props) : '/products';
    
    const UPDATE_PRODUCT_ERROR = "An error occured while updating the product details.";
    const RETRIEVE_PRODUCT_ERROR = "An error occured while retrieving the product details.";

    if (props.hasError) {
        return (
            <ErrrorMessageLabel errorMessage={RETRIEVE_PRODUCT_ERROR}/>
        );
    } else if (props.updateStatus === STATUS_SUCCESS) {
        props.clearUpdateStatus();
        return (
            <Redirect to={redirectLink} ></Redirect>
        );
    } else if (props.updateStatus === STATUS_FAIL) {
        return (
            <ErrrorMessageLabel errorMessage={UPDATE_PRODUCT_ERROR} />
        );
    }

    return (
        <div className="box editableBox">
            <h1 className="title is-2 headerOptions">
                {props.getOperationName(props)}: {props.editableProduct.name}
            </h1>

            <FormBasicItem labelName="Name" value={props.editableProduct.name} type="text" 
                            onChange={(e) => props.changeName(e.target.value)} disabledStatus={false}/>
            <FormBasicItem labelName="Category" value={props.editableProduct.category} type="text" 
                            onChange={(e) => props.changeCategory(e.target.value)} disabledStatus={false} />
            <FormBasicItem labelName="Price" value={String(props.editableProduct.price)} type="number" 
                            onChange={(e) => props.changePrice(e.target.value)} disabledStatus={false} />
            <FormBasicItem labelName="Image" value={props.editableProduct.image} type="text" 
                            onChange={(e) => props.changeImage(e.target.value)} disabledStatus={false} />

            <FormTextAreaItem text={props.editableProduct.description} 
                            onChange={(e) => props.changeDescription(e.target.value)} disabledStatus={false} />
            
            <FormButtons onSubmitAction={() => props.onSubmitAction(props)} 
                           operationName={props.getOperationName(props)}  productId={props.editableProduct.id} 
                           formStatus={props.generateFormStatus(props)} redirectLink={redirectLink}/>
        </div>
    );
}
