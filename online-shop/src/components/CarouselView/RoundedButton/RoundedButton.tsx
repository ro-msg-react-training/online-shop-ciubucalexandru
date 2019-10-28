import React from 'react';

interface IRoundedButton {
    currentIndex: number;
    imageIndex: number;
    text: string;
    onClickEvent: (index: number) => void;
}

const RoundedButton: React.FC<IRoundedButton> = (props: IRoundedButton) => {

    let classNameButton = "button is-rounded";
    if (props.currentIndex === props.imageIndex) {
        classNameButton += " is-info";
    } else {
        classNameButton += " is-primary";
    }

    return (
        <p className="control">
            <button className={classNameButton}
                onClick={() => props.onClickEvent(props.imageIndex)} >
                {props.text}
            </button>
        </p>
    );
}

export default RoundedButton;
