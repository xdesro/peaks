const fs = require('fs');
const rawData = require('./raw-data.json');
const transformedData = rawData.map((rawEntry) => {
  return {
    name: rawEntry['14er'],
    climbed: false,
    elevation: rawEntry['Elev.Elevation'].replace(/,|'/g, ''),
    range: rawEntry.Range,
    routes: rawEntry.Routes,
    summitDate: null,
  };
});

fs.writeFile(
  './data-transformed.json',
  JSON.stringify(transformedData),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
  }
);
