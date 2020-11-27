import React from 'react';
import {View, ScrollView, StyleSheet, Dimensions, PermissionsAndroid} from 'react-native';
import styles from '../../style/styles';
import CountBox from './component/CountBox';
import ALDivider from '../../components/al-components/al-divider/ALDivider';
import {Button, Flex, ImagePicker, WhiteSpace, WingBlank} from '@ant-design/react-native';
import RouteConst from '../../router/RouteConst';
import {connect} from 'react-redux';
import {ALImage, ALPlaceView, ALTapView} from '../../components/al-components/ALComponent';
import ScreenUtils from '../../utils/ScreenUtils';
import ALText from '../../components/al-components/al-text/ALText';
import {Icon} from 'beeshell';
import ALTabs from '../../components/al-components/al-tabs/ALTabs';
import WorkTab from './component/WorkTab';
import FavorTab from './component/FavorTab';
import ALLoading from '../../components/al-components/al-loading/ALLoading';
import {HttpRequest} from '../../utils/network/AxiosRequest';
import {ApiConst} from '../../utils/network/ApiConst';
import LikeTab from './component/LikeTab';
import CameraRoll from '@react-native-community/cameraroll';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


class UserPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      countData: [],
      iconTextData: [
        {
          icon: require('../../assets/icon/icon1/favor.png'),
          text: '我收藏的',
        },
        {
          icon: require('../../assets/icon/icon1/comment.png'),
          text: '我的评论',
        },
        {
          icon: require('../../assets/icon/icon1/like.png'),
          text: '点赞',
        },
      ],
      enableSubScroll: false,
      scrollY: 0,
      uiWorkList: [],
      workCount: 0,
      followCount: 0,
      fansCount: 0,
      photos: []
    };
  }

  onScroll = (event) => {
    let {x, y} = event.nativeEvent.contentOffset;
    // console.log(y);
    this.setState({
      enableSubScroll: Math.floor(y) > 435,
      scrollY: y,
    });
  };

  // 渲染函数
  render() {
    const {countData, iconTextData, workData} = this.state;

    const {userInfo, isLogin} = this.props;

    const unLoginView = (
      <View style={[styles.alFlexCenter, styles.alFlexRow, styles.alFlexSpaceEvenly]}>
        <Button onPress={() => {
          this.props.navigation.push(RouteConst.user.LOGIN_PAGE);
        }}>登录</Button>
        <Button onPress={() => {
          this.props.navigation.push(RouteConst.user.REGISTER_PAGE);
        }}>注册</Button>
      </View>
    );

    const tabs = [
      {key: 'WorkTab', title: '作品', scene: <WorkTab {...this.props} enableScroll={this.state.enableSubScroll}/>},
      {key: 'FavorTab', title: '收藏', scene: <FavorTab {...this.props} />},
      {key: 'LikeTab', title: '点赞', scene: <LikeTab {...this.props} />},
    ];


    if (!isLogin) {
      return unLoginView;
    } else {
      return (
        userInfo === null ?
          <ALLoading/>
          :
          <View style={{backgroundColor: "#fff"}}>

            {/*背景图片*/}
            <View style={{
              position: "absolute",
              top: 0,
              zIndex: 1
            }}>
              <ALImage src={require('../../assets/image/user/bg.jpg')} height={220}/>
            </View>

            <ScrollView stickyHeaderIndices={[6]}
                        onScroll={this.onScroll}
                        showsVerticalScrollIndicator={false}
                        style={{
                          backgroundColor: '#00000000',
                          position: 'relative',
                          zIndex: 10,

                        }}>
              <ALPlaceView height={220} style={{
                backgroundColor: `rgba(0, 0, 0, ${0.0022 * this.state.scrollY})`
              }} />

              <View style={{position: 'absolute', top: 16, width: ScreenUtils.getScreenWidth()}}>
                <Flex style={[styles.alPadding20]} justify="flex-end">


                  <Icon source={require('../../assets/icon/icon1/image.png')} size={28} tintColor={"#fff"}/>

                  <ALPlaceView width={20} />

                  <ALTapView onPress={() => {
                    this.props.navigation.navigate(RouteConst.user.USER_SETTING_PAGE);
                  }}>
                    <Icon source={require('../../assets/icon/icon1/setting.png')}
                          size={26} tintColor={"#fff"}/>
                  </ALTapView>

                </Flex>
              </View>


              <View style={{backgroundColor: "#fff"}}>

                {/*用户头像、昵称*/}
                <WingBlank>
                  <View>
                    <Flex style={styles.alPaddingTB20}>
                      <ALImage round src={userInfo.avatar} size={90}/>
                      <Flex.Item style={{marginLeft: 20}}>
                        <Flex direction={'column'} justify={'center'}>
                          <ALText style={{alignSelf: 'stretch'}} hNum={2}>{userInfo.nickname}</ALText>
                          <WhiteSpace/>
                          <ALText type={'desc'} style={{alignSelf: 'stretch'}}>{userInfo.sign}</ALText>
                        </Flex>
                      </Flex.Item>
                      <Button style={{borderWidth: 0}} type="ghost" onPress={() => {
                        this.props.navigation.navigate(RouteConst.user.USER_PROFILE_PAGE);
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
                      return (
                        <ALTapView style={{flex: 1}} key={index} onPress={() => {
                          if (item.route){
                            this.props.navigation.push(item.route, {userId: this.props.userInfo.id})
                          }
                        }}>
                          <CountBox count={item.count} text={item.text}/>
                        </ALTapView>
                      );
                    })
                  }
                </View>

                {/*分割线*/}
                <View style={styles.alMarginTop20}>
                  <ALDivider/>
                </View>

                <View>
                  {/*tab标题栏*/}
                  <View style={{width: ScreenUtils.getScreenWidth(), height: ScreenUtils.getScreenHeight()}}>
                    <ALTabs
                      tabs={tabs}
                      useSceneMap={false}
                      tabBarStyle={localStyle.tabBarStyle}
                      labelStyle={{fontSize: 18}}
                      borderStyle={{backgroundColor: '#00000000'}}/>
                  </View>
                </View>
              </View>


            </ScrollView>
          </View>
      );
    }

  }


  // 生命周期函数
  //组件已挂载
  async componentDidMount() {

    const {isLogin} = this.props;
    if (isLogin){
      this.getUIWorkListByUserId(this.props.userInfo.id);
      this.setCountData();
      this.getCountDataByUserId();
    }

    await this.requestReadExteralStorage();

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  getUIWorkListByUserId = (userId) => {
    HttpRequest.get({
      url: ApiConst.work.ui.GET_WORK_UI_BY_USER_ID + userId
    }).then(res => {
      // console.log("getUIWorkListByUserId", res);
      this.setState({
        uiWorkList: res.data.data.list
      });
    })
  }

  getCountDataByUserId = (userId=this.props.userInfo.id) => {
    HttpRequest.get({
      url: 'http://192.168.43.83:9001/userdata/count/uid/' + userId,
    }).then(res => {

      console.log(res);
      this.setState({
        workCount: res.data.data.workCount,
        followCount: res.data.data.followCount,
        fansCount: res.data.data.fansCount,
      }, () => {
        this.setCountData();
      });
    })
  }

  setCountData = () => {
    const {workCount, followCount, fansCount} = this.state;
    let countData = [
      {
        count: workCount,
        text: '作品',
      },
      {
        count: followCount,
        text: '关注',
        route: RouteConst.user.FOLLOW_PAGE
      },
      {
        count: fansCount,
        text: '粉丝',
        route: RouteConst.user.FANS_PAGE
      },
      {
        count: 233,
        text: '热力值',
      },
    ];

    this.setState({countData});

  }

  async requestReadExteralStorage() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            'title': 'Permission To Load Photos From External Storage',
            'message': 'Permissions have to be granted in order to list photos on your phones for you to choose.'
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        } else {
          console.log("READ_EXTERNAL_STORAGE permission denied!")
        }
      } catch (err) {
        console.warn(err)
      }
    }
  }

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

  tabBarStyle: {
    width: 200,
    paddingTop: 30,
    backgroundColor: '#00000000',
  },
});


const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    userInfo: state.userInfo,
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
