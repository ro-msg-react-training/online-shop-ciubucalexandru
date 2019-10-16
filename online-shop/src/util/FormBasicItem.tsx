import React from 'react';

interface IFormBasicItemProps {
    labelName: string;
    value: string;
    type: string;
    disabledStatus: boolean;
    onChange: (e: any) => void;
}

export const FormBasicItem: React.FC<IFormBasicItemProps> = (props: IFormBasicItemProps) => {

    let classes = 'input';

    if (props.value === '' && !props.disabledStatus) {
        classes += ' is-danger';
    } else if (props.value !== '' && !props.disabledStatus ) {
        classes += ' is-success';
    }

    let inputJsx;
    if (props.disabledStatus) {
        inputJsx = <input className={classes} type={props.type} value={props.value} 
                onChange={(e) => props.onChange(e)} disabled/>;
    } else {
        inputJsx = <input className={classes} type={props.type} value={props.value} 
                onChange={(e) => props.onChange(e)}/>;
    }

    return (
        <div className="field is-horizontal">
            <div className="field-label is-normal">
                <label className="label">{props.labelName}</label>
            </div>
            <div className="field-body">
                <div className="field">
                    <p className="control">
                        {inputJsx}
                    </p>
                </div>
            </div>
        </div>
    );
}
