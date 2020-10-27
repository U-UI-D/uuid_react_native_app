import React from "react";
import {View, Text} from 'react-native'

class AboutPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
        <View style={localStyle.flexCenter}>
          <Text style={localStyle.textColorBlue}>关于页面</Text>
          <Text style={localStyle.textColorBlue}>id: {this.props.route.params === undefined ? "" : this.props.route.params.id}</Text>
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


export default AboutPage;

// 样式
const localStyle = {
  textColorBlue: {
    color: "blue"
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
}
