import React from 'react';
import './ErrorMessageLabel.scss';

interface IErrorMessageLabelProps {
    errorMessage: string;
}

export const ErrrorMessageLabel: React.FC<IErrorMessageLabelProps> = (props: IErrorMessageLabelProps) => {

    return (
        <div className="field is-grouped is-grouped-centered">
            <p className="control has-text-danger messageLabel">
                {props.errorMessage}
            </p>
        </div>
    );
}