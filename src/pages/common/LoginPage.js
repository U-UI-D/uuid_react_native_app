import React from 'react';
import {View, Text, Image, StyleSheet, Keyboard, ScrollView, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import styles from '../../style/styles';
import LinearGradient from "react-native-linear-gradient";
import {ALDivider, ALInput} from '../../components/al-components/ALComponent';
import RouteConst from '../../router/RouteConst';
import {connect} from 'react-redux';
import ActionTypes from '../../store/action-types';
import {HttpRequest} from '../../utils/network/AxiosRequest';
import {ApiConst} from '../../utils/network/ApiConst';

class LoginPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      keyboardHeight: '',
      thirdLoginIcon: [
        {
          icon: require('../../assets/icon/icon1/qq.png')
        },
        {
          icon: require('../../assets/icon/icon1/wechat.png')
        },
        {
          icon: require('../../assets/icon/icon1/weibo.png')
        }
      ]
    };
  }

  // 渲染函数
  render() {
    const state = this.state;
    const nav = this.props.navigation;
    const screenWidth = React.getScreenWidth();
    const screenHeight = React.getScreenHeight();
    let focus = false;
    return (
        <View style={{
          paddingTop: 30,
          backgroundColor: '#fff',
          width: screenWidth,
          height: screenHeight + 100,
        }}>
          <View style={[styles.alFlexRow, styles.alFlexSpaceBetween, styles.alPadding20]}>
            <Text onPress={() => nav.goBack()}>返回</Text>
            <Text onPress={() => nav.push('RegisterPage')}>注册</Text>
          </View>


          <KeyboardAvoidingView
              behavior='padding'
              style={{flex: 1}}
              keyboardVerticalOffset={-this.state.keyboardHeight}>
            <ScrollView>


              <View style={{
                display: 'flex',
                alignItems: 'center',
              }}>
                {/*LOGO*/}
                <Image style={{
                  width: 80,
                  height: 80,
                }} source={require('../../assets/image/logo.png')}/>
                <Text style={styles.alTextH1}>欢迎登录</Text>
                <Text style={[localStyle.colorGray, styles.alMarginTop20]}>专业用户体验设计平台</Text>
                <Text style={[localStyle.colorGray, styles.alMarginBottom20]}>设计师交流学习聚集地</Text>
              </View>

              <View style={{height: 30}}></View>

              {/*帐号输入框*/}
              <View style={styles.alMarginLR30}>
                <Text style={[localStyle.colorGray]}>手机号/用户名/邮箱</Text>
                <ALInput onChangeText={(value) => {
                  this.setState({
                    username: value
                  })
                }} />

              </View>

              {/*密码输入框*/}
              <View style={[styles.alMarginLR30, styles.alMarginTop30]}>
                <Text style={[localStyle.colorGray]}>用户密码</Text>
                <ALInput type={'password'} onChangeText={(value) => {
                  this.setState({
                    password: value
                  })
                }}/>
              </View>

              <View style={[
                styles.alFlexRow,
                styles.alFlexSpaceBetween,
                styles.alMarginTop20,
                styles.alMarginLR30]}>
                <Text>忘记密码？</Text>
                <Text style={styles.alColorBlue}>免密码登录</Text>
              </View>

              {/*登录按钮*/}
              <View style={[styles.alMarginLR30, styles.alMarginTop30]}>
                <LinearGradient
                  style={{borderRadius: 10,}}
                  start={{x: 0.3, y: 0.1}}
                  end={{x: 0.9, y: 0.1}}
                  colors={["#2f7bff", "#60b6fd"]}>
                  <Text style={{
                    padding: 14,
                    textAlign: 'center',
                    color: '#fff',
                    borderRadius: 10,
                  }} onPress={() => {this.login()}}>登录</Text>
                </LinearGradient>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>


          {/*提示文字*/}
          <View style={{marginLeft: 30,
          marginRight: 30, marginBottom: 80}}>
            <View style={styles.alMarginBottom30}>
              <ALDivider slotCenter={
                <Text style={[styles.alTextCenter, localStyle.colorGray]}>第三方登录</Text>
              } />
            </View>


            {/*第三方登录icon*/}
            <View style={[styles.alFlexRow, styles.alFlexSpaceBetween]}>
              {this.state.thirdLoginIcon.map((item) => {
                return <Image key={item.icon} style={{
                  width: 30,
                  height: 30,
                }} source={item.icon}/>
              })}

            </View>

          </View>
        </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {  // 监听键盘高度
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }

  //组件将要卸载时
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();

    // this.layout(this.alInput);
  }


  _keyboardDidShow(e) {  // 获取键盘高度
    this.setState({
      keyboardHeight: e.endCoordinates.height,
    });
  }

  _keyboardDidHide(e) {
    this.setState({
      keyboardHeight: 0,
    });
  }

  goPage(path) {
    const state = this.state;
    state.navigation.navigate(path);
  }

  login = () => {
    console.log(this.state.username);
    console.log(this.state.password);

    HttpRequest.post({
      url: ApiConst.sso.POST_LOGIN,
      data: {
        username: this.state.username,
        password: this.state.password,
      }
    }).then(res => {
        if (res.err === null){
          this.getUserInfoByToken(res.data.token);
          this.props.updateUserToken(res.data.token);
          console.log("token", res.data.token);
        }else {
          console.log("帐号密码错误");
          ToastAndroid.show("帐号密码错误", ToastAndroid.SHORT);
        }
    })
  }

  getUserInfoByToken = (token) => {
    HttpRequest.get({
      url: ApiConst.sso.GET_USER_BY_TOKEN + token,
    }).then(res => {
      if (res.err === null){
        this.props.updateLoginState(true);
        this.props.updateUserInfo(res.data.data);
        this.props.navigation.navigate(RouteConst.app.APP_CONTAINER);
        ToastAndroid.show("登录成功", ToastAndroid.SHORT);
      }else {
        console.log("帐号密码错误");
        ToastAndroid.show("帐号密码错误", ToastAndroid.SHORT);
      }
    })
  }


}

const localStyle = StyleSheet.create({
  colorGray: {
    color: '#cdcdcd',
  },
});


const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginState(data){
      let action = {
        type: ActionTypes.UPDATE_LOGIN_STATE,
        value: data
      }
      dispatch(action);
    },
    updateUserInfo(data){
      let action = {
        type: ActionTypes.UPDATE_USERINFO,
        value: data
      }
      dispatch(action);
    },
    updateUserToken(data){
      let action = {
        type: ActionTypes.UPDATE_USER_TOKEN,
        value: data
      }
      dispatch(action);
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
