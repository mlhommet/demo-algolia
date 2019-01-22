const algoliasearch = require('algoliasearch');

const client = algoliasearch('6QXT5J57MS', '');
const index = client.initIndex('dev_MOVIES');

index
  .setSettings({
    searchableAttributes: ['title', 'alternative_titles'],
    customRanking: ['desc(rating)'],
    attributesForFaceting: [
      'searchable(genre)',
      'rating',
      'searchable(actors)',
    ],
  })
  .then(res => {
    console.log('Index configured');
  })
  .catch(err => {
    console.log(err);
    console.log(err.debugData);
  });
