import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {Button, Flex, List, WingBlank} from '@ant-design/react-native';
import ALText from '../../../../components/al-components/al-text/ALText';
import styles from '../../../../style/styles';
import {Icon} from 'beeshell';
import {connect} from 'react-redux';
import RouteConst from '../../../../router/RouteConst';
import Actions from '../../../../store/actions';
import ALListItem from '../../../../components/al-components/al-list/al-list-item/ALListItem';

class UserSettingPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染函数
  render() {
    return (
      <ALPageContainer>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Flex direction="row">
                <Icon source={require('beeshell/dist/common/images/icons/angle-left.png')} size={18} tintColor='#000'/>
                <Text style={styles.alPaddingTB20} onPress={() => {
                  this.props.navigation.goBack();
                }}>返回</Text>
              </Flex>
            </Flex.Item>
          </Flex>


          <View>
            <ALText hNum={2}>设置</ALText>
          </View>

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
            <Button type="warning" onPress={() => {
              this.props.updateLoginState(false);
              this.props.updateUserInfo(null);
              this.props.navigation.navigate(RouteConst.app.APP_CONTAINER);
            }}>退出登录</Button>
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

}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginState(data) {
      let action = {
        type: Actions.UPDATE_LOGIN_STATE,
        value: data,
      };
      dispatch(action);
    },
    updateUserInfo(data) {
      let action = {
        type: Actions.UPDATE_USERINFO,
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
