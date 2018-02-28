<template>
  <div class="hello container-fluid">
    <div class="row">
      <form class="col-sm-12" @submit.prevent='movieSearch'>
        <input type="text" v-model="title" placeholder="Movie Title"></input>
        <button type="submit">Search MovieDB</button>
      </form>
    </div>
    <div class="row">
      <!-- search results col-sm-6-->
      <results class="col-sm-12" :title="title"></results>
      <!-- details results col-sm-6-->
    </div>
  </div>
</template>

<script>
  import Results from './Results'
  import Movies from './Movies'

  export default {
    name: 'Home',
    data() {
      return {
        title: ''
      }
    },
    methods: {
      movieSearch() {
        this.$store.dispatch('getMovies', this.title)
      }
    },
    components: {
      Results,
      Movies
    }
  }
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
</style>