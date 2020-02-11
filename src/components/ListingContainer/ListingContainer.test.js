import React from 'react';
import { shallow } from 'enzyme';
import ListingContainer from './ListingContainer';
import { getListings } from '../../helpers.js';

jest.mock('../../helpers.js');

describe('ListingContainer', () => {
  let mockListing;

  beforeEach(() => {
    mockListing = {
      "listing_id": 3,
      "area_id": 590,
      "name": "Hip RiNo Party Spot",
      "address": {
          "street": "2250 Lawrence St",
          "zip": "80205"
      },
      "details": {
          "neighborhood_id": 5124122,
          "superhost": true,
          "seller_source": "91jss1",
          "beds": 3,
          "baths": 2.5,
          "cost_per_night": 420,
          "features": [
              "hot tub",
              "espresso machine"
          ]
      },
      "dev_id": "u4gh2j",
      "area": "rino",
      "db_connect": 834470,
      "favorite": false,
    };

    getListings.mockImplementation(() => {
      return Promise.resolve(mockListing)
    })

  });

  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<ListingContainer
      listings={[]}
      favorites={[mockListing]}
      addFavorite={jest.fn()}
      setCurrentListing={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should start off with a default state', () => {
    const wrapper = shallow(<ListingContainer />);
    const expected = {
      isLoading: true,
      listings: '',
      error: '',
    };
    expect(wrapper.state()).toEqual(expected);
  });

  it('should retrieve listings when mounting', () => {
    const wrapper = shallow(<ListingContainer
      listings={['/api/v1/listings/3921']}
      favorites={[mockListing]}
      addFavorite={jest.fn()}
      setCurrentListing={jest.fn()}
    />);

    expect(getListings).toHaveBeenCalledWith(["/api/v1/listings/3921"]);
  });

  it('should update listings in state when getListings is called', () => {
    const wrapper = shallow(<ListingContainer
      listings={[]}
      favorites={[mockListing]}
      addFavorite={jest.fn()}
      setCurrentListing={jest.fn()}
    />);

    wrapper.props.listings = ["/api/v1/listings/3921"];
    expect(getListings).toHaveBeenCalledWith(["/api/v1/listings/3921"]);
    expect(wrapper.state('listings')).toEqual(mockListing);
  });

  it('should determine which listings are favorites when determineFavoriteStatus is called', () => {
    const wrapper = shallow(<ListingContainer
      listings={[]}
      favorites={[mockListing]}
      addFavorite={jest.fn()}
      setCurrentListing={jest.fn()}
    />);
    
    wrapper.setState({ listings: [mockListing] });
    wrapper.instance().determineFavoriteStatus = jest.fn(() => {
      return { favorite: true, listing_id: 5, name: 'test name' };
    });

    wrapper.instance().determineFavoriteStatus();
    expect(wrapper.instance().determineFavoriteStatus).toHaveReturnedWith({ favorite: true, listing_id: 5, name: 'test name' });
  });

  it('should create listing cards when createCards is called', () => {
    const wrapper = shallow(<ListingContainer
      listings={[]}
      favorites={[mockListing]}
      addFavorite={jest.fn()}
      setCurrentListing={jest.fn()}
    />);
    wrapper.instance().determineFavoriteStatus = jest.fn();

    wrapper.setState({ listings: [mockListing] });
    wrapper.instance().createCards();
    expect(wrapper.instance().determineFavoriteStatus).toHaveBeenCalled();
  });
});