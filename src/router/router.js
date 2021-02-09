import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage';
import MainSecurityPage from '../views/security/MainSecurityPage';
import VInternetMainPage from '../views/VInternetMainPage';
import InternetMainPage from '../views/InternetMainPage';
import InternetPricePage from '../views/internet/InternetPricePage';
import DaniyaPrice from '../views/internet/daniya/DaniyaPrice';
import EurocityPrice from '../views/internet/eurocity/EurocityPrice';
import PromenadaPrice from '../views/internet/promenada/PromenadaPrice';
import IntercomPage from '../views/IntercomPage';
import ProductFilterPage from '../views/shop/ProductFilterPage';
import AboutPage from '../views/about/AboutPage';
import DocsPage from '../views/docs/DocsPage';
import NewsPage from '../views/news/NewsPage';
import NewsDetailPage from '../views/news/NewsDetailPage';
import ManualPage from '../views/manual/ManualPage';
import ContactsPage from '../views/contacts/ContactsPage';

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
        name: 'ManualPage',
        path: '/manual',
        component: ManualPage
    },
     {
        name: 'InternetMain',
        path: '/internet',
        component: InternetMainPage
    },
    {
        name: 'VInternetMain',
        path: '/vinternet',
        component: VInternetMainPage
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
    },
    {
        name: 'NewsDetail',
        path: '/news/detail',
        component:NewsDetailPage
    },
     {
        name: 'Contacts',
        path: '/contacts',
        component:ContactsPage
    },
    {
        name: 'Docs',
        path: '/docs',
        component:DocsPage
    }
   
];

const router = new VueRouter({
    mode: 'history',
    // base: 'localhost:8080',
    base: '/',
    routes
});

export default router;