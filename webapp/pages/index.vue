<template>
  <div class="container">
    <div class="main">
      <input v-model="searchTerm" type="text" name="Movie Title" />
      <button>Search</button>
    </div>
    <table>
      <tr>
        <th>Movie ID</th>
        <th>Title</th>
        <th>URL</th>
        <th>Rating</th>
      </tr>
      <div class="movie-list-row">
        <tr v-for="movie in movies" v-bind:key="movie.movie_id">
          <td>{{ movie.movie_id }}</td>
          <td>{{ movie.title }}</td>
          <td>{{ movie.poster_image_url }}</td>
          <td>{{ movie.popularity_summary }}</td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'movie-list-row',
    async asyncData({ $http }) {
      const movies = await $http.$get(`http://localhost:8000/movies?search=Zorro}`) // TODO: insert link to request results from back end
      return { movies }
    }
  }
</script>

<style>
.container {
  width: 100%;
}

.main {
  width: 100%;
  align-items: center;
}
</style>
