import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material';
import Search from './Search'; 

const Banner = () => {

  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className='banner'>

        <div className='banner_search'>
            {showSearch && <Search />}
            <Button className='banner_searchButton' variant='outlined' onClick={() => setShowSearch(!showSearch)}> {showSearch ? "Hide" : "Search Dates"} </Button>
        </div>

        <div className='banner_info'>

            <h1>Get out and stretch your imagination</h1>
            <h5>Plan a different kind of getaway to uncover the hidden gems near yo.</h5>
            <Button variant='outlined'>Explore Nearby</Button>

        </div>

    </div>
  )
}

export default Banner