import React from 'react';
import { shallow } from 'enzyme';
import ListingDetailsContainer from './ListingDetailsContainer';

describe('ListingDetailsContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    let mockListing = {
      listing_id: 5,
      name: 'test name',
      address: {street: 'test street'},
      details: {features: ['test feature']}
    }
    const wrapper = shallow(<ListingDetailsContainer
      {...mockListing}
    />);
  expect(wrapper).toMatchSnapshot();
  });
});
