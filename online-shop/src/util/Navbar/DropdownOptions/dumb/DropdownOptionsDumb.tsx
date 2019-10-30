import React from 'react';
import { Link } from 'react-router-dom';

interface IDropdownOptionsDumbProps {
    loggedUser: string;
    logout: () => void;
}

const DropdownOptionsDumb: React.FC<IDropdownOptionsDumbProps> = ({
    loggedUser,
    logout,
}) => {
    return (
        <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                    User
                </div>

                <div className="navbar-dropdown">
                    <div className="navbar-item">
                        {loggedUser}
                    </div>
                    <hr className="navbar-divider" />
                    <Link to="/login" className="navbar-item" onClick={() => logout()}>
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DropdownOptionsDumb;
