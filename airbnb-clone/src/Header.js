import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
        <img className='header_icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/220px-Airbnb_Logo_B%C3%A9lo.svg.png' alt='logo'/>

        <div className='header_center'>
            <input type='text' />
            <SearchIcon />
        </div>

        <div className='header_right'>
            <LanguageIcon />
            <p>Become a Host</p>
            <ExpandMoreIcon />
            <Avatar />
        </div>
    </div>
  )
}

export default Header