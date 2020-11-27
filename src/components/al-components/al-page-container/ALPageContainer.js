import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {ALPlaceView} from '../ALComponent';
import {Flex} from '@ant-design/react-native';
import styles from '../../../style/styles';
import {Icon} from 'beeshell';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

function ALPageContainer(props) {

  const goBack = () => {
    props.navigation.goBack()
  }

  const navBar = (
    <View style={{
      position: 'absolute',
      top: props.scroll ? 0 : 30,
      height: 50,
      width: screenWidth,
      backgroundColor: '#fff',
      elevation: props.showShadow ? 6 : 0,
    }}>
      <Flex justify="between" style={[styles.alPaddingLR20, styles.alFlexCenterV]}>
        <Flex.Item>
          <Flex align="center" onPress={props.onPressLeft || goBack}>
            <Icon source={require('beeshell/dist/common/images/icons/angle-left.png')} size={18}
                  tintColor='#000'/>

            <Text>
              {props.navBar.leftText}
            </Text>
          </Flex>
        </Flex.Item>
        <Flex.Item>
          <Text style={{textAlign: 'center', fontSize: 18}}>
            {props.navBar.title}
          </Text>
        </Flex.Item>
        <Flex.Item>
          <Text style={{textAlign: 'right'}}>
            {props.navBar.rightText}
          </Text>
        </Flex.Item>
      </Flex>
    </View>
  );

  const pageStyle = {
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: props.backgroundColor,
    position: 'relative',
    display: "flex",
    flexDirection: "column",
    flex: 1,
    ...props.style,
  };

  return (
    <>
      {
        props.scroll ? (
          <ScrollView {...props}
                      scrollEnabled={props.scroll}
                      stickyHeaderIndices={props.stickyHeaderIndices}
                      style={pageStyle}>
            {props.showNavBar ? navBar : null}
            {props.showNavBar ? (<ALPlaceView height={50}/>) : null}
            {props.children}
          </ScrollView>
        ) : (
          <View style={pageStyle}>
            {props.showNavBar ? navBar : null}
            {props.showNavBar ? (<ALPlaceView height={50}/>) : null}
            {props.children}
          </View>
        )
      }
    </>
  );
}

ALPageContainer.propTypes = {
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  showShadow: PropTypes.bool,
  showNavBar: PropTypes.bool,
  scroll: PropTypes.bool,
  navBar: PropTypes.object,
  onPressLeft: PropTypes.func,
  stickyHeaderIndices: PropTypes.array,
};

ALPageContainer.defaultProps = {
  paddingTop: 30,
  paddingBottom: 0,
  backgroundColor: '#fff',
  style: {},
  showShadow: false,
  showNavBar: false,
  scroll: true,
  navBar: {
    leftText: '返回',
    title: '标题',
    rightText: '',
  },
  onPressLeft: null,
};

export default ALPageContainer;


