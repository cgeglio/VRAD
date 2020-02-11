export const fetchDetails = (areas) => {
  const promises = areas.areas.map(area => {
    return fetch('http://localhost:3001' + area.details)
      .then(response => response.json())
      .then(areaInfo => {
        return {
          id: areaInfo.id,
          nickname: area.name || area.area,
          longname: areaInfo.name,
          location: areaInfo.location,
          description: areaInfo.about,
          listings: areaInfo.listings,
        };
      });
  });
  return Promise.all(promises);
};
