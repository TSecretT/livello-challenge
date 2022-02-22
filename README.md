
# Livello Challenge

This repository is created to demonstrate the result of a Livello Challenge. 

The task is to create an Expo React Native app that fetches the movies API based on the user's title input and displays them in the list. Then user is able to click on any of the appeared results and will open a page with the movie's details.


## Installation

You should have expo-cli installed in order to run the app.
Then install dependencies with the following commands:

```bash
  npm install
  expo start
```


    
## Notes

- Since the API does not have an endpoint with popular / latest movie releases, it was decided to not load any movies at the start. The user should enter the movie title first in order to fetch the data.
- To prevent the fetch spam when typing, the API fetch happens after a 1-second timer when users stop typing and resets on keyboard interaction.
- The search results were first fetched, but the data is shortened (No ratings, movie genre, etc). Thus every another API call is made for each movie for detailed information.
- Full results are then stored in Redux and available at any point of the application.
- Whenever the user clicks on one of the search results. The Redux key "selectedMovie" is written and the page changes to "Movie" page, which takes the selected movie data from Redux and displays it.
- On "back" button press, the "selectedMovie" becomes "null" which returns the user to Search page.
- This workflow is not the best, but it is very simple for this simple application.
- The work was focused more on the features rather than design.
- The API key is stored in config file and not as an env variable for simplification.
