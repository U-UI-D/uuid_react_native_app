import React from "react";
import {View, TouchableOpacity} from 'react-native';

function ALTapView(props) {
  return (
    <TouchableOpacity {...props} activeOpacity={1}>
      {props.children}
    </TouchableOpacity>
  );
}

export default ALTapView;
