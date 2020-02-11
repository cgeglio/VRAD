import React from 'react';
import { shallow } from 'enzyme';
import ListingDetails from './ListingDetails';

describe('ListingDetails', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockListing = {
      listing_id: 5,
      name: 'test name',
      address: { street: 'test street' },
      details: { features: ['test feature'] },
    };
    const wrapper = shallow(<ListingDetails
      key={mockListing.key}
      {...mockListing}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
