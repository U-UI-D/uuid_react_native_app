import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import ALPageContainer from '../../components/al-components/al-page-container/ALPageContainer';
import styles from '../../style/styles';

class DiscoveryPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    return (
        <ALPageContainer>
          <Text>
            发现
          </Text>
        </ALPageContainer>
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


export default DiscoveryPage;

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
