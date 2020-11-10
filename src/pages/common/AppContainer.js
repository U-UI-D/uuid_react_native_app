import * as React from 'react';
import HomePage from "../home/HomePage";
import Tabbar from '../../components/common/tabbar/Tabbar';
import UserPage from '../user/UserPage';
import DiscoveryPage from '../discovery/DiscoveryPage';
import MessagePage from '../message/MessagePage';


const tabScreens = [
  {
    key: "HomePage",
    name: "首页",
    component: HomePage,
    options: {},
    icon0: require('../../assets/icon/icon0/uuid.png'),
    icon1: require('../../assets/icon/icon1/uuid.png'),
  },
  {
    key: "DiscoveryPage",
    name: "发现",
    component: DiscoveryPage,
    options: {},
    icon0: require('../../assets/icon/icon0/navigation.png'),
    icon1: require('../../assets/icon/icon1/navigation.png'),
    iconSize: 22
  },
  {
    key: "MessagePage",
    name: "消息",
    component: MessagePage,
    options: {},
    icon0: require('../../assets/icon/icon0/message.png'),
    icon1: require('../../assets/icon/icon1/message.png'),
    iconSize: 24
  },
  {
    key: "UserPage",
    name: "我的",
    component: UserPage,
    options: {},
    icon0: require('../../assets/icon/icon0/user.png'),
    icon1: require('../../assets/icon/icon1/user.png'),
    iconSize: 24
  },
];

export default function AppContainer() {
  return (
    <Tabbar tabScreens={tabScreens} color={"#009BFF"} inactiveColor={"#d6d6d6"} />
  );
}

