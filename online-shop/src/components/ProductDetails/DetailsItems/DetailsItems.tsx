import React from 'react';
import { FormBasicItem } from '../../../util/FormBasicItem';
import { Product } from '../../../model/model';
import { FormTextAreaItem } from '../../../util/FormTextAreaItem';

export const DetailsItems: React.FC<Product> = (props: Product) => {
    return (
        <div className="column">
            <FormBasicItem labelName="Name" value={props.name} type="text" 
                        disabledStatus={true} onChange={(e) => e} />
            <FormBasicItem labelName="Category" value={props.category} type="text" 
                        disabledStatus={true} onChange={(e) => e} />
            <FormBasicItem labelName="Price" value={String(props.price)} type="number" 
                        disabledStatus={true} onChange={(e) => e} />

            <FormTextAreaItem text={props.description} onChange={(e) => e} disabledStatus={true} />
        </div>
    );
}
