import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {ALImage} from '../ALComponent';
import ScreenUtils from '../../../utils/ScreenUtils';

function ALLoading(props) {
  return (
    <View style={[
      localStyle.box,
      {
        width: props.width,
        height: props.height,
      },
    ]}>
      <ALImage src={require('./loading.gif')} size={150}/>

      <View style={{height: 20}}/>

      <Text style={[localStyle.loadingText, props.loadingTextStyle]}>{props.loadingText}</Text>
    </View>
  );
}

// 属性类型
ALLoading.propTypes = {
  style: PropTypes.object,
  loadingText: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

// 默认属性值
ALLoading.defaultProps = {
  style: {},
  loadingText: '',
  width: ScreenUtils.getScreenWidth(),
  height: ScreenUtils.getScreenHeight()
};

export default ALLoading;

// 样式
const localStyle = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  loadingText: {
    color: '#ccc',
  },
});
