import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { setAdminStatus } from '../redux/actions';
import ToggleOn from '../assets/toggleOn.svg';
import ToggleOff from '../assets/toggleOff.svg';
import './Header.css'

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state: RootState) => state.admin.isAdmin);

  return (
    <header className="app-header">
      <h1 className='inv-header'>Inventory Stats</h1>
      <div className="toggle-container">
        <span>admin</span>
        <img src={!isAdmin ? ToggleOn : ToggleOff} width={40} height={40} alt='' onClick={() => dispatch(setAdminStatus(!isAdmin))} />
        <span>user</span>
      </div>
    </header>
  );
};

export default Header;
