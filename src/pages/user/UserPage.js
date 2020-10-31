import React from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions, ToastAndroid} from 'react-native';
import styles from '../../style/styles';
import CountBox from './component/CountBox';
import IconTextBox from './component/IconTextBox';
import ShowWorkBox from './component/ShowWorkBox';
import ALDivider from '../../components/al-components/al-divider/ALDivider';
import {request} from '../../utils/network/AxiosRequest';
import {Button, Flex, WhiteSpace, WingBlank} from '@ant-design/react-native';
import RouteConst from '../../router/RouteConst';
import {connect} from 'react-redux';
import {ALImage, ALPlaceView} from '../../components/al-components/ALComponent';
import ScreenUtils from '../../utils/ScreenUtils';
import ALText from '../../components/al-components/al-text/ALText';
import {Icon, Button as MTButton} from 'beeshell';
import ALTabs from '../../components/al-components/al-tabs/ALTabs';
import SwipeTab1 from './component/SwipeTab1';
import SwipeTab2 from './component/SwipeTab2';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

class UserPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      countData: [
        {
          count: 32,
          text: '作品',
        },
        {
          count: 58,
          text: '关注',
        },
        {
          count: 8560,
          text: '粉丝',
        },
        {
          count: 233,
          text: '热力值',
        },
      ],
      iconTextData: [
        {
          icon: require('../../assets/icon/user/shoucang.png'),
          text: '我收藏的',
        },
        {
          icon: require('../../assets/icon/user/xiaoxi.png'),
          text: '我的评论',
        },
        {
          icon: require('../../assets/icon/user/dianzan.png'),
          text: '点赞',
        },
      ],
      workData: [
        {
          url: require('../../assets/image/user/poster1.png'),
          title: 'UI中国手机客户端原创设计',
          like: 12,
          comment: 32,
        },
        {
          url: require('../../assets/image/user/poster2.png'),
          title: '「汉学」文学工具产品的视觉与体验碰撞',
          like: 43,
          comment: 2432,
        },
        {
          url: require('../../assets/image/user/poster3.png'),
          title: '【顷刻】_视听解说APP',
          like: 123,
          comment: 5452,
        },
        {
          url: require('../../assets/image/user/poster4.png'),
          title: '拼多多APP REDESIGN',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/user/poster5.png'),
          title: 'Redesign《在外》APP ',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/user/poster6.png'),
          title: '植物类社交APP概念设计',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/user/poster7.png'),
          title: '优灵APP改版 - 帮助你发现优秀产品和设计灵感',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/user/poster8.png'),
          title: '晓知新闻APP',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/user/poster9.png'),
          title: '微信Redesign（重设计）',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../assets/image/user/poster10.png'),
          title: '生活家 - APP视觉设计',
          like: 123,
          comment: 362,
        },
      ],
      isLogin: false,
    };
  }

  // 渲染函数
  render() {
    const {userInfo, countData, iconTextData, workData} = this.state;

    const {isLogin} = this.props;

    const unLoginView = (
      <View style={[styles.alFlexCenter, styles.alFlexRow, styles.alFlexSpaceEvenly]}>
        <Button onPress={() => {
          this.props.navigation.push(RouteConst.LOGIN_PAGE);
        }}>登录</Button>
        <Button onPress={() => {
          this.props.navigation.push(RouteConst.REGISTER_PAGE);
        }}>注册</Button>
      </View>
    );

    const tabs = [
      {key: 'tab1', title: '作品'},
      {key: 'tab2', title: '收藏'},
      {key: 'tab3', title: '点赞'},
    ];

    const sceneMap = {
      tab1: () => <SwipeTab1 {...this.props} />,
      tab2: () => <SwipeTab2 {...this.props} />,
      tab3: () => <SwipeTab2 {...this.props} />,
    };

    if (!isLogin) {
      return unLoginView;
    } else {
      return (
        userInfo === null ?
          (
            <View style={styles.alFlexCenter}><Text>无数据</Text></View>
          )
          :
          <ScrollView style={{
            backgroundColor: '#fff',
            position: 'relative',
          }}>

            <View>
              <ALImage src={require('../../assets/image/user/bg.jpg')}/>
            </View>

            <View style={{position: 'absolute', top: 16, width: ScreenUtils.getScreenWidth()}}>
              <Flex style={[styles.alPadding20]} justify="between">
                <Text></Text>
                <Text onPress={() => {
                  this.props.navigation.navigate(RouteConst.USER_SETTING_PAGE);
                }} style={{color: '#fff'}}>设置</Text>
              </Flex>
            </View>


            <WingBlank>
              <View>
                <Flex style={styles.alPaddingTB20}>
                  <ALImage round src={userInfo.avatar} size={90}/>
                  <Flex.Item style={{marginLeft: 20}}>
                    <Flex direction={'column'} justify={'center'}>
                      <ALText style={{alignSelf: 'stretch'}} hNum={2}>{userInfo.nickname}</ALText>
                      <WhiteSpace />
                      <ALText type={'desc'} style={{alignSelf: 'stretch'}}>{userInfo.sign}</ALText>
                    </Flex>
                  </Flex.Item>
                  <Button style={{borderWidth: 0}} type="ghost" onPress={() => {
                    this.props.navigation.navigate(RouteConst.USER_PROFILE_PAGE)
                  }}>
                    <Icon source={require('beeshell/dist/common/images/icons/angle-right.png')}
                          size={14}
                          tintColor='#bababa'/>
                  </Button>
                </Flex>
              </View>
            </WingBlank>

            {/*统计数据*/}
            <View style={[localStyle.countBoxStyle]}>
              {
                countData.map((item, index) => {
                  return <CountBox key={item.text}
                                   count={item.count}
                                   text={item.text}/>;
                })
              }
            </View>

            {/*收藏、评论、点赞*/}
            <View style={[localStyle.countBoxStyle]}>
              {
                iconTextData.map((item, index) => {
                  return <IconTextBox key={item.text} icon={item.icon} text={item.text}/>;
                })
              }
            </View>

            {/*分割线*/}
            <View style={styles.alMarginBottom20}>
              <ALDivider/>
            </View>

            {/*tab标题栏*/}
            <View style={{width: ScreenUtils.getScreenWidth()}}>
              <ALTabs
                tabs={tabs}
                sceneMap={sceneMap}
                tabBarStyle={localStyle.tabBarStyle} />

            </View>


          </ScrollView>
      );
    }

  }


  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.getMockData();

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  getMockData = () => {
    let url = React.mockPath + '/user.json';

    request({
      url: url,
      method: 'GET',
      data: {},
    }).then(res => {
      console.log(res.data);
      this.setState({
        userInfo: res.data.data,
      });

      this.props.updateUserInfo(res.data.data);

    }).catch(err => {
      console.log(err);
    });
  };


}

const localStyle = StyleSheet.create({

  countBoxStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  colorGray: {
    color: '#999',
  },

  tabBarStyle:{
    backgroundColor: "#00000000"
  }
});


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

    updateUserInfo(data) {
      let action = {
        type: 'updateUserInfo',
        value: data,
      };
      dispatch(action);
    },
  };

};


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
