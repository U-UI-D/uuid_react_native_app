import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

function ALText(props) {

  return (
    <Text
      onPress={props.onPress}
      numberOfLines={props.row}{...props}
      style={[
        {
          textAlign: props.align,
          ...(props.type === 'title' ? localStyle.title : (props.type === 'desc' ? localStyle.desc : localStyle.plain)),
          ...(props.h1 ? localStyle.h1 : null),
          ...(props.h2 ? localStyle.h2 : null),
          ...(props.h3 ? localStyle.h3 : null),
          ...(props.h4 ? localStyle.h4 : null),
          ...(props.h5 ? localStyle.h5 : null),
          ...(props.h6 ? localStyle.h6 : null),
        },
        {
          ...(props.color ? {color: props.color} : null),
          ...(props.size ? {fontSize: props.size} : null),
          ...props.style,
        }
      ]}
    >
      {props.children}
    </Text>
  );
}

// prop类型
ALText.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  size: PropTypes.number,
  row: PropTypes.number,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

// prop默认值
ALText.defaultProps = {
  type: 'plain',
  align: 'left',
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  style: {},
  onPress: null,
};

export default ALText;

// 样式
const localStyle = StyleSheet.create({
  h1: {
    color: 'black',
    fontSize: 24,
  },
  h2: {
    color: 'black',
    fontSize: 22,
  },
  h3: {
    color: 'black',
    fontSize: 18,
  },
  h4: {
    color: 'black',
    fontSize: 16,
  },
  h5: {
    color: 'black',
    fontSize: 14,
  },
  h6: {
    color: 'black',
    fontSize: 12,
  },
  title: {
    color: 'black',
    fontSize: 24,
  },
  plain: {
    color: "black",
    fontSize: 16,
  },
  desc: {
    color: '#bababa',
    fontSize: 14,
  },
});
