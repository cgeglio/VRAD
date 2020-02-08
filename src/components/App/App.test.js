import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should start off with a default state', () => {
    const expected = {
      isLoggedIn: false,
      areas: '',
      error: '',
      user: {name: '', email: '', purpose: ''},
      isLoading: true,
      listings: [],
      currentListing: '',
      favorites: []
    };
    expect(wrapper.state()).toEqual(expected);
  });

  it('should set state with user info when addUser is called', () => {
    const mockUser = {name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation'};

    wrapper.instance().addUser(mockUser);
    expect(wrapper.state()).toEqual({
      isLoggedIn: true,
      areas: '',
      error: '',
      user: {name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation'},
      isLoading: true,
      listings: [],
      currentListing: '',
      favorites: []
    });
  });

  it('should reset user info and favorites in state when logout is called', () => {
      const mockUser = {name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation'};

      wrapper.instance().addUser(mockUser);
      wrapper.instance().logout();
      expect(wrapper.state()).toEqual({
        isLoggedIn: false,
        areas: '',
        error: '',
        user: { name: '', email: '', purpose: ''},
        isLoading: true,
        listings: [],
        currentListing: '',
        favorites: []
      });
  });

  it('should set the currentListing in state when setCurrentListing is called', () => {
      const mockListing = {name: 'listing 1', listing_id: 5};

      wrapper.instance().setCurrentListing(mockListing);
      expect(wrapper.state()).toEqual({
        isLoggedIn: false,
        areas: '',
        error: '',
        user: { name: '', email: '', purpose: ''},
        isLoading: true,
        listings: [],
        currentListing: mockListing,
        favorites: []
      });
  });

  it('should set state with a new favorite listing when addFavorite is called', () => {
      const mockListing = {name: 'listing 1', listing_id: 5};

      wrapper.instance().addFavorite(mockListing);
      expect(wrapper.state()).toEqual({
        isLoggedIn: false,
        areas: '',
        error: '',
        user: { name: '', email: '', purpose: ''},
        isLoading: true,
        listings: [],
        currentListing: '',
        favorites: [ mockListing]
      });
  });

  it('should remove a favorite listing and set state when removeFavorite is called', () => {
      const mockListing = {name: 'listing 1', listing_id: 5};

      wrapper.instance().addFavorite(mockListing);
      wrapper.instance().removeFavorite(5);
      expect(wrapper.state()).toEqual({
        isLoggedIn: false,
        areas: '',
        error: '',
        user: { name: '', email: '', purpose: ''},
        isLoading: true,
        listings: [],
        currentListing: '',
        favorites: []
      });
  });
});
