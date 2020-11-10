import React from 'react';
import {View, StyleSheet} from 'react-native';
import ALPageContainer from '../../components/al-components/al-page-container/ALPageContainer';
import ScreenUtils from '../../utils/ScreenUtils';
import ALTabs from '../../components/al-components/al-tabs/ALTabs';
import {Flex, WingBlank} from '@ant-design/react-native';
import {ALDivider, ALImage, ALPlaceView, ALTapView} from '../../components/al-components/ALComponent';
import IconTextBox from '../../components/common/icon-text-box/IconTextBox';
import ALEmpty from '../../components/al-components/al-empty/ALEmpty';
import ALText from '../../components/al-components/al-text/ALText';
import RouteConst from '../../router/RouteConst';

function MessageRow(props){
  const {data} = props;
  return (
    <Flex>
      <ALImage src={data.avatar} size={56} round />

      <Flex direction="column"
            align="start"
            style={{flex: 1, marginLeft: 10}}
            onPress={props.onPress}>
        <Flex justify="between" style={{alignSelf: "stretch"}}>
          <ALText hNum={3}>{data.nickname}</ALText>
          <ALText type="desc" style={{fontSize: 10}} color={"#aaa"}>{data.sendTime}</ALText>
        </Flex>

        <ALPlaceView height={8} />

        <ALText row={1} type="desc" style={{fontSize: 13}}>{data.message}</ALText>
      </Flex>
    </Flex>
  )
}

function NoticePage(props) {
  const iconTextList = [
    {
      icon: require('../../assets/icon/icon1/like_round.png'),
      text: "点赞",
      shadowColor: "#ffeeee"
    },
    {
      icon: require('../../assets/icon/icon1/comment_round.png'),
      text: "评论",
      shadowColor: "#e2f1ff"
    },
    {
      icon: require('../../assets/icon/icon1/favor_round.png'),
      text: "收藏",
      shadowColor: "#fffae2"
    },
    {
      icon: require('../../assets/icon/icon1/fans_round.png'),
      text: "粉丝",
      shadowColor: "#e8e2ff"
    }
  ];

  const data = {
    userId: 2,
    avatar: require('../../assets/icon/icon1/notice.png'),
    nickname: "系统通知",
    message: "",
    sendTime: "2020-11-07"
  };

  return (
    <ALPageContainer paddingTop={20}>
      <Flex>
        {
          iconTextList.map((item, index) => {
            return (
              <IconTextBox key={index}
                           icon={item.icon}
                           text={item.text}
                           iconSize={48}/>
            )
          })
        }
      </Flex>

      <WingBlank>
        <ALPlaceView height={20} />
        <MessageRow data={data} />
      </WingBlank>

    </ALPageContainer>
  );
}

function ChatPage(props) {
  const messageList = [
    {
      userId: 2,
      avatar: require('../../assets/image/other/avatar/avatar2.jpg'),
      nickname: "微光",
      message: "我很喜欢你的这个UI作品，太棒了！",
      sendTime: "2020-11-07"
    }
  ];

  return (
    <ALPageContainer>
      {
        messageList.length > 0 ?
          (
            <View>
              {
                messageList.map((item, index) => {
                  return (
                    <View key={index} style={{paddingLeft: 20, paddingRight: 20}}>
                      <MessageRow data={item} onPress={() => {
                        props.navigation.navigate(RouteConst.message.CHAT_SESSION_PAGE, {data: item})
                      }} />
                      <ALDivider marginTop={10} marginLeft={66} />
                    </View>
                  )
                })
              }
            </View>
          ):
          <ALEmpty />
      }
    </ALPageContainer>
  );
}



class MessagePage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'notation', title: '通知'},
        {key: 'chat', title: '私信'},
      ],
    };
  }

  // 渲染函数
  render() {
    const tabs = [
      {key: 'notation', title: '通知'},
      {key: 'chat', title: '私信'},

    ];

    const sceneMap = {
      notation: () => <NoticePage {...this.props}/>,
      chat: () => <ChatPage {...this.props}/>,
    };



    return (
      <ALPageContainer scroll={false}>

        <View style={{width: ScreenUtils.getScreenWidth(), height: ScreenUtils.getScreenHeight()}}>
          <ALTabs
            tabs={tabs}
            sceneMap={sceneMap}
            tabBarStyle={localStyle.tabBarStyle}
            labelStyle={{fontSize: 18}}
            borderStyle={{backgroundColor: '#00000000'}}/>

          <ALPlaceView height={200}/>

        </View>

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


export default MessagePage;

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
  tabBarStyle: {
    width: 160,
    backgroundColor: '#00000000',
  },
  iconTextBoxStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  iconTextBoxTextStyle: {
    fontSize: 12,
    marginTop: 6
  }
});
