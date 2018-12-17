// Pseudocode

// Listen to URL changes
chrome.tabs.query({ active: true, currentWindow: true }, ([ currentTab ]) => {
  const { url } = currentTab

  // If we're on a listing page
  if (url.includes('https://www.airbnb.com/rooms/')) {

    // Listen to all network requests
    chrome.webRequest.onCompleted.addListener({ url }) => {

      // If this is the location data request
      if (url.includes('https://www.airbnb.com/locations/api/neighborhood_tiles')) {
        // ... get the response body somehow and grab the `url` key in the object and decode the neighborhood, city
        // window.open('https://maps.bts.dot.gov/arcgis/apps/webappviewer/index.html?id=a303ff5924c9474790464cc0e9d5c9fb') and type in "neighborhood, city" and press enter
      }
    }
  }
})
