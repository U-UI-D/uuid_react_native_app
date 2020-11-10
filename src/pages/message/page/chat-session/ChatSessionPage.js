import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TextInput, ScrollView} from 'react-native';
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {Flex, WingBlank} from '@ant-design/react-native';
import {Button, Icon, Input} from 'beeshell';
import ScreenUtils from '../../../../utils/ScreenUtils';
import styles from '../../../../style/styles';
import {ALImage} from '../../../../components/al-components/ALComponent';
import ALText from '../../../../components/al-components/al-text/ALText';
import connect from 'react-redux/lib/connect/connect';
import Actions from '../../../../store/actions';

class ChatSessionPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messageList: [],
    };
  }

  // 渲染函数
  render() {
    const props = this.props;
    const {params} = this.props.route;
    const {userInfo} = this.props;
    return (
      <View style={localStyle.page}>
        {/*导航栏*/}
        <View style={localStyle.navBar}>
          <Flex justify="between">
            <Flex style={{flex: 1}} align="center" onPress={() => {
              props.navigation.goBack();
            }}>
              <Icon source={require('beeshell/dist/common/images/icons/angle-left.png')} size={20} tintColor={'#000'}/>
            </Flex>

            <Flex style={{flex: 1}} align="center" justify="center">
              <Text>{params.data.nickname}</Text>
            </Flex>

            <Flex style={{flex: 1}} align="center">
              <Text></Text>
            </Flex>
          </Flex>
        </View>

        <ScrollView style={localStyle.msgContentBox}>
          <WingBlank>

            {
              this.state.messageList.map((item, index) => {
                return(
                  <Flex key={index}
                        direction={item.userId === userInfo.id ? "row-reverse" : "row"}
                        style={{paddingBottom: 10}}>
                    <ALImage src={item.avatar} size={40} round/>

                    <View style={item.userId === userInfo.id ? localStyle.msgBoxRight : localStyle.msgBoxLeft}>
                      <ALText color={'#fff'} style={{fontSize: 13}}>{item.message}</ALText>
                    </View>
                  </Flex>
                )
              })
            }
          </WingBlank>
        </ScrollView>


        <View style={localStyle.inputBox}>
          <Flex>
            <TextInput placeholder="在这里输入消息内容···"
                       style={{flex: 1}}
                       defaultValue={this.state.message}
                       value={this.state.message}
                       onChangeText={this.handleChangeForInput}/>
            <Button size="sm" type="info"
                    style={{borderRadius: 999}}
                    onPress={this.sendMessage}
            >发送</Button>
          </Flex>
        </View>

      </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

    // console.log('data', this.props.route.params.data);
    this.initMessageList();

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  // 初始化消息列表
  initMessageList = () => {
    let initMessageList = this.state.messageList;
    initMessageList.push(this.props.route.params.data);
    this.setState({
      messageList: initMessageList,
    });
  }

  // 发送消息
  sendMessage = () => {
    const {message, messageList} = this.state;
    if (message.length === 0){
      return ;
    }
    const {userInfo} = this.props;
    let newMessageList = messageList;
    let msgObj = {
      userId: userInfo.id,
      avatar: userInfo.avatar,
      message: this.state.message,
      sendTime: new Date().toLocaleTimeString()
    }
    newMessageList.push(msgObj)

    this.setState({
      messageList: newMessageList,
      message: "",
    });
  }

  // 监听输入框的变化
  handleChangeForInput = (val) => {
    console.log(val);
    this.setState({message: val});
  };

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
        type: Actions.UPDATE_USERINFO,
        value: data,
      };
      dispatch(action);
    },
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(ChatSessionPage);

// 样式
const localStyle = StyleSheet.create({
  page:{
    width: ScreenUtils.getScreenWidth(),
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  navBar: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 10
  },
  textColorBlue: {
    color: 'blue',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgBoxLeft: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#82beff',
    borderRadius: 999,
    padding: 10,
  },
  msgBoxRight: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#6de2b1',
    borderRadius: 999,
    padding: 10,
  },
  msgContentBox: {
    paddingTop: 10,
    paddingBottom: 10
  },
  inputBox: {
    position: 'absolute',
    bottom: 10,
    width: ScreenUtils.getScreenWidth(),
    paddingLeft: 20,
    paddingRight: 20
  },
});
