import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);
let url_products = 'https://mag.golden.net.ua/api/product-list/p'
let url_groups = 'https://mag.golden.net.ua/api/group-list/p'
let url_news = 'https://mag.golden.net.ua/api/news-list/p'
let store = new Vuex.Store({
    state: {
        products: [],
        groups: [],
        news: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE:(state , products) => {
            state.products = products;
        },
        SET_GROUPS_TO_STATE:(state , groups) => {
            state.groups = groups;
        },
        SET_NEWS_TO_STATE:(state , news) => {
            state.news = news;
        }
    }
    ,
    actions: {
        GET_PRODUCTS_FROM_API({commit}){
            return axios(url_products,{
                method: "GET"
            })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data.products);
                    return products;
            })

                .catch((error) =>{
                    console.log(error);
                    return error;
            })
        },
        GET_GROUPS_FROM_API({commit}){
            return axios(url_groups,{
                method: "GET"
            })
                .then((groups) => {
                    commit('SET_GROUPS_TO_STATE', groups.data.group);
                    return groups;
            })

                .catch((error) =>{
                    console.log(error);
                    return error;
            })
        },
        GET_NEWS_FROM_API({commit}){
            return axios(url_news,{
                method: "GET"
            })
                .then((news) => {
                    commit('SET_NEWS_TO_STATE', news.data.news);
                    return news;
            })

                .catch((error) =>{
                    console.log(error);
                    return error;
            })
        }
    },
    getters: {
        PRODUCTS(state){
            return state.products;
        },
        GROUPS(state){
            return state.groups;
        },
        NEWS(state){
            return state.news;
        },
    }
});



export default store;