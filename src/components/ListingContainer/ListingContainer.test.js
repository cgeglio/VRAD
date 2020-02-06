import React from 'react';
import { shallow } from 'enzyme';
import ListingContainer from './ListingContainer';

describe('ListingContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ListingContainer
      listings={[]}
      />)
  })

  it('should start off with a default state', () => {
    const expected = {
      isLoading: false,
      listings: [],
      error: ''
    };
    expect(wrapper.state()).toEqual(expected);
  });

  it('should create listing cards when createCards is called', () => {
    const mockListing = {name: 'test name', listing_id: 5}

    wrapper.setState({listings: [mockListing]});
    expect(wrapper).toMatchSnapshot();
  });
})
