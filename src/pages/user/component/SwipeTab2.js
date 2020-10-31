import React from "react";
import {View, Text, StyleSheet} from 'react-native'

class SwipeTab2 extends React.Component{

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
        <Text style={{marginTop: 60, textAlign: "center"}}>暂无数据</Text>
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


export default SwipeTab2;

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
