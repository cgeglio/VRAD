import { fetchDetails } from './helpers';

describe('fetchDetails', () => {
  let areas = {
    "areas": [
        {
            "area": "RiNo",
            "details": "/api/v1/areas/590"
        }
    ]
}

  let mockListing = [{
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
    "db_connect": 834470
  }];

  beforeEach(() => {
    let mockDetails;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise(mockListing)
        }
      })
    })
  })

  it('should be called with the correct URL', () => {
    fetchDetails(areas)

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas/590')
  })

  it('should return an array of listings', () => {
    expect(fetchDetails(areas)).resolves.toEqual(mockListing)
  })

  it('should throw an error upon rejection', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(fetchDetails(areas)).rejects.toEqual(Error('Error gathering listings'))
  })
})