const express = require('express')
const fetch = require('node-fetch');
const app = express();
const port = 8000;

app.use(express.json());

/*async function getMovie(movieTitle) {
    const movies = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5676d2f47422ce61b4f8c9e61d8f6ea8&language=en-US&query=${movieTitle}&page=1&include_adult=false`
    );
    let response = await movies.json();
    console.log(response);
    return response;
}*/

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/movies', async (req, res) => {
      try {
        const movies = await fetch(
          //TODO: figure out why some queries, such as original_language, aren't working properly
          `https://api.themoviedb.org/3/search/movie?api_key=5676d2f47422ce61b4f8c9e61d8f6ea8&original_language=en&query=${req.query.search}&page=1&include_adult=false`
        );
        let response = await movies.json();
        console.log(response);

        let parsedResponse = [];
        for (let i = 0; i < response.results.length; i++) {
          let obj = {};
          obj['movie_id'] = response.results[i].id;
          obj['title'] = response.results[i].title;
          // TODO: pull base_url and image size from /configuration API, rather than hard coded
          obj['poster_image_url'] = `https://image.tmdb.org/t/p/w185${response.results[i].poster_path}`;
          obj['popularity_summary'] = response.results[i].popularity;
        
          parsedResponse.push(obj);
        }

        res.send(parsedResponse);

      } catch (err) {
        console.error(err);
      }
});

app.listen(port, () => {
  console.log(`Movie search app listening on port ${port}!`);
});
