import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import {ALImage} from '../ALComponent';
import ScreenUtils from '../../../utils/ScreenUtils';

function ALEmpty(props){
  return (
    <View style={localStyle.box}>
      <ALImage src={props.tipImage} style={{width: 200, height: 200, ...props.style}} />

      <View style={{height: 20}}></View>

      <Text style={[localStyle.tipText, props.tipTextStyle]}>{props.tipText}</Text>
    </View>
  );
}

// 属性类型
ALEmpty.propTypes = {
  style: PropTypes.object,
  tipImage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  tipImageStyle: PropTypes.object,
  tipText: PropTypes.string,
  tipTextStyle: PropTypes.object,
}

// 默认属性值
ALEmpty.defaultProps = {
  style: {},
  tipImage: require("../../../assets/image/common/empty.png"),
  tipImageStyle: {},
  tipText: "没有内容",
  tipTextStyle: {},
}

export default ALEmpty;

// 样式
const localStyle = StyleSheet.create({
  textColorBlue: {
    color: "blue"
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: ScreenUtils.getScreenWidth(),
    height: 400
  },
  tipText:{
    color: "#ccc"
  }
})
