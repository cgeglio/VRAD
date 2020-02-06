import React from 'react';
import { shallow } from 'enzyme';
import ListingContainer from './ListingContainer';

describe('ListingContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    let mockAreas = [{
      nickname: 'test nickname',
      longname: 'test longname',
      description: 'test description',
      id: 5,
      listings: [{
        listing_id: 5,
        name: 'test name',
      }]
    }];
    const wrapper = shallow(<ListingContainer
      areas={mockAreas}
    />);
  expect(wrapper).toMatchSnapshot();
  });
});
