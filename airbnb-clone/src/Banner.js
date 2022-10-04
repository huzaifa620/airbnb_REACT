import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='banner'>

        <div className='banner_search'>
            {showSearch && <Search />}
            <Button className='banner_searchButton' variant='outlined' onClick={() => setShowSearch(!showSearch)}> {showSearch ? "Hide" : "Search Dates"} </Button>
        </div>

        <div className='banner_info'>

            <h1> Get out and stretch your imagination </h1>
            <h5> Plan a different kind of getaway to uncover the hidden gems near you. </h5>
            <Button variant='outlined' onClick={() => navigate('./search')}> Explore Nearby </Button>

        </div>

    </div>
  )
}

export default Banner