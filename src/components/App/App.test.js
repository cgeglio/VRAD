import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { fetchDetails, getAreas } from '../../helpers.js';

jest.mock('../../helpers.js');

describe('App', () => {
  let wrapper;
  let mockListing;
  let mockUser;
  let mockArea;

  beforeEach(() => {
    mockListing = { name: 'listing 1', listing_id: 5 };
    mockUser = { name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation' };
    mockArea = [{ area: "RiNo", details: "/api/v1/areas/590" }];

    fetchDetails.mockImplementation(() => {
      return Promise.resolve([{
        id: 590,
        name: "River North",
        location: "North of Downtown Denver",
        about: "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
        region_code: 6356834,
        quick_search: "o5kod9f5cqo0",
        listings: [
        "/api/v1/listings/3",
        "/api/v1/listings/44",
        "/api/v1/listings/221",
        "/api/v1/listings/744",
        "/api/v1/listings/90",
        "/api/v1/listings/310"
        ]
      }])
    })

    getAreas.mockImplementation(() => {
      return Promise.resolve([{
        area: "RiNo",
        details: "/api/v1/areas/590"
      }])
    })
  });

  it('should match the snapshot', () => {
    wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should start off with a default state', () => {
    wrapper = shallow(<App />);
    const expected = {
      isLoggedIn: false,
      areas: '',
      error: '',
      user: { name: '', email: '', purpose: '' },
      isLoading: true,
      listings: [],
      currentListing: '',
      favorites: [],
    };
    expect(wrapper.state()).toEqual(expected);
  });

  it('should retrieve areas when mounting', () => {
    wrapper = shallow(<App />);
    expect(getAreas).toHaveBeenCalled();
  });

  it('should set state with user info when addUser is called', () => {
    wrapper = shallow(<App />);
    wrapper.instance().addUser(mockUser);
    expect(wrapper.state()).toEqual({
      isLoggedIn: true,
      areas: '',
      error: '',
      user: { name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation' },
      isLoading: true,
      listings: [],
      currentListing: '',
      favorites: [],
    });
  });

  it('should reset user info and favorites in state when logout is called', () => {
    wrapper = shallow(<App />);
    wrapper.instance().addUser(mockUser);
    wrapper.instance().logout();
    expect(wrapper.state()).toEqual({
      isLoggedIn: false,
      areas: '',
      error: '',
      user: { name: '', email: '', purpose: '' },
      isLoading: true,
      listings: [],
      currentListing: '',
      favorites: [],
    });
  });

  it('should set the currentListing in state when setCurrentListing is called', () => {
    wrapper = shallow(<App />);
    wrapper.instance().setCurrentListing(mockListing);
    expect(wrapper.state()).toEqual({
      isLoggedIn: false,
      areas: '',
      error: '',
      user: { name: '', email: '', purpose: '' },
      isLoading: true,
      listings: [],
      currentListing: mockListing,
      favorites: [],
    });
  });

  it('should use area data to retrieve area details when mounting', () => {
    wrapper = shallow(<App />);
    expect(fetchDetails).toHaveBeenCalledWith([{
      area: "RiNo",
      details: "/api/v1/areas/590"
    }]);
  });

  it('should update state with area details', () => {
    const expected = {
        id: 590,
        name: "River North",
        location: "North of Downtown Denver",
        about: "RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!",
        region_code: 6356834,
        quick_search: "o5kod9f5cqo0",
        listings: [
        "/api/v1/listings/3",
        "/api/v1/listings/44",
        "/api/v1/listings/221",
        "/api/v1/listings/744",
        "/api/v1/listings/90",
        "/api/v1/listings/310"
        ]
    };
    wrapper = shallow(<App />);
    expect(fetchDetails).toHaveBeenCalledWith(mockArea);
    expect(wrapper.state('areas')).toEqual(expected);
  });

  it('should set state with a new favorite listing when addFavorite is called', () => {
    wrapper = shallow(<App />);
    wrapper.instance().addFavorite(mockListing);
    expect(wrapper.state()).toEqual({
      isLoggedIn: false,
      areas: '',
      error: '',
      user: { name: '', email: '', purpose: '' },
      isLoading: true,
      listings: [],
      currentListing: '',
      favorites: [mockListing],
    });
  });

  it('should remove a favorite listing and set state when removeFavorite is called', () => {
    wrapper = shallow(<App />);
    wrapper.instance().addFavorite(mockListing);
    wrapper.instance().removeFavorite(5);
    expect(wrapper.state()).toEqual({
      isLoggedIn: false,
      areas: '',
      error: '',
      user: { name: '', email: '', purpose: '' },
      isLoading: true,
      listings: [],
      currentListing: '',
      favorites: [],
    });
  });
});
