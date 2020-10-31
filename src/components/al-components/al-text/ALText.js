import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class ALText extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getType = (type) => {
    switch (type){
      case "title":
        return localStyle.title;
      case "plain":
        return localStyle.plain;
      case "desc":
        return localStyle.desc;
      default:
        return localStyle.plain;
    }
  }

  getHNum = (num) => {
    switch (num){
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
  }

  // 渲染函数
  render() {
    return (
      <Text style={[
        this.getType(this.props.type),
        this.getHNum(this.props.hNum),
        {...this.props.style}
        ]} onPress={this.props.onPress}>
        {this.props.children}
      </Text>
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
ALText.propTypes = {
  type: PropTypes.string,
  hNum: PropTypes.number,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

// prop默认值
ALText.defaultProps = {
  type: "plain",
  style: {},
  onPress: null,
};

export default ALText;

// 样式
const localStyle = StyleSheet.create({
  h1: {
    color: "black",
    fontSize: 24
  },
  h2: {
    color: "black",
    fontSize: 22
  },
  h3: {
    color: "black",
    fontSize: 18
  },
  h4: {
    color: "black",
    fontSize: 16
  },
  h5: {
    color: "black",
    fontSize: 14
  },
  h6: {
    color: "black",
    fontSize: 12
  },
  title: {
    color: "black",
    fontSize: 24
  },
  plain: {
    fontSize: 16
  },
  desc: {
    color: "#bababa",
    fontSize: 14
  }
})
