import React from 'react';
import { shallow } from 'enzyme';
import { AreaCard } from './AreaCard';

describe('AreaCard', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    let area = {
      nickname: 'test nickname',
      longname: 'test longname',
      description: 'test description',
      id: 5
    }
    const wrapper = shallow(<AreaCard
      {...area} key={area.id}
    />);
  expect(wrapper).toMatchSnapshot();
  });
});
