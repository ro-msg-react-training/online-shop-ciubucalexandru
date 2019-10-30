import React from 'react';

interface IFormTextAreaItemProps {
    text: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabledStatus: boolean;
}

export const FormTextAreaItem: React.FC<IFormTextAreaItemProps> = (props: IFormTextAreaItemProps) => {

    let textArea;
    let classes = "textarea";

    if (props.text === "" && !props.disabledStatus) {
        classes += " is-danger";
    } else if (props.text !== "" && !props.disabledStatus ) {
        classes += " is-success";
    }

    if (props.disabledStatus) {
        textArea = <textarea className={classes} value={props.text} 
                    onChange={(e) => props.onChange(e)} disabled ></textarea>
    } else {
        textArea = <textarea className={classes} value={props.text} 
                    onChange={(e) => props.onChange(e)}></textarea>
    }

    return (
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">Description</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        {textArea}
                    </p>
                </div>
            </div>
        </div>
    );
}
