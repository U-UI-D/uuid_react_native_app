import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import ALPageContainer from '../../../components/al-components/al-page-container/ALPageContainer';
import {Button, Flex, WhiteSpace, WingBlank} from '@ant-design/react-native';
import {Icon} from 'beeshell';
import styles from '../../../style/styles';
import ALText from '../../../components/al-components/al-text/ALText';
import ALListItem from '../../../components/al-components/al-list/al-list-item/ALListItem';
import {PATH_APP_CONTAINER} from '../../../router/RouterConst';

class UserProfilePage extends React.Component{

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
            <ALText hNum={2}>个人信息</ALText>
          </View>

          <View>
            <WhiteSpace />

            <ALListItem
              renderLeft={
                <ALText hNum={4}>头像</ALText>
              } centerText={''} rightText={''}/>

            <ALListItem
              renderLeft={
                <ALText hNum={4}>用户昵称</ALText>
              } centerText={''} rightText={''}/>

            <ALListItem
              renderLeft={
                <ALText hNum={4}>个性签名</ALText>
              } centerText={''} rightText={''}/>
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
    color: "blue"
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
