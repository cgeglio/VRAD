import React from 'react';
import { shallow } from 'enzyme';
import ListingPreview from './ListingPreview';

describe('ListingPreview', () => {
  let wrapper;
  let mockListing;
  let mockAddFavorite = jest.fn();
  let mockSetCurrentListing = jest.fn();

  beforeEach(() => {
    mockListing = {name: 'test name', listing_id: 5, favorite: false}
    wrapper = shallow(<ListingPreview
      key={mockListing.listiing_id}
      listing={mockListing}
      addFavorite={mockAddFavorite}
      setCurrentListing={mockSetCurrentListing}
    />);
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start off with a default state', () => {
    expect(wrapper.state()).toEqual({favorite: ''});
  });

  it('should set state and call addFavorite when determineFavorite is called', () => {

    wrapper.instance().determineFavorite();
    expect(wrapper.state()).toEqual({favorite: true});
    expect(mockAddFavorite).toHaveBeenCalledWith(mockListing);
  });

  it('should decide if the favorite icon is filled or unfilled when determineIcon is called', () => {

    expect(wrapper.instance().determineIcon()).toEqual("unfilled");
  });

  it('should call the setCurrentListing method when the view details button is clicked', () => {

    wrapper.find('.details-btn').simulate('click');
    expect(mockSetCurrentListing).toHaveBeenCalledWith(mockListing);
  })

  it('should call the determineFavorite method when the favorite button is clicked', () => {
    wrapper.instance().determineFavorite = jest.fn();

    wrapper.find('.favorite-btn').simulate('click');
    expect(wrapper.instance().determineFavorite).toHaveBeenCalled();
  })

});
