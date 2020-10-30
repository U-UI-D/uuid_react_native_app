import React from "react";
import {Dimensions, ScrollView} from 'react-native';
import PropTypes from "prop-types";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

function ALPageContainer(props) {

  return (
    <ScrollView {...props} style={{
      paddingTop: props.paddingTop,
      width: screenWidth,
      height: screenHeight,
      backgroundColor: props.backgroundColor,
      position: "relative",
      ...props.style
    }}>
      {props.children}
    </ScrollView>
  );
}

ALPageContainer.propTypes = {
  paddingTop: PropTypes.number,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
}

ALPageContainer.defaultProps = {
  paddingTop: 30,
  backgroundColor: "#fff",
  style: {}
}

export default ALPageContainer;


