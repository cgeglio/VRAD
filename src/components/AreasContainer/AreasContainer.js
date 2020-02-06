import React from 'react';
import './AreasContainer.scss';
import { AreaCard } from '../AreaCard/AreaCard'

export const AreasContainer = (props) => {
  const areas = props.areas.map(area => {
    console.log(area)
    return <AreaCard 
      {...area} 
      key={area.id}
      addListingsToState={props.addListingsToState} 
  />})
    
  return(
    <div className='area-container'>
      {areas}
    </div>
  )
}