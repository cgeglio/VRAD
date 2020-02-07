import React from 'react';
import './Loader.scss'

const Loader = () => {
  return (
    <div className='loader'>
      <img src={process.env.PUBLIC_URL + `/noun_Travel_2913599.svg`} alt='travel spinner' className='loader-img' />
    </div>
  )
}

export default Loader;
