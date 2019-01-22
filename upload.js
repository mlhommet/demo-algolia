const algoliasearch = require('algoliasearch');

const client = algoliasearch('HI64QS3R8W', '755390044ceeb63650f597fc0698bbe8');
const index = client.initIndex('dev_IMDB');

const records = require('./data/movies.json');

const tmp = [...records];

while (tmp.length) {
  index.addObjects(tmp.splice(0, 10000)).catch(err => {
    console.log(err);
    console.log(err.debugData);
  });
}

console.log('Data updloaded');
