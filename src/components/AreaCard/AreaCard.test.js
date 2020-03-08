import React from 'react';
import { shallow } from 'enzyme';
import { AreaCard } from './AreaCard';

describe('AreaCard', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockArea = {
      nickname: 'test nickname',
      longname: 'test longname',
      description: 'test description',
      id: 5,
      listings: [{ name: 'test name', listing_id: 5 }],
    };
    const mockAddListingsToState = jest.fn();

    const wrapper = shallow(<AreaCard
      {...mockArea}
      key={mockArea.id}
      addListingsToState={mockAddListingsToState}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
