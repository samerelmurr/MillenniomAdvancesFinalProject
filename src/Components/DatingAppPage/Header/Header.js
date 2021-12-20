import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import logo from './MillenniomLogoLQ2.png';
import ForumIcon from '@material-ui/icons/Forum';

function Header(){
    return (
        <div className='header'>
            {/*Profile Icon btn*/}
            <IconButton><PersonIcon fontSize="large" className="PersonIcon"/></IconButton>
            {/*Logo*/}
            <img src={logo} alt="logo" className="millenniom-logo"/>
            {/*Messaging Icon btn*/}
            <IconButton><ForumIcon fontSize="large" className="ForumnIcon"/></IconButton>
        </div>
    )
}
export default Header; 