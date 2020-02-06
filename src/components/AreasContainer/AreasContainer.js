import React from 'react';
import PropTypes from 'prop-types';
import './AreasContainer.scss';
import { AreaCard } from '../AreaCard/AreaCard'

export const AreasContainer = ({ areas }) => {
  const areasInfo = areas.map(area => <AreaCard {...area} key={area.id}/>)
  return(
    <div className='area-container'>
      {areasInfo}
    </div>
  )
}

AreasContainer.propTypes = {
  areas: PropTypes.array
};
