import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  ClearRefinements,
  RefinementList,
  SearchBox,
  Hits,
  Highlight,
  Configure,
  Pagination,
  RatingMenu,
  connectStateResults,
  CurrentRefinements,
} from 'react-instantsearch-dom';

import { orderBy, last } from 'lodash';

const searchClient = algoliasearch(
  '6QXT5J57MS',
  'c8e5d14fd7bb490d0a759c304e67c4e7'
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Movies Explorer</h1>
        <InstantSearch indexName="dev_MOVIES" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h2>Genre</h2>
            <RefinementList
              attribute="genre"
              transformItems={items =>
                orderBy(items, ['label', 'count'], ['asc', 'desc'])
              }
              showMore={true}
              limit={8}
              showMoreLimit={12}
            />
            <h2>Rating</h2>
            <RatingMenu attribute="rating" min={1} max={3} />
            <h2>Actors</h2>
            <RefinementList
              attribute="actors"
              operator="and"
              searchable
              showMore={true}
              limit={4}
              showMoreLimit={12}
              transformItems={items =>
                orderBy(
                  items,
                  ['count', item => last(item.label.split(' '))],
                  ['desc', 'asc']
                )
              }
            />
          </div>
          <div className="right-panel">
            <SearchBox />
            <CurrentRefinements />
            <Configure hitsPerPage={12} />
            <CustomSearchResults id="results" />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  const style = {
    border: `15px solid${props.hit.color}`,
    borderRadius: '15px',
  };
  return (
    <div>
      <div>
        <Highlight attribute="title" hit={props.hit} />
      </div>
      <img
        style={style}
        src={props.hit.image}
        align="left"
        alt="props.hit.title"
      />
    </div>
  );
}

const StateResults = connectStateResults(({ searchState, searchResults }) =>
  searchResults && searchResults.nbHits !== 0 ? (
    <div className="res-container">
      <Hits hitComponent={Hit} />
      <Pagination />
    </div>
  ) : (
    <div>No results for {searchState.query}</div>
  )
);

const CustomSearchResults = connectStateResults(StateResults);

export default App;
