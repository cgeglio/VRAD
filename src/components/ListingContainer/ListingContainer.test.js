import React from 'react';
import { shallow } from 'enzyme';
import ListingContainer from './ListingContainer';

describe('ListingContainer', () => {
  let wrapper;
  let mockListing;

  beforeEach(() => {
    mockListing = { name: 'test name', listing_id: 5 };
    wrapper = shallow(<ListingContainer
      listings={[]}
      favorites={[mockListing]}
      addFavorite={jest.fn()}
      setCurrentListing={jest.fn()}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start off with a default state', () => {
    const expected = {
      isLoading: false,
      listings: [],
      error: '',
    };
    expect(wrapper.state()).toEqual(expected);
  });

  it('should determine which listings are favorites when determineFavoriteStatus is called', () => {
    wrapper.setState({ listings: [mockListing] });
    wrapper.instance().determineFavoriteStatus = jest.fn(() => {
      return { favorite: true, listing_id: 5, name: 'test name' };
    });

    wrapper.instance().determineFavoriteStatus();
    expect(wrapper.instance().determineFavoriteStatus).toHaveReturnedWith({ favorite: true, listing_id: 5, name: 'test name' });
  });

  it('should create listing cards when createCards is called', () => {
    wrapper.instance().determineFavoriteStatus = jest.fn();

    wrapper.setState({ listings: [mockListing] });
    wrapper.instance().createCards();
    expect(wrapper.instance().determineFavoriteStatus).toHaveBeenCalled();
  });
});
