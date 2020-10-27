import HomePage from "../pages/home/HomePage";
import AboutPage from '../pages/about/AboutPage';
import DemoPage from '../pages/demo/DemoPage';
import AppContainer from '../pages/common/AppContainer';
import WorkDetailPage from '../pages/work/detail/WorkDetailPage';
import UserPage from '../pages/user/UserPage';


const routes = [
  {
    name: 'AppContainer',
    component: AppContainer,
    options: {
      header: () => null,
      headerStyle: {
        backgroundColor: 'transparent'
      },
      headerTransparent: true,
    }
  },
  {
    name: 'HomePage',
    component: HomePage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'DemoPage',
    component: DemoPage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'AboutPage',
    component: AboutPage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'UserPage',
    component: UserPage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'WorkDetailPage',
    component: WorkDetailPage,
    options: {
      header: () => null,
    }
  },


];

export default routes;
