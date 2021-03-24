import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage';
import MainSecurityPage from '../views/security/MainSecurityPage';
import AccessControlPage from '../views/security/access-control/AccessControlPage';
import AlarmSecurityPage from '../views/security/alarm-security/AlarmSecurityPage';
import VideoSurveillancePage from '../views/security/video-surveillance/VideoSurveillancePage';
import OmoPage from '../views/iot/OmoPage';
import VInternetMainPage from '../views/VInternetMainPage';
import InternetMainPage from '../views/InternetMainPage';
import InternetPricePage from '../views/internet/InternetPricePage';
import DaniyaPrice from '../views/internet/daniya/DaniyaPrice';
import EurocityPrice from '../views/internet/eurocity/EurocityPrice';
import PromenadaPrice from '../views/internet/promenada/PromenadaPrice';
import IntercomPage from '../views/intercom/IntercomPage';
import MainGroupPage from '../views/shop/MainGroupPage';
import SubGroupPage from '../views/shop/SubGroupPage';
import ProductPage from '../views/shop/ProductPage';
import AboutPage from '../views/about/AboutPage';
import DocsPage from '../views/docs/DocsPage';
import NewsPage from '../views/news/NewsPage';
import NewsDetailPage from '../views/news/NewsDetailPage';
import PartnersPage from '../views/partners/PartnersPage';
import ManualPage from '../views/manual/ManualPage';
import ContactsPage from '../views/contacts/ContactsPage';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Main',
        path: '/',
        component: MainPage,
         meta: {
        breadcrumb: 'Home'
      }
    },
    {
        name: 'MainSecurity',
        path: '/main/security',
        component: MainSecurityPage
    },
    {
        name: 'AccessControlPage',
        path: '/main/security/access/control',
        component: AccessControlPage
    },
    {
        name: 'AlarmSecurityPage',
        path: '/main/security/alarm/security',
        component: AlarmSecurityPage
    },
    {
        name: 'VideoSurveillancePage',
        path: '/main/security/video/surveillance',
        component: VideoSurveillancePage
    },
     {
        name: 'OmoPage',
        path: '/iot',
        component: OmoPage
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
        name: 'Group',
        path: '/shop/group',
        component:MainGroupPage
    },
    {
        name: 'SubGroup',
        path: '/shop/sub/group',
        component:SubGroupPage
    },
    {
        name: 'ProductPage',
        path: '/shop/product',
        component:ProductPage
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
        path: '/contact',
        component:ContactsPage
    },
    {
        name: 'Docs',
        path: '/docs',
        component:DocsPage
    },
    {
        name: 'Partners',
        path: '/partners',
        component:PartnersPage
    }
   
];

const router = new VueRouter({
    mode: 'history',
    // base: 'localhost:8080',
    base: '/',
    routes
});

export default router;