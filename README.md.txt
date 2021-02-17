To run the front end:

1) cd into the "webapp" directory.
2) run the command "npm run dev". Look for the app on localhost:3000.

To run the back end:

1) cd into the "webservice" directory.
2) run the command "node index.js". Look for the app on localhost:8000.

Notes:

The frontend is built from the Nuxt starter recommended in the notes. Admittedly it is not yet completed. I ran out of time to familiarize myself with the way Vue and Nuxt handle data binding between input elements and being able to add that as an actual search term. Currently, the app performs a hardcoded search for the movie "Zorro" and returns one page of results.

The backend is build using Node and Express, and performs a call to the API to retrieve and then manipulate movie results, based on the title of the movie.

Future improvements:

1) Finish according to the specifications in the code challenge notes.
2) Allow for search by terms other than movie Title.
3) Much improved UI.