import React from 'react';
import { Product } from '../../../model/model';
import './EditableProductViewDumb.scss';
import { FormBasicItem } from '../../../util/FormBasicItem';
import { FormButtons } from '../FormButtons/FormButtons';
import { FormTextAreaItem } from '../../../util/FormTextAreaItem';

interface IEditableProductViewProps {
    product: Product;
    operationName: string;
    formStatus: boolean;
    redirectLink: string;
    onSubmitAction: (product: Product) => void;
    changeName: (name: string) => void;
    changeCategory: (category: string) => void;
    changePrice: (price: number) => void;
    changeImage: (image: string) => void;
    changeDescription: (description: string) => void;
}

export const EditableProductViewDumb: React.FC<IEditableProductViewProps> = (props: IEditableProductViewProps) => {
    return (
        <div className="box editableBox">
            <h1 className="title is-2 headerOptions">
                {props.operationName}: {props.product.name}
            </h1>

            <FormBasicItem labelName="Name" value={props.product.name} type="text" 
                            onChange={(e) => props.changeName(e.target.value)} disabledStatus={false}/>
            <FormBasicItem labelName="Category" value={props.product.category} type="text" 
                            onChange={(e) => props.changeCategory(e.target.value)} disabledStatus={false} />
            <FormBasicItem labelName="Price" value={String(props.product.price)} type="number" 
                            onChange={(e) => props.changePrice(e.target.value)} disabledStatus={false} />
            <FormBasicItem labelName="Image" value={props.product.image} type="text" 
                            onChange={(e) => props.changeImage(e.target.value)} disabledStatus={false} />

            <FormTextAreaItem text={props.product.description} 
                            onChange={(e) => props.changeDescription(e.target.value)} disabledStatus={false} />
            
            <FormButtons onSubmitAction={() => props.onSubmitAction(props.product)} 
                           operationName={props.operationName}  productId={props.product.id} 
                           formStatus={props.formStatus} redirectLink={props.redirectLink}/>
        </div>
    );
}
