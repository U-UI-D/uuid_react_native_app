import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import {Flex} from '@ant-design/react-native';
import styles from '../../../../style/styles';
import {ALDivider} from '../../ALComponent';
import PropTypes from 'prop-types';


class ALListItem extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
      <View>
        <Flex direction="column" onPress={this.props.onPress}>
          <Flex.Item style={{alignSelf: "stretch"}}>
            <Flex style={styles.alPaddingTB20}>
              <Flex.Item>
                <Flex>
                  {
                    this.props.renderLeft === null ? (
                      <Text>{this.props.leftText}</Text>
                    ) : this.props.renderLeft
                  }
                </Flex>
              </Flex.Item>
              <Flex.Item style={styles.alFlexCenterH}>
                <Flex>
                  {
                    this.props.renderCenter === null ? (
                      <Text>{this.props.centerText}</Text>
                    ) : this.props.renderCenter
                  }
                </Flex>
              </Flex.Item>
              <Flex.Item>
                <Flex justify={"end"}>
                  {
                    this.props.renderRight === null ? (
                      <Text>{this.props.rightText}</Text>
                    ) : this.props.renderRight
                  }
                </Flex>
              </Flex.Item>
            </Flex>
            <ALDivider />
          </Flex.Item>
        </Flex>
      </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

}

// prop类型
ALListItem.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  leftText: PropTypes.string,
  leftImg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  centerText: PropTypes.string,
  rightText: PropTypes.string,
  rightImg: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  renderLeft: PropTypes.object,
  renderCenter: PropTypes.object,
  renderRight: PropTypes.object,
};

// prop默认值
ALListItem.defaultProps = {
  style: {},
  onPress: null,
  leftText: "左边文案",
  leftImg: "",
  centerText: "中间文案",
  rightText: "右边文案",
  rightImg: "",
  renderLeft: null,
  renderCenter: null,
  renderRight: null,
};


export default ALListItem;

// 样式
const localStyle = StyleSheet.create({
  textColorBlue: {
    color: "blue"
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
