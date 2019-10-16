import React from 'react';
import { Link } from 'react-router-dom';

interface IModalProps {
    title: string;
    children: any;
    status: boolean;
    redirectOnSuccess: string;
    closeModal: () => void;
    confirmModal: () => void;
}

export const CustomModal: React.FC<IModalProps> = (props: IModalProps) => {

    let classes: string = 'modal';

    if (props.status) {
        classes += ' is-active';
    }

    return (
        <div className={classes}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{props.title}</p>
                    <button className="delete" aria-label="close" onClick={() => props.closeModal()}></button>
                </header>
                <section className="modal-card-body">
                    {props.children}
                </section>
                <footer className="modal-card-foot">
                    <Link to={props.redirectOnSuccess} className="button is-success is-white" onClick={() => props.confirmModal()}>
                        Confirm
                    </Link>
                    <button className="button" onClick={() => props.closeModal()}>
                        Cancel
                    </button>
                </footer>
            </div>
        </div>
    );
}