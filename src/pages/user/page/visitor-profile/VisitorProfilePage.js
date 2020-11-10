import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Flex, WhiteSpace, WingBlank} from '@ant-design/react-native';
import {Button, Icon} from 'beeshell';
import ScreenUtils from '../../../../utils/ScreenUtils';
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import ALLoading from '../../../../components/al-components/al-loading/ALLoading';
import ALImage from '../../../../components/al-components/al-image/ALImage';
import ALText from '../../../../components/al-components/al-text/ALText';
import ALPlaceView from '../../../../components/al-components/al-place-view/ALPlaceView';
import ALDivider from '../../../../components/al-components/al-divider/ALDivider';
import ALTapView from '../../../../components/al-components/al-tap-view/ALTapView';
import {request} from '../../../../utils/network/AxiosRequest';
import styles from '../../../../style/styles';

//作品详情页
class VisitorProfilePage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      offsetTop: 0,
      favored: false,
      liked: false,
      followed: false,

      otherWorkData: [
        {
          url: require('../../../../assets/image/user/poster1.png'),
          title: 'UI中国手机客户端原创设计',
          like: 12,
          comment: 32,
        },
        {
          url: require('../../../../assets/image/user/poster2.png'),
          title: '「汉学」文学工具产品的视觉与体验碰撞',
          like: 43,
          comment: 2432,
        },
        {
          url: require('../../../../assets/image/user/poster3.png'),
          title: '【顷刻】_视听解说APP',
          like: 123,
          comment: 5452,
        },
        {
          url: require('../../../../assets/image/user/poster4.png'),
          title: '拼多多APP REDESIGN',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../../assets/image/user/poster5.png'),
          title: 'Redesign《在外》APP ',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../../assets/image/user/poster6.png'),
          title: '植物类社交APP概念设计',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../../assets/image/user/poster7.png'),
          title: '优灵APP改版 - 帮助你发现优秀产品和设计灵感',
          like: 123,
          comment: 362,
        },
      ],
    };
  }


  onScroll = (event) => {
    let {x, y} = event.nativeEvent.contentOffset;

    if (y < 400) {
      // console.log('x', x, 'y', y);
      this.setState({
        offsetTop: Math.floor(y),
      });
    }
  };


  // 渲染函数
  render() {
    const userInfo = this.state.userInfo;

    return (
      userInfo === null ? <ALLoading/> :

        <View style={{
          width: ScreenUtils.getScreenWidth(),
          position: 'relative',
          flex: 1,
        }}>

          <ALPageContainer paddingTop={0} onScroll={this.onScroll}>

            {/*顶部封面*/}
            <View>
              <ALImage src={userInfo.avatar}/>
            </View>

            {/*作品详情*/}
            <View style={[localStyle.detailBox]}>

              <WingBlank>
                <View>

                  {/*作者信息*/}
                  <Flex align="center" justify="between">

                    <Flex align="center">
                      <ALImage src={userInfo.avatar} round size={40}/>
                      <Flex direction={'column'}>
                        <ALText style={{marginLeft: 10, alignSelf: 'flex-start'}}>{userInfo.nickname}</ALText>
                        <ALText type={'desc'} size={12} style={{marginLeft: 10, alignSelf: 'flex-start', fontSize: 12}}>
                          广州 | UI设计师
                        </ALText>
                      </Flex>
                    </Flex>

                    <Button size="sm" type={this.state.followed ? 'info' : 'default'}
                            style={[styles.alBorderCapsule, {height: 26, width: 60, paddingLeft: 10, paddingRight: 10}]}
                            onPress={() => {
                              this.setState({
                                followed: !this.state.followed,
                              });
                            }}>
                      {
                        this.state.followed ? (<ALText style={{fontSize: 12}} color="#fff">已关注</ALText>) : (
                          <ALText style={{fontSize: 12}} color="#ccc">+关注</ALText>)
                      }
                    </Button>

                  </Flex>

                  <WhiteSpace/>

                </View>

              </WingBlank>


              <ALDivider marginTop={20} marginBottom={20}/>


              {/*其他作品*/}
              <View>
                <WingBlank>
                  <ALText hNum={3} style={{marginTop: 20}}>其他作品</ALText>
                </WingBlank>

                <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{paddingLeft: 10, paddingRight: 10}}>
                  {
                    this.state.otherWorkData.map((item, index) => {
                      return (
                        <View key={index} style={{padding: 10}}>
                          <ALImage src={item.url} width={180} height={120} radius={20}/>
                        </View>
                      );
                    })
                  }
                  <ALPlaceView width={10}/>
                </ScrollView>
              </View>
            </View>

            <ALPlaceView height={80}/>


          </ALPageContainer>

          {/*固定在顶部的导航栏*/}
          <Flex justify="between" style={[
            localStyle.topBar,
            {
              backgroundColor: this.state.offsetTop > 100 ? '#fff' : '#00000000',
            },
          ]}>
            <Text style={{color: this.state.offsetTop > 100 ? '#000' : '#fff'}}
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}>
              返回
            </Text>
            {
              this.state.offsetTop > 100 ?
                <ALText type={'title'}
                        hNum={3}
                        style={{color: this.state.offsetTop > 100 ? '#000' : '#fff'}}>
                  {userInfo.title}
                </ALText> : null
            }
            <Text></Text>
          </Flex>

          {/*固定在底部的导航栏*/}
          <Flex justify="between" style={localStyle.bottomBar}>

            <Button type={this.state.liked ? 'info' : 'default'}
                    size="sm"
                    style={[styles.alBorderCapsule]}
                    onPress={() => {
                      this.setState({liked: !this.state.liked});
                    }}>
              私信
            </Button>

          </Flex>

        </View>

    );
  }


  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    console.log('VisitorProfilePage.js======================');
    // console.log(this.props.route.params.userInfo);
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


export default VisitorProfilePage;

// 样式
const localStyle = StyleSheet.create({
  detailBox: {
    backgroundColor: '#fff',
    paddingTop: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -50,
  },
  followBox: {
    padding: 8,
    width: 80,
    textAlign: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#409EFF',
  },
  followText: {
    textAlign: 'center',
    color: '#409EFF',
  },
  topBar: {
    position: 'absolute',
    zIndex: 1000,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 36,
    paddingBottom: 10,
    backgroundColor: '#fff',
    color: '#fff',
    width: ScreenUtils.getScreenWidth(),
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    paddingLeft: 20,
    paddingRight: 20,
    height: 54,
    bottom: 0,
    backgroundColor: '#fff',
    color: '#000',
    width: ScreenUtils.getScreenWidth(),
  },
  iconCountText: {
    color: '#cdcdcd',
    fontSize: 12,
    marginLeft: 6,
  },
});
