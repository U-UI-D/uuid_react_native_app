import React from "react";
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

function ALTapView(props) {
  return (
    <TouchableOpacity {...props} activeOpacity={1}>
      {props.children}
    </TouchableOpacity>
  );
}

// prop类型
ALTapView.propTypes = {
  // 显示推荐内容
  onPress: PropTypes.func,
};

// prop默认值
ALTapView.defaultProps = {
  onPress: null,
};

export default ALTapView;
