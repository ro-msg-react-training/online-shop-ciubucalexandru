import React from 'react';
import './LoginViewDumb.scss';
import msgLogo from '../../../images/msg_logo.png';

interface ILoginViewDumbProps {
    formStatus: string;
    onUsernameChange: (e: string) => void;
    onPasswordChange: (e: string) => void;
    onSubmit: () => void;
}

const LoginViewDumb: React.FC<ILoginViewDumbProps> = (props: ILoginViewDumbProps) => {
    return (
        <div className="loginContainer">
            <div className="field is-grouped is-grouped-centered">
                <figure className="image">
                    <img src={msgLogo} alt="msg systems Logo"/>
                </figure>
            </div>
            <div className="field loginInputs">
                <p className="control has-icons-left has-icons-right">
                    <input className="input is-rounded" type="text" placeholder="Username" 
                        onChange={(e) => props.onUsernameChange(e.target.value)}/>
                </p>
            </div>
            <div className="field">
                <p className="control has-icons-left">
                    <input className="input is-rounded" type="password" placeholder="Password" 
                        onChange={(e) => props.onPasswordChange(e.target.value)}/>
                </p>
            </div>
            <div className="field is-grouped is-grouped-centered">
                <p className="control has-text-danger">
                    {props.formStatus}
                </p>
            </div>
            <div className="field is-grouped is-grouped-centered">
                <p className="control">
                    <button className="button is-primary is-rounded" onClick={() => props.onSubmit()}>
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}

export default LoginViewDumb;
