import React from 'react';
import { shallow } from 'enzyme';
import FavoritesContainer from './FavoritesContainer';

describe('FavoritesContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    let mockFavorites = [{listing_id: 5, favorite: true}];
    const wrapper = shallow(<FavoritesContainer
      favorites={mockFavorites}
      addFavorite={jest.fn()}
      setCurrentListing={jest.fn()}
    />);
  expect(wrapper).toMatchSnapshot();
  });
});
