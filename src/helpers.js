export const fetchDetails = (areas) => {
  const promises = areas.areas.map(area => {
    return fetch('http://localhost:3001' + area.details)
      .then(response => {
        if (!response.ok) {
          throw Error('Error gathering listings')
        }
        return response.json()
      })
      .then(areaInfo => {
        return {
          id: areaInfo.id,
          nickname: area.name || area.area,
          longname: areaInfo.name,
          location: areaInfo.location,
          description: areaInfo.about,
          listings: areaInfo.listings,
        };
      })
  });
  return Promise.all(promises)
};

export const getAreas = () => {
  return fetch('http://localhost:3001/api/v1/areas/')
    .then(response => {
      if (!response.ok) {
        throw Error('Error while fetching, did not get 200 status code')
      }
      return response.json()
    });
  };

export const getListings = (listings) => {
  const allListings = listings.map(listing => {
    return fetch(`http://localhost:3001${listing}`)
      .then(response =>  {
        if (!response.ok) {
          throw Error('Error while fetching, did not get 200 status code')
        }
        return response.json()
      });
    });
 return Promise.all(allListings)
};
