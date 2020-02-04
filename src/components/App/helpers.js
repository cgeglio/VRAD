export const fetchListings = (areas) => {
  const promises = areas.areas.map(area => {
    return fetch('http://localhost:3001' + area.details)
      .then(response => response.json())
      .then(areaInfo => findAreaListings(areaInfo))
      .then(areaDetails => {
        return {
          name: area.name || area.area,
          ...areaDetails
        }
      })
  })
  console.log(promises);
  return Promise.all(promises);
}

const findAreaListings = (areaInfo) => {
  return areaInfo.listings.map(listing => {
    return fetch('http://localhost:3001/api/v1/listings')
      .then(response => response.json())
      .then(listingsData => {
        return listingsData.listings.filter(listings => {
            return listings.area_id === areaInfo.id
        })
      })
  })
}
