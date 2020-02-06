import React from 'react';

const Loader = () => {
  const img = process.env.PUBLIC_URL + '/assets/noun_Travel_2913599.svg'
  return (
    <div className='loader'>
      <img src={img} alt='travel spinner' />
    </div>
  )
}

export default Loader;
