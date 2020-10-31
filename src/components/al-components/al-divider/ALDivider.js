import React from 'react';
import {View} from 'react-native';
import styles from '../../../style/styles';
import PropTypes from 'prop-types';

// 渲染函数
function ALDivider(props) {
  return (
    <View>
      {
        props.children ? props.children :
          <View>
            {
              props.slotCenter ?
                (
                  <View style={[
                    styles.alFlexRow,
                    styles.alFlexCenter,
                    {
                      marginTop: props.marginTop,
                      marginBottom: props.marginBottom,
                      marginLeft: props.marginLeft,
                      marginRight: props.marginRight,
                    },
                  ]}>
                    <View style={{
                      flex: 1,
                      flexDirection: 'column',
                      height: props.weight,
                      backgroundColor: props.color,
                    }}/>
                    <View style={{flex: 1}}>
                      {props.slotCenter}
                    </View>
                    <View style={{
                      flex: 1,
                      height: props.weight,
                      backgroundColor: props.color,
                    }}/>
                  </View>
                )
                :
                (
                  <View style={{
                    margin: props.margin,
                    marginTop: props.marginTop,
                    marginBottom: props.marginBottom,
                    marginLeft: props.marginLeft,
                    marginRight: props.marginRight,
                    width: props.width,
                    height: props.weight,
                    backgroundColor: props.color,
                  }}/>
                )
            }
          </View>
      }
    </View>

  );
}

ALDivider.propTypes = {
  color: PropTypes.string,
  weight: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  padding: PropTypes.number,
  slotCenter: PropTypes.object,
};

ALDivider.defaultProps = {
  color: '#eee',
  weight: 0.5,
  margin: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  padding: 0,
};

export default ALDivider;
