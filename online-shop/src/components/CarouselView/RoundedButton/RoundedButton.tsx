import React from 'react';

interface IRoundedButton {
    currentIndex: number;
    imageIndex: number;
    text: string;
    onClickEvent: (index: number) => void;
}

const RoundedButton: React.FC<IRoundedButton> = ({
    currentIndex,
    imageIndex,
    text,
    onClickEvent,
}) => {

    let classNameButton = "button is-rounded";
    if (currentIndex === imageIndex) {
        classNameButton += " is-info";
    } else {
        classNameButton += " is-primary";
    }

    return (
        <p className="control">
            <button className={classNameButton}
                onClick={() => onClickEvent(imageIndex)} >
                {text}
            </button>
        </p>
    );
}

export default RoundedButton;
