/**
 * @format
 */

import {AppRegistry, Dimensions} from 'react-native';
import App from './App';
import React from "react";
import {name as appName} from './app.json';

React.mockPath = 'https://gitee.com/AlanLee97/react_native_mock_uicn/raw/master/src/assets/mock';

React.getScreenWidth = () => {
  return Dimensions.get('window').width;
}

React.getScreenHeight = () => {
  return Dimensions.get('window').height;
}

AppRegistry.registerComponent(appName, () => App);
