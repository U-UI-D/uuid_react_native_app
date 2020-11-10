import React from "react";
import {View} from 'react-native'
import PropTypes from "prop-types";

function ALPlaceView(props) {

  return (
    <View style={{
      width: props.width,
      height: props.height,
      ...props.style
    }}>
      {props.children}
    </View>
  );

}

ALPlaceView.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
}
ALPlaceView.defaultProps = {
  style: {}
}

export default ALPlaceView;

