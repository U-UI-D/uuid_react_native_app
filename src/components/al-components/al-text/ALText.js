import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

function ALText(props) {


  const getType = (type) => {
    switch (type) {
      case 'title':
        return localStyle.title;
      case 'plain':
        return localStyle.plain;
      case 'desc':
        return localStyle.desc;
      default:
        return null;
    }
  };

  const getHNum = (num) => {
    switch (num) {
      case 1:
        return localStyle.h1;
      case 2:
        return localStyle.h2;
      case 3:
        return localStyle.h3;
      case 4:
        return localStyle.h4;
      case 5:
        return localStyle.h5;
      case 6:
        return localStyle.h6;
      default:
        return null;
    }
  };

  return (
    <Text
      onPress={props.onPress}
      numberOfLines={props.row}{...props}
      style={[
        {

          textAlign: props.align,
        },
        getType(props.type),
        getHNum(props.hNum),
        {
          color: props.color,
          ...props.style,
        },
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
  hNum: PropTypes.number,
  row: PropTypes.number,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

// prop默认值
ALText.defaultProps = {
  type: 'plain',
  color: '#000000',
  align: 'left',
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
    fontSize: 16,
  },
  desc: {
    color: '#bababa',
    fontSize: 14,
  },
});
