import React from 'react'
import './SearchReslt.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

const SearchResult = ( { img, location, title, desc, star, price, total } ) => {
  return (
    <div className='searchResult'>

        <img src={img} alt='' />

        <FavoriteBorderIcon className='searchResult_heart'/>

        <div className='searchResult_info'>

            <div className='searchResult_infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>____</p>
                <p>{desc}</p>
            </div>

            <div className='searchResult_infoBottom'>

                <div className='searchResult_stars'>
                    <StarIcon className='searchReslt_star'/>
                    <p> <strong> {star} </strong> </p>
                </div>

                <div className='searchReslt_price'>
                    <h2> {price} </h2>
                    <p> {total} </p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default SearchResult