import React from 'react';
import './FormButtons.scss';
import { Link } from 'react-router-dom';

interface IFormButtonsProps {
    operationName: string;
    formStatus: boolean;
    productId: number;
    onSubmitAction: () => void;
}

export const FormButtons: React.FC<IFormButtonsProps> = (props: IFormButtonsProps) => {

    const redirectLink: string = props.operationName.toLowerCase() === 'edit' ? 
                '/products/' + props.productId : '/products';
    const formStatusText: string = props.formStatus ? 
                ' ' : 'Please don\'t leave any empty fields and make the price higher than 0!';

    return (
        <div>
            <div className="field is-grouped is-grouped-centered">
                <p className="control formStatusColor">
                    {formStatusText}
                </p>
            </div>
            <div className="field is-grouped is-grouped-centered buttonsContainer">
                <p className="control">
                    <Link to={redirectLink} className="button is-primary linkCustom" onClick={(e) => {
                        if (props.formStatus === false) {
                            e.preventDefault();
                        } else {
                            props.onSubmitAction();
                        }
                    }}>
                        Submit
                    </Link>
                </p>
                <p className="control">
                    <Link to={redirectLink} className="button is-light" >
                        Cancel
                    </Link>
                </p>
            </div>
        </div>
    )
}
