import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactPage from '../views/ContactPage';
import MainPage from '../views/MainPage';
import MainSecurityPage from '../views/security/MainSecurityPage';
import InternetMainPage from '../views/InternetMainPage';
import InternetPricePage from '../views/internet/InternetPricePage';
import DaniyaPrice from '../views/internet/daniya/DaniyaPrice';
import EurocityPrice from '../views/internet/eurocity/EurocityPrice';
import PromenadaPrice from '../views/internet/promenada/PromenadaPrice';
import IntercomPage from '../views/IntercomPage';
import ProductFilterPage from '../views/shop/ProductFilterPage';
import AboutPage from '../views/AboutPage';
import NewsPage from '../views/NewsPage';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Main',
        path: '/',
        component: MainPage
    },
    {
        name: 'MainSecurity',
        path: '/main/security',
        component: MainSecurityPage
    },
    {
        name: 'Contact',
        path: '/contact',
        component: ContactPage
    },
     {
        name: 'InternetMain',
        path: '/internet',
        component: InternetMainPage
    },
    {
        name: 'InternetPice',
        path: '/internet/price',
        component: InternetPricePage
    },
    {
        name: 'DaniyaPice',
        path: '/internet/price/daniya',
        component: DaniyaPrice
    },
    {
        name: 'EurocityPice',
        path: '/internet/price/eurocity',
        component: EurocityPrice
    },
    {
        name: 'PromenadaPice',
        path: '/internet/price/promenada',
        component: PromenadaPrice
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
    },
     {
        name: 'News',
        path: '/news',
        component:NewsPage
    }
   
];

const router = new VueRouter({
    mode: 'history',
    // base: 'localhost:8080',
    base: '/',
    routes
});

export default router;