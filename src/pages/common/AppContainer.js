import * as React from 'react';
import HomePage from "../home/HomePage";
import DemoPage from '../demo/DemoPage';
import Tabbar from '../../components/common/tabbar/Tabbar';
import UserPage from '../user/UserPage';
import DiscoveryPage from '../discovery/DiscoveryPage';


const tabScreens = [
  {
    key: "HomePage",
    name: "首页",
    component: HomePage,
    options: {},
    icon0: require('../../assets/icon/tabbar/shouye0.png'),
    icon1: require('../../assets/icon/tabbar/shouye1.png'),
  },
  {
    key: "DiscoveryPage",
    name: "发现",
    component: DiscoveryPage,
    options: {},
    icon0: require('../../assets/icon/tabbar/shoucang0.png'),
    icon1: require('../../assets/icon/tabbar/shoucang1.png'),
  },
  {
    key: "DemoPage",
    name: "Demo",
    component: DemoPage,
    options: {},
    icon0: require('../../assets/icon/tabbar/sousuo0.png'),
    icon1: require('../../assets/icon/tabbar/sousuo1.png'),
  },
  {
    key: "UserPage",
    name: "我的",
    component: UserPage,
    options: {},
    icon0: require('../../assets/icon/tabbar/wode0.png'),
    icon1: require('../../assets/icon/tabbar/wode1.png'),
  },
];

export default function AppContainer() {
  return (
    <Tabbar tabScreens={tabScreens} />
  );
}

