import React from 'react';
import './FormButtons.scss';
import { Link } from 'react-router-dom';

interface IFormButtonsProps {
    operationName: string;
    formStatus: boolean;
    productId: number;
    redirectLink: string;
    onSubmitAction: () => void;
}

export const FormButtons: React.FC<IFormButtonsProps> = (props: IFormButtonsProps) => {

    const formStatusText: string = props.formStatus ? 
                ' ' : 'Please don\'t leave any empty fields and make the price higher than 0!';

    return (
        <>
            <div className="field is-grouped is-grouped-centered">
                <p className="control formStatusColor">
                    {formStatusText}
                </p>
            </div>
            <div className="field is-grouped is-grouped-centered buttonsContainer">
                <p className="control">
                    <button className="button is-primary linkCustom" onClick={(e) => {
                            props.onSubmitAction();
                    }}>
                        Submit
                    </button>
                </p>
                <p className="control">
                    <Link to={props.redirectLink} className="button is-light" >
                        Cancel
                    </Link>
                </p>
            </div>
        </>
    )
}
