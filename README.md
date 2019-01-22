
This project demonstrates the use of Algolia to explore the IMDB movie dataset. It is a single-page React application based on Algolia React InstantSearch.

The demonstration is running live here: https://mlhommet.github.io/demo-algolia/



# UI & UX design #
The search interface provides several options to customize a query.
The search bar enables to search for a movie given its title (or title in a foreign language).
Matches are displayed in the main panel and are ranked by their IMDB rating and matching words.
The search can be further refined by movie genre, IMDB ratings and actors. 
This allows to find all drama movies starring both DiCaprio and DeNiro.

# Steps token #
Here is how I proceeded to create this demo, with rough time estimates.
## Dataset preparation and indexation (45min) ## 
The dataset is the IMDB Movies dataset fetched from Algolia's list of datasets.
- reduce the number of records size to fit Algolia free plan limit
- import the data using the Algolia dashboard
- configure the index with a `js` script (see `settings.js`; API-key information removed for security reasons)

## Kickstart react project (45min) ##
- use algolia ecommerce demo template
- setup Algolia Coding guidelines (lint) for VS studio

## Development (2h) ##
- drawing the UI on paper
- work on Refinement filters:
    - Genre sort strategy: order alphabetically, then by count
    - Ratings: out-of-the-box `RatingMenu`
    - Actors: order by number of roles ("famousness"), then alphabetically; make the facet searchable due to the large number of actors
- work on Hits display
- add a "no-result" display policy
- CSS styling



## Write doc and publish website (30min) ##
# Potential next steps #
What could comes next:
- infinite scroll 
- conditional formatting for the pagination
- add a numeric slider to filter movies by 'release year'
- improve styling