import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {WhiteSpace, WingBlank} from '@ant-design/react-native';
import {Icon} from 'beeshell';
import ALText from '../../../../components/al-components/al-text/ALText';
import ALListItem from '../../../../components/al-components/al-list/al-list-item/ALListItem';
import RouteConst from '../../../../router/RouteConst';

class UserProfilePage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染函数
  render() {

    const listConfig = [
      {
        title: '头像',
        routeTo: RouteConst.USER_PROFILE_MODIFY_AVATAR_PAGE
      },
      {
        title: '用户昵称',
        routeTo: RouteConst.USER_PROFILE_MODIFY_NICKNAME_PAGE
      },
      {
        title: '个性签名',
        routeTo: RouteConst.USER_PROFILE_MODIFY_SIGNATURE_PAGE
      },
      {
        title: '手机号',
        routeTo: RouteConst.USER_PROFILE_MODIFY_PHONE_PAGE
      },
      {
        title: '修改密码',
        routeTo: RouteConst.USER_PROFILE_MODIFY_PASSWORD_PAGE
      },
    ];

    return (
      <ALPageContainer showNavBar navBar={{title: ''}}
                       onPressLeft={() => {
                         this.props.navigation.goBack();
                       }}>
        <WingBlank>

          <View>
            <ALText hNum={2}>个人信息</ALText>
          </View>

          <View>
            <WhiteSpace/>

            {
              listConfig.map((item, index) => {
                return (
                  <ALListItem
                    key={index}
                    onPress={() => {
                      this.props.navigation.navigate(item.routeTo);
                    }}
                    renderLeft={
                      <ALText hNum={4}>{item.title}</ALText>
                    }
                    centerText={''}
                    renderRight={
                      <Icon source={require('beeshell/dist/common/images/icons/angle-right.png')} size={16} tintColor='#ccc'/>
                    }
                  />
                )
              })
            }
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


export default UserProfilePage;

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
