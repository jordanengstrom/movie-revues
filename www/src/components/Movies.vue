<template>
    <div class="movie-list">
        <h2>My Movie List:</h2>
        <ol class="col-sm-6">
            <li v-for="movie in myMovies">
                {{movie.title}}
                <p @click="showDetails(movie)">{{movie.title}}</p>
                
            </li>
        </ol>
    </div>
</template>

<script>
import Results from './Results'

export default {
    name: 'movie-list',
    data() {
        return {

        }
    },
    computed: {
        myMovies() {
            return this.$store.state.getMyMovies;
        }
    }
}

</script>

<style>
</style>