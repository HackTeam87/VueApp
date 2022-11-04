import Vue from 'vue';
import VueRouter from 'vue-router';
// Главная
import MainPage from '../views/MainPage';
// Безопасность
import MainSecurityPage from '../views/security/MainSecurityPage';
import AccessControlPage from '../views/security/access-control/AccessControlPage';
import AlarmSecurityPage from '../views/security/alarm-security/AlarmSecurityPage';
import VideoSurveillancePage from '../views/security/video-surveillance/VideoSurveillancePage';
import ProjectPage from '../views/security/project/ProjectPage';
// Омо
import OmoPage from '../views/iot/OmoPage';
import VInternetMainPage from '../views/VInternetMainPage';
// Интернет
import InternetMainPage from '../views/InternetMainPage';
import InternetPricePage from '../views/internet/InternetPricePage';
import SofiyaPrice from '../views/internet/sofiya/SofiyaPrice';
import DaniyaPrice from '../views/internet/daniya/DaniyaPrice';
import EurocityPrice from '../views/internet/eurocity/EurocityPrice';
import PromenadaPrice from '../views/internet/promenada/PromenadaPrice';
import OneHousePrice from '../views/internet/one_house/OneHousePrice';
import UGPrice from '../views/internet/UG/UGPrice';
// Интернет бизнес
import ResidentialPricePage from '../views/internet/business/residential_complexes/ResidentialPricePage';
import LobanovskogoPricePage from '../views/internet/business/lobanovskogo/LobanovskogoPricePage';
import BerkovetskayaPricePage from '../views/internet/business/berkovetskaya/BerkovetskayaPricePage';
// Домофон
import IntercomPage from '../views/intercom/IntercomPage';
// Магазин
import MainGroupPage from '../views/shop/MainGroupPage';
import SubGroupPage from '../views/shop/SubGroupPage';
import ProductPage from '../views/shop/ProductPage';
// О нас
import AboutPage from '../views/about/AboutPage';
// Документы
import DocsPage from '../views/docs/DocsPage';
// Новости
import NewsPage from '../views/news/NewsPage';
import NewsDetailPage from '../views/news/NewsDetailPage';
// Партнеры
import PartnersPage from '../views/partners/PartnersPage';
// Инструкции
import ManualPage from '../views/manual/ManualPage';
import ContactsPage from '../views/contacts/ContactsPage';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Main',
        path: '/',
        component: MainPage,
    },
    {
        name: 'MainSecurity',
        path: '/main/security',
        component: MainSecurityPage,
        meta: {
        key: 'Безпека'
      }
    },
    {
        name: 'AccessControlPage',
        path: '/main/security/access/control',
        component: AccessControlPage,
         meta: {
        key: 'Контроль доступу'
        }
    },
    {
        name: 'AlarmSecurityPage',
        path: '/main/security/alarm/security',
        component: AlarmSecurityPage,
         meta: {
        key: 'Охоронна сигналізація'
        }
    },
    {
        name: 'VideoSurveillancePage',
        path: '/main/security/video/surveillance',
        component: VideoSurveillancePage,
         meta: {
        key: 'Відеоспостереження'
        }
    },

    {
        name: 'ProjectPage',
        path: '/main/security/project/project',
        component: ProjectPage,
         meta: {
        key: 'Проекти'
        }
    },
     {
        name: 'OmoPage',
        path: '/iot',
        component: OmoPage,
         meta: {
        key: 'Розумний дім'
        }
    },
    {
        name: 'ManualPage',
        path: '/manual',
        component: ManualPage,
          meta: {
        key: 'Інструкції'
        }
    },
     {
        name: 'InternetMain',
        path: '/internet',
        component: InternetMainPage,
         meta: {
        key: 'Інтернет'
        }
    },
    {
        name: 'VInternetMain',
        path: '/vinternet',
        component: VInternetMainPage
    },
    {
        name: 'InternetPice',
        path: '/internet/price',
        component: InternetPricePage,
    },
    {
        name: 'SofiyaPice',
        path: '/internet/price/sofiya',
        component: SofiyaPrice
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
        name: 'OneHousePrice',
        path: '/internet/price/one_house',
        component: OneHousePrice
    },
    {
        name: 'UGPrice',
        path: '/internet/price/UG',
        component: UGPrice
    },
    {
        name: 'ResidentialPrice',
        path: '/internet/business/residential',
        component: ResidentialPricePage
    },
    {
        name: 'LobanovskogoPrice',
        path: '/internet/business/lobanovskogo',
        component: LobanovskogoPricePage
    },
    {
        name: 'BerkovetskayaPrice',
        path: '/internet/business/berkovetskaya',
        component: BerkovetskayaPricePage
    },

    {
        name: 'Intercom',
        path: '/intercom',
        component: IntercomPage,
          meta: {
        key: 'Домофон'
        }
    },
    {
        name: 'Shop',
        path: '/shop/group',
        component:MainGroupPage,
          meta: {
        key: 'Магазин'
      }
    },
    {
        name: 'SubGroup',
        path: '/shop/sub/group',
        component:SubGroupPage,
    },
    {
        name: 'ProductPage',
        path: '/shop/product',
        component:ProductPage
    },
    {
        name: 'About',
        path: '/about',
        component:AboutPage,
        meta: {
        key: 'Про компанію'
      }
    },
     {
        name: 'News',
        path: '/news',
        component:NewsPage,
         meta: {
        key: 'Новини'
      }
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
        component:DocsPage,
        meta: {
        key: 'Документи'
      }
    },
    {
        name: 'Partners',
        path: '/partners',
        component:PartnersPage,
        meta: {
        key: 'Партнери'
      }
    }

];

const router = new VueRouter({
    mode: 'history',
    // base: 'localhost:8080',
    base: '/',
    routes
});

export default router;