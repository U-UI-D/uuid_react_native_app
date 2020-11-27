import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import LinearGradient from "react-native-linear-gradient";
import {BoxShadow} from 'react-native-shadow';
import {ALImage, ALPlaceView} from '../../components/al-components/ALComponent';
import styles from '../../style/styles';



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

    const shadowOpt = {
      width:200,
      height:120,
      color:"#000",
      border:2,
      radius:3,
      opacity:0.2,
      x:0,
      y:3,
      style:{marginVertical:5},
    }

    return (
      <View style={localStyle.flexCenter}>

        <View style={[styles.alShowBorderRed]}>
          {/*<ALImage width={200} height={400} />*/}

          <Image source={this.props.src ? this.props.src : this.state.defaultSrc}  width={200} height={400} />
        </View>

        <ALPlaceView height={40} />

        <BoxShadow setting={{
          width:200,
          height:120,
          color:"#eee",
          border:20,
          radius:10,
          opacity:0.2,
          x:2,
          y:2,
        }}>
          <View style={{
            width: 200,
            height: 120,
            padding: 10,
            backgroundColor: "#fff",
            borderRadius: 10,
          }}>
            <Text>
              测试BoxShadow阴影
            </Text>
          </View>
        </BoxShadow>

        <ALPlaceView height={40} />

        <View style={{
          width: 200,
          height: 120,
          padding: 10,
          margin: 4,
          backgroundColor: "#fff",
          borderRadius: 10,
          elevation: 20
        }}>
          <Text>
            测试elevation阴影
          </Text>
        </View>

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
