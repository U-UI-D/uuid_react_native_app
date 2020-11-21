import HomePage from "../pages/home/HomePage";
import AboutPage from '../pages/about/AboutPage';
import DemoPage from '../pages/demo/DemoPage';
import AppContainer from '../pages/common/AppContainer';
import WorkDetailPage from '../pages/work/page/detail/WorkDetailPage';
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
import TestPage from '../pages/demo/TestPage';
import TopPage from '../pages/top/TopPage';
import ImageViewerPage from '../pages/common/ImageViewerPage';
import WorkPage from '../pages/work/WorkPage';
import MaterialPage from '../pages/material/MaterialPage';
import ShopPage from '../pages/shop/ShopPage';
import MessagePage from '../pages/message/MessagePage';
import ChatSessionPage from '../pages/message/page/chat-session/ChatSessionPage';
import VisitorProfilePage from '../pages/user/page/visitor-profile/VisitorProfilePage';


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
  {
    name: 'VisitorProfilePage',
    component: VisitorProfilePage,
    options: {
      header: () => null,
    }
  },
];

const module_work = [
  {
    name: 'WorkPage',
    component: WorkPage,
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

const module_material = [
  {
    name: 'MaterialPage',
    component: MaterialPage,
    options: {
      header: () => null,
    }
  },
];

const module_top = [
  {
    name: 'TopPage',
    component: TopPage,
    options: {
      header: () => null,
    }
  },
];

const module_shop = [
  {
    name: 'ShopPage',
    component: ShopPage,
    options: {
      header: () => null,
    }
  },
];

const module_message = [
  {
    name: 'MessagePage',
    component: MessagePage,
    options: {
      header: () => null,
    }
  },
  {
    name: 'ChatSessionPage',
    component: ChatSessionPage,
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
    name: 'TestPage',
    component: TestPage,
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
  {
    name: 'ImageViewerPage',
    component: ImageViewerPage,
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
  ...module_material,
  ...module_top,
  ...module_shop,
  ...module_message,
  ...module_common,

];

export default routes;
