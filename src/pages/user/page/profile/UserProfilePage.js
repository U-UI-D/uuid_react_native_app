import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {WhiteSpace, WingBlank} from '@ant-design/react-native';
import {Icon, NavigationBar} from 'beeshell';
import ALText from '../../../../components/al-components/al-text/ALText';
import ALListItem from '../../../../components/al-components/al-list/al-list-item/ALListItem';
import RouteConst from '../../../../router/RouteConst';
import {ALImage, ALPlaceView} from '../../../../components/al-components/ALComponent';
import ScreenUtils from '../../../../utils/ScreenUtils';
import styles from '../../../../style/styles';
import ActionTypes from '../../../../store/action-types';
import connect from 'react-redux/lib/connect/connect';
import Flex from '@ant-design/react-native/es/flex';

class UserProfilePage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染函数
  render() {

    const {userInfo} = this.props;
    const baseInfoList = [
      {
        title: '头像',
        data: userInfo.avatar,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_AVATAR_PAGE
      },
      {
        title: '昵称',
        data: userInfo.nickname,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_NICKNAME_PAGE
      },
      {
        title: '性别',
        data: userInfo.gender,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_SIGNATURE_PAGE
      },
      {
        title: '年龄',
        data: userInfo.age,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_SIGNATURE_PAGE
      },
      {
        title: '城市',
        data: userInfo.city,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_SIGNATURE_PAGE
      },
      {
        title: '职业',
        data: userInfo.ocupation,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_SIGNATURE_PAGE
      },
      {
        title: '简介',
        data: userInfo.introdution,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_SIGNATURE_PAGE
      },
      {
        title: '手机号',
        data: userInfo.phone,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_PHONE_PAGE
      },
      {
        title: '修改密码',
        data: "",
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_PASSWORD_PAGE
      },
    ];

    const eduBgList = [
      {
        title: '毕业院校',
        data: userInfo.gradutionSchool,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_AVATAR_PAGE
      },

    ];

    const contactList = [
      {
        title: '微信',
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_AVATAR_PAGE
      },
      {
        title: 'QQ',
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_AVATAR_PAGE
      },

    ];

    const socialLinkList = [
      {
        title: 'Github',
        data: userInfo.github,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_AVATAR_PAGE
      },
      {
        title: 'Gitee',
        data: userInfo.gitee,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_AVATAR_PAGE
      },
      {
        title: 'Dribbble',
        data: userInfo.dribbble,
        routeTo: RouteConst.user.USER_PROFILE_MODIFY_AVATAR_PAGE
      },

    ];
    return (
      <View style={{position: "relative", flex: 1}}>

        <View style={{
          position: "absolute",
          width: ScreenUtils.getScreenWidth(),
          top: 0,
          zIndex: 10
        }}>
          <NavigationBar title="编辑资料"
                         backLabelText={""}
                         backLabelTextStyle={{color: "#000"}}
                         backLabelIcon={<Icon source={require('beeshell/dist/common/images/icons/angle-left.png')}
                                              tintColor={"#000"} size={20}/>}
                         style={{
                           backgroundColor: '#fff',
                           paddingTop: 30,
                         }}
                         onPressBack={() => {
                           this.props.navigation.goBack();
                         }}/>
        </View>

        <ALPageContainer paddingTop={70} >

          <WingBlank>
            <View style={{marginTop: 20}}>
              <ALText hNum={2}>基本资料</ALText>
            </View>

            <View>
              {
                baseInfoList.map((item, index) => {
                  return (
                    <ALListItem
                      key={index}
                      onPress={() => {
                        this.props.navigation.navigate(item.routeTo);
                      }}
                      renderLeft={
                        <Flex>
                          <ALText hNum={4} color={"#666"} style={{width: 120}}>{item.title}</ALText>
                          {
                            item.title === "头像" ?
                              <ALImage src={item.data} round size={40} /> :
                              <ALText hNum={4} color={"#666"}>{item.data}</ALText>
                          }
                        </Flex>
                      }
                      centerText={''}
                      renderRight={
                        <Icon source={require('beeshell/dist/common/images/icons/angle-right.png')} size={16} tintColor='#ccc'/>
                      }
                      showBottomLine={index !== baseInfoList.length -1}
                    />
                  )
                })
              }
            </View>

          </WingBlank>

          <ALPlaceView height={10} style={{backgroundColor: "#f8f8f8"}} />

          {/*教育背景*/}
          <WingBlank>
            <View style={{marginTop: 30}}>
              <ALText hNum={2}>教育背景</ALText>
            </View>

            <View>
              <WhiteSpace/>

              {
                eduBgList.map((item, index) => {
                  return (
                    <ALListItem
                      key={index}
                      onPress={() => {
                        this.props.navigation.navigate(item.routeTo);
                      }}
                      renderLeft={
                        <Flex>
                          <ALText hNum={4} color={"#666"} style={{width: 120}}>{item.title}</ALText>
                          <ALText hNum={4} color={"#666"}>{item.data}</ALText>
                        </Flex>
                      }
                      centerText={''}
                      renderRight={
                        <Icon source={require('beeshell/dist/common/images/icons/angle-right.png')} size={16} tintColor='#ccc'/>
                      }
                      showBottomLine={index !== eduBgList.length -1}
                    />
                  )
                })
              }
            </View>

          </WingBlank>

          <ALPlaceView height={10} style={{backgroundColor: "#f8f8f8"}} />

          {/*联系方式*/}
          <WingBlank>
            <View style={{marginTop: 30}}>
              <ALText hNum={2}>联系方式</ALText>
            </View>

            <View>
              <WhiteSpace/>

              {
                contactList.map((item, index) => {
                  return (
                    <ALListItem
                      key={index}
                      onPress={() => {
                        this.props.navigation.navigate(item.routeTo);
                      }}
                      renderLeft={
                        <Flex>
                          <ALText hNum={4} color={"#666"} style={{width: 120}}>{item.title}</ALText>
                          <ALText hNum={4} color={"#666"}>{item.data}</ALText>
                        </Flex>
                      }
                      centerText={''}
                      renderRight={
                        <Icon source={require('beeshell/dist/common/images/icons/angle-right.png')} size={16} tintColor='#ccc'/>
                      }
                      showBottomLine={index !== contactList.length -1}
                    />
                  )
                })
              }
            </View>

          </WingBlank>

          <ALPlaceView height={10} style={{backgroundColor: "#f8f8f8"}} />

          {/*社交链接*/}
          <WingBlank>
            <View style={{marginTop: 30}}>
              <ALText hNum={2}>社交链接</ALText>
            </View>

            <View>
              <WhiteSpace/>

              {
                socialLinkList.map((item, index) => {
                  return (
                    <ALListItem
                      key={index}
                      onPress={() => {
                        this.props.navigation.navigate(item.routeTo);
                      }}
                      renderLeft={
                        <Flex>
                          <ALText hNum={4} color={"#666"} style={{width: 120}}>{item.title}</ALText>
                          <ALText hNum={4} color={"#666"}>{item.data}</ALText>
                        </Flex>
                      }
                      centerText={''}
                      renderRight={
                        <Icon source={require('beeshell/dist/common/images/icons/angle-right.png')} size={16} tintColor='#ccc'/>
                      }
                      showBottomLine={index !== socialLinkList.length -1}
                    />
                  )
                })
              }
            </View>

          </WingBlank>

        </ALPageContainer>
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
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo(data) {
      let action = {
        type: ActionTypes.UPDATE_USERINFO,
        value: data,
      };
      dispatch(action);
    },
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);

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
