import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import DateTimeUtils from '../../utils/DateTimeUtils';


class TestPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      carouselList: [],
      defaultSrc: require("../../assets/icon/icon1/image.png")

    };
  }


  // 渲染函数
  render() {

    let time = new Date(new Date().getTime() + (1000 * 60 * 60 * 8)).toISOString();
    time = DateTimeUtils.getMobileEndFormerTimeFromISO(time);
    console.log("time", time);

    return (
      <View style={localStyle.flexCenter}>
        <Text>
          {time}
        </Text>
      </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    console.log("============== TestPage ===============");

  }

  //组件将要卸载时
  componentWillUnmount() {

  }


}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginState(data) {
      let action = {
        type: 'updateLoginState',
        value: data,
      };
      dispatch(action);
    },
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);

// 样式
const localStyle = StyleSheet.create({
  textColorBlue: {
    color: 'blue',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
});
