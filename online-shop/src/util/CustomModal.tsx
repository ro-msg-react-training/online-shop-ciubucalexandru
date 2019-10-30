import React from 'react';

interface IModalProps {
    title: string;
    status: boolean;
    closeModal: () => void;
    confirmModal: () => void;
}

export const CustomModal: React.FC<IModalProps> = (props: IModalProps) => {

    return (
        <div className={"modal" + (props.status ? " is-active" : "")} >
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.title}</p>
                    <button className="delete" aria-label="close" onClick={() => props.closeModal()}></button>
                </header>
                <footer className="modal-card-foot">
                    <button className="button is-success is-white" 
                        onClick={() => props.confirmModal()}>
                        Confirm
                    </button>
                    <button className="button" onClick={() => props.closeModal()}>
                        Cancel
                    </button>
                </footer>
            </div>
        </div>
    );
}
