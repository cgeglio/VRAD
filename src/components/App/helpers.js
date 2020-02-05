export const fetchListings = (areas) => {
  const promises = areas.areas.map(area => {
    return fetch('http://localhost:3001' + area.details)
      .then(response => response.json())
      .then(async areaInfo => {
        return {
          id: areaInfo.id,
          nickname: area.name || area.area,
          longname: areaInfo.name,
          location: areaInfo.location,
          description: areaInfo.about,
          listings: await findAreaListings(areaInfo)
        }
      })
  })
  return Promise.all(promises);
}

const findAreaListings = (areaInfo) => {
  return fetch('http://localhost:3001/api/v1/listings')
    .then(response => response.json())
    .then(listingInfo => listingInfo.listings.filter(listings => {
      return listings.area_id === areaInfo.id
      }))
    .catch(error => console.log("error"))
}
