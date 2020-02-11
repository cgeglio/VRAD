import { fetchDetails, getAreas, getListings } from './helpers';

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
});

describe('getAreas', () => {
  let mockAreas = [
        {
          "area": "RiNo",
          "details": "/api/v1/areas/590"
        }
      ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise(mockAreas)
        }
      })
    })
  })

  it('should be called with the correct URL', () => {
    getAreas();

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/areas/')
  })

  it('should return an array of listings', () => {
    expect(getAreas()).resolves.toEqual(mockAreas)
  })

  it('should throw an error upon rejection', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error while fetching, did not get 200 status code'))
    })

    expect(getAreas()).rejects.toEqual(Error('Error while fetching, did not get 200 status code'))
  });

  it('should return an error if the response is not ok (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });
    expect(getAreas()).rejects.toThrow(Error('Error while fetching, did not get 200 status code'));
  });
})

describe('getListings', () => {
  let mockListingLinks = ["/api/v1/listings/3"];

  let mockListing = {
    listing_id: 3,
    area_id: 590,
    name: "Hip RiNo Party Spot",
    address: {
    street: "2250 Lawrence St",
    zip: "80205"
    },
    details: {
    neighborhood_id: 5124122,
    superhost: true,
    seller_source: "91jss1",
    beds: 3,
    baths: 2.5,
    cost_per_night: 420,
    features: [
    "hot tub",
    "espresso machine"
    ]
    },
    dev_id: "u4gh2j",
    area: "rino",
    db_connect: 834470
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise(mockListingLinks)
        }
      })
    })
  })

  it('should be called with the correct URL', () => {
    getListings(mockListingLinks);

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/listings/3')
  })

  it('should return an array of listing objects', () => {
    expect(getListings(mockListingLinks)).resolves.toEqual([mockListing])
  })

  it('should throw an error upon rejection', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Error while fetching, did not get 200 status code'))
    })

    expect(getListings(mockListingLinks)).rejects.toEqual(Error('Error while fetching, did not get 200 status code'))
  });

  it('should return an error if the response is not ok (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });
    expect(getListings(mockListingLinks)).rejects.toThrow(Error('Error while fetching, did not get 200 status code'));
  });
})
