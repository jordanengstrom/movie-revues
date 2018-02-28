<template>
    <div class="detailz">
        <h4>
            Details from Search {{title}}:
        </h4>
        <h3>
            {{movie.title}}
        </h3>
        <div v-if="movie.poster_path">
            <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="movie poster">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detailz',
        props: ['movie', 'title']
    }
</script>

<style scoped>
    .detailz {
        background-color: teal;
        color: white;
    }
</style>