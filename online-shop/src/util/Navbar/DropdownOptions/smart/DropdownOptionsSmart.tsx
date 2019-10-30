import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../../actions/LoginActions';
import { AppState } from '../../../../store/store';
import DropdownOptionsDumb from '../dumb/DropdownOptionsDumb';

const DropdownOptionsSmart: React.FC = () => {
    const dispatch: Dispatch = useDispatch();
    const loggedUser: string = useSelector((state: AppState) => state.login.loggedUser.fullName);

    return (
        <DropdownOptionsDumb loggedUser={loggedUser} logout={() => logoutCallback(dispatch)} />
    );
}

const logoutCallback = (dispatch: Dispatch) => {
    dispatch(logout());
}

export default DropdownOptionsSmart;
