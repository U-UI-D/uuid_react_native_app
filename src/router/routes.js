import HomePage from "../pages/home/HomePage";
import AboutPage from '../pages/about/AboutPage';
import DemoPage from '../pages/demo/DemoPage';
import AppContainer from '../pages/common/AppContainer';
import WorkDetailPage from '../pages/work/detail/WorkDetailPage';
import UserPage from '../pages/user/UserPage';
import LoginPage from '../pages/common/LoginPage';
import RegisterPage from '../pages/common/RegisterPage';
import UserSettingPage from '../pages/user/page/setting/UserSettingPage';
import UserProfilePage from '../pages/user/page/profile/UserProfilePage';
import DiscoveryPage from '../pages/discovery/DiscoveryPage';
import ModifyNicknamePage from '../pages/user/page/profile/page/modify-nickname/ModifyNicknamePage';
import ModifySignaturePage from '../pages/user/page/profile/page/modify-signature/ModifySignaturePage';
import ModifyAvatar from '../pages/user/page/profile/page/modify-avatar/ModifyAvatar';
import ModifyPhonePage from '../pages/user/page/profile/page/modify-phone/ModifyPhonePage';
import ModifyPasswordPage from '../pages/user/page/profile/page/modify-password/ModifyPasswordPage';


const module_user = [
  {
    name: 'UserPage',
    component: UserPage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'UserSettingPage',
    component: UserSettingPage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'UserProfilePage',
    component: UserProfilePage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'ModifyAvatar',
    component: ModifyAvatar,
    options: {
      header: () => null,
    }
  },
  {
    name: 'ModifyNicknamePage',
    component: ModifyNicknamePage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'ModifySignaturePage',
    component: ModifySignaturePage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'ModifyPhonePage',
    component: ModifyPhonePage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'ModifyPasswordPage',
    component: ModifyPasswordPage,
    options: {
      header: () => null,
    }
  },
];

const module_work = [
  {
    name: 'WorkDetailPage',
    component: WorkDetailPage,
    options: {
      header: () => null,
    }
  },
];

const module_common = [
  {
    name: 'LoginPage',
    component: LoginPage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'RegisterPage',
    component: RegisterPage,
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
    name: 'DemoPage',
    component: DemoPage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'DiscoveryPage',
    component: DiscoveryPage,
    options: {
      header: () => null,
    }
  },
];

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

  ...module_user,
  ...module_work,
  ...module_common,

];

export default routes;
