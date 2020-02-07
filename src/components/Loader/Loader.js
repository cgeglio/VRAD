import React from 'react';
import './Loader.scss'

const Loader = () => {
  const styles = {
    position: 'absolute',
    height: '200px;'
  } 

  return (
    <div className='loader'>
      <img styles={styles} src={url} alt='travel spinner' className='loader-img' />
    </div>
  )
}

export default Loader;
