import React from 'react';
import { shallow } from 'enzyme';
import Listing from './Listing';

describe('Listing', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    let mockListing = {
      listing_id: 5,
      name: 'test name',
      key: 'test key'
    }
    const wrapper = shallow(<Listing
      key={mockListing.key}
      listing={mockListing}
    />);
  expect(wrapper).toMatchSnapshot();
  });
});
