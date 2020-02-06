import React from 'react';
import PropTypes from 'prop-types';
import './AreasContainer.scss';
import { AreaCard } from '../AreaCard/AreaCard'

export const AreasContainer = (props) => {
  const areasInfo = props.areas.map(area => {
    return <AreaCard 
      {...area} 
      key={area.id}
      addListingsToState={props.addListingsToState} 
  />})

  return(
    <div className='area-container'>
      {areasInfo}
    </div>
  )
}

AreasContainer.propTypes = {
  areas: PropTypes.array
};
