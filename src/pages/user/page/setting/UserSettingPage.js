import React from 'react';
import {View, Text, StyleSheet, ToastAndroid} from 'react-native';
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {Button, Flex, List, WingBlank} from '@ant-design/react-native';
import ALText from '../../../../components/al-components/al-text/ALText';
import styles from '../../../../style/styles';
import {Icon} from 'beeshell';
import {connect} from 'react-redux';
import RouteConst from '../../../../router/RouteConst';
import ActionTypes from '../../../../store/action-types';
import ALListItem from '../../../../components/al-components/al-list/al-list-item/ALListItem';
import {HttpRequest} from '../../../../utils/network/AxiosRequest';
import {ApiConst} from '../../../../utils/network/ApiConst';

class UserSettingPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染函数
  render() {
    return (
      <ALPageContainer showNavBar navBar={{left: "", title: "设置"}} navigation={this.props.navigation}>
        <WingBlank>
          <View>
            <ALListItem
              onPress={() => {
                this.props.navigation.navigate(RouteConst.user.USER_PROFILE_PAGE);
              }}
              renderLeft={
                <ALText hNum={4}>个人信息</ALText>
              } centerText={''} rightText={''}/>

            <ALListItem
              onPress={() => {
                this.props.navigation.navigate(RouteConst.other.ABOUT_PAGE)
              }}
              renderLeft={
                <ALText hNum={4}>关于</ALText>
              } centerText={''} rightText={''}/>
          </View>

          <View style={styles.alMarginTB40}>
            <Button type="warning" onPress={this.logout}>退出登录</Button>
          </View>


        </WingBlank>
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

  logout = () => {
    HttpRequest.post({
      url: ApiConst.sso.POST_LOGOUT,
      data: {
        token: this.props.userToken
      }
    }).then(res => {
      if (res.err === null){
        this.props.updateLoginState(false);
        this.props.updateUserInfo(null);
        this.props.updateUserToken(null);
        this.props.navigation.navigate(RouteConst.app.APP_CONTAINER);
      }else {
        ToastAndroid.show("网络错误，请重试！", ToastAndroid.SHORT);
      }
    })
  }

}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    userToken: state.userToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginState(data) {
      let action = {
        type: ActionTypes.UPDATE_LOGIN_STATE,
        value: data,
      };
      dispatch(action);
    },
    updateUserInfo(data) {
      let action = {
        type: ActionTypes.UPDATE_USERINFO,
        value: data,
      };
      dispatch(action);
    },
    updateUserToken(data) {
      let action = {
        type: ActionTypes.UPDATE_USER_TOKEN,
        value: data,
      };
      dispatch(action);
    },
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingPage);

// 样式
const localStyle = StyleSheet.create({
  textColorBlue: {
    color: 'blue',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
