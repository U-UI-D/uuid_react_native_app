import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import styles from '../../../style/styles';
import {ALImage, ALTapView} from '../../al-components/ALComponent';

function IconTextBox(props){
  return (
    <ALTapView style={localStyle.boxStyle} onPress={props.onPress}>
      <ALImage src={props.icon} size={props.iconSize} />
      <Text style={localStyle.textStyle}>{props.text}</Text>
    </ALTapView>
  );
}

// 属性类型
IconTextBox.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  iconSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  text: PropTypes.string
}

// 默认属性值
IconTextBox.defaultProps = {
  style: {},
  iconSize: 30
}

export default IconTextBox;

// 样式
const localStyle = StyleSheet.create({
  textColorBlue: {
    color: "blue"
  },
  boxStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  textStyle: {
    fontSize: 12,
    marginTop: 6
  }
})
