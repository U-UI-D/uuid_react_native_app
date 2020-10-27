
import React from 'react';
import {
  Text,
  Platform
} from 'react-native';

import RouterView from './src/router/RouterView';


function App(){

  // BEGIN：解决Text组件文字显示不全的问题
  const defaultFontFamily = {
    ...Platform.select({
      android: {fontFamily: ''}
    })
  }
  const oldRender = Text.render;
  Text.render = function(...args) {
    const origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [defaultFontFamily, origin.props.style]
    });
  };
  // END：解决Text组件文字显示不全的问题

  return (
    <RouterView />
  );
}

export default App;
