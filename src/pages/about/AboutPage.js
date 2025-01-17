import React from "react";
import {View, Text} from 'react-native';
import styles from '../../style/styles';
import {connect} from 'react-redux';
import {Button} from 'beeshell';
import RouteConst from '../../router/RouteConst';

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
        <View style={styles.alFlexCenter}>

          <Text style={localStyle.textColorBlue}>关于页面</Text>
          <Text style={localStyle.textColorBlue}>id: {this.props.route.params === undefined ? "" : this.props.route.params.id}</Text>
          <Text>{this.props.name}</Text>

          <Button type="danger" onPress={() => {
            this.props.navigation.navigate(RouteConst.test.TEST_PAGE)
          }}>测试页面</Button>
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

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginState(data){
      let action = {
        type: "updateLoginState",
        value: data
      }
      dispatch(action);
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

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
