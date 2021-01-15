import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactPage from '../views/ContactPage';
import MainPage from '../views/MainPage';
import InternetPricePage from '../views/InternetPricePage';
import IntercomPage from '../views/IntercomPage';
import ProductFilterPage from '../views/shop/ProductFilterPage';
import AboutPage from '../views/AboutPage';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Main',
        path: '/',
        component: MainPage
    },
    {
        name: 'Contact',
        path: '/contact',
        component: ContactPage
    },
     {
        name: 'Internet',
        path: '/internet',
        component: InternetPricePage
    },
    {
        name: 'Intercom',
        path: '/intercom',
        component: IntercomPage
    },
     {
        name: 'Shop',
        path: '/shop',
        component:ProductFilterPage
    },
    {
        name: 'About',
        path: '/about',
        component:AboutPage
    }
   
];

const router = new VueRouter({
    mode: 'history',
    // base: 'localhost:8080',
    base: '/',
    routes
});

export default router;