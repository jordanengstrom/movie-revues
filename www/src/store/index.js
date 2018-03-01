import vuex from 'vuex';
import axios from 'axios';
import vue from 'vue';


let movieDB = axios.create({
    baseURL: "https://api.themoviedb.org/3/search/movie?api_key=62bc959be576592e860ad82a93a3ae21&page=1&include_adult=false&query=",
    timeout: 3000
});

let userDB = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 3000
});

vue.use(vuex);

export default new vuex.Store({
    state: {
        user: {
            name: "Jordan",
        },
        searchResults: [],
        myMovies: [],
        activeMovie: {}
    },
    mutations: {
        addResults(state, payload){
            state.searchResults = payload;
        },
        setActiveMovie(state, payload){
            state.activeMovie = payload;
        },
        setMyMovies(state, payload) {
            state.myMovies = payload;
        }
    },
    actions: {
        getMovies({ commit, dispatch }, title) {
            movieDB(title)
                .then(res =>{
                    commit("addResults", res.data.results);
                })
                .catch(err =>{
                    console.log(err);
                });
        },
        setActiveMovie({ commit, dispatch }, payload){
            console.log(payload)
            commit("setActiveMovie", payload);
        },
        getMyMovies({commit, dispatch}, payload) {
            userDB
                    .get(payload)
                    .then(res => {
                        commit("setMyMovies", payload)
                    })
                    .catch(err => {
                        console.log(err);
                    })
        }

    }
});
