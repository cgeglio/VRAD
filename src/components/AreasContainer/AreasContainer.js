import React from 'react';
import './AreasContainer.scss';
import { AreaCard } from '../AreaCard/AreaCard'

export const AreasContainer = (props) => {
  const areas = props.areas.map(area => <AreaCard {...area} key={area.id}/>)
  return(
    <div className='area-container'>
      {areas}
    </div>
  )
}