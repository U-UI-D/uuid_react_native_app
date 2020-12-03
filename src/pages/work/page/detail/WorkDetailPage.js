import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../../../../style/styles';
import ALPlaceView from '../../../../components/al-components/al-place-view/ALPlaceView';
import {HttpRequest} from '../../../../utils/network/AxiosRequest';
import {ALDivider, ALImage} from '../../../../components/al-components/ALComponent';
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {Flex, WhiteSpace, WingBlank} from '@ant-design/react-native';
import ScreenUtils from '../../../../utils/ScreenUtils';
import ALText from '../../../../components/al-components/al-text/ALText';
import {Button, Icon} from 'beeshell';
import ALTapView from '../../../../components/al-components/al-tap-view/ALTapView';
import RouteConst from '../../../../router/RouteConst';
import ALLoading from '../../../../components/al-components/al-loading/ALLoading';
import {ApiConst} from '../../../../utils/network/ApiConst';
import {connect} from 'react-redux';
import CommentList from './component/CommentList';
import {CommentContext} from './component/CommentContext';


//作品详情页
class WorkDetailPage extends React.Component {

  updateModeType = (modalType) => {
    this.setState({modalType: modalType})
  }

  updateModalVisible = (visible) => {
    this.setState({modalVisible: visible})
  }

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      workData: null,
      offsetTop: 0,
      favored: false,
      liked: false,
      followed: false,
      modalVisible: false,
      updateModalVisible: this.updateModalVisible,
      modalType: "comment",
      updateModeType: this.updateModeType,

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
        }
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
    const workData = this.state.workData;

    return (
      workData === null ? <ALLoading /> :

        <View style={{
          width: ScreenUtils.getScreenWidth(),
          position: 'relative',
          flex: 1,
        }}>

          <ALPageContainer backgroundColor={"#00000000"}
                           onScroll={this.onScroll}
                           style={{
                             zIndex: 10
                           }}>
            <ALPlaceView height={300} />

            {/*作品详情*/}
            <View style={[localStyle.detailBox]}>
              <WingBlank>
                <View>

                  {/*作者信息*/}
                  <Flex align="center" justify="between">

                    <Flex align="center">
                      <ALImage src={workData.avatar} round size={40}/>
                      <Flex direction={"column"}>
                        <ALText style={{marginLeft: 10, alignSelf: "flex-start"}}>{workData.nickname}</ALText>
                        <ALText type={"desc"} size={12} style={{marginLeft: 10, alignSelf: "flex-start", fontSize: 12}}>
                          广州 | UI设计师
                        </ALText>
                      </Flex>
                    </Flex>

                    {
                      workData.userId !== this.props.userInfo.id ? (
                        <Button size="sm" type={this.state.followed ? 'info' : 'default'}
                                style={[styles.alBorderCapsule, {height: 26, width: 60, paddingLeft: 10, paddingRight: 10}]}
                                onPress={() => {
                                  this.setState({
                                    followed: !this.state.followed
                                  })
                                }}>
                          {
                            this.state.followed ? (<ALText style={{fontSize: 12}} color="#fff">已关注</ALText>) : (<ALText style={{fontSize: 12}} color="#ccc">+关注</ALText>)
                          }
                        </Button>
                      ) : null
                    }

                  </Flex>

                  <ALPlaceView height={20} />

                  {/*作品标题*/}
                  <ALText hNum={2}>{workData.title}</ALText>

                  <ALPlaceView height={10} />

                  {/*标签*/}
                  <Flex>
                    {
                      workData.tagList.map((item, index) => {
                        return (
                          <ALText key={index} type={'desc'} color={'#000'}
                                  style={{marginRight: 10, fontSize: 12}}>
                            {item}
                          </ALText>
                        );
                      })
                    }
                  </Flex>

                  <WhiteSpace/>



                  <WhiteSpace />

                  <Flex justify="between">
                    <Flex>
                      <Flex style={{width: 60}}>
                        <Icon source={require('../../../../assets/icon/icon1/look.png')} size={13} tintColor={"#cdcdcd"} />
                        <Text style={localStyle.iconCountText}>{workData.lookCount}</Text>
                      </Flex>
                      <Flex style={{width: 60}}>
                        <Icon source={require('../../../../assets/icon/icon1/like.png')} size={16} tintColor={"#cdcdcd"} />
                        <Text style={localStyle.iconCountText}>{workData.likeCount}</Text>
                      </Flex>
                      <Flex style={{width: 60}}>
                        <Icon source={require('../../../../assets/icon/icon1/comment.png')} size={16} tintColor={"#cdcdcd"} />
                        <Text style={localStyle.iconCountText}>{workData.commentCount}</Text>
                      </Flex>
                    </Flex>

                    <Flex>
                      <ALText style={localStyle.iconCountText}>1小时前</ALText>
                    </Flex>
                  </Flex>
                </View>

              </WingBlank>


              <ALDivider marginTop={20} marginBottom={20} />


              {/*作品图片*/}
              <View>
                {
                  workData.imageUrls.map((item, index) => {
                    return (
                      <View key={index}>
                        <ALTapView onPress={() => {
                          this.props.navigation.navigate(RouteConst.other.IMAGE_VIEWER_PAGE, {imageUrls: workData.imageUrls, index});
                        }}>
                          <ALImage src={item}/>
                        </ALTapView>
                      </View>
                    );
                  })
                }
              </View>

              {/*其他作品*/}
              <View>
                <WingBlank>
                  <ALText h3 style={{marginTop: 20}}>其他作品</ALText>
                </WingBlank>

                <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{paddingLeft: 10, paddingRight: 10}}>
                  {
                    this.state.otherWorkData.map((item, index) => {
                      return (
                        <View key={index} style={{padding: 10}}>
                          <ALImage src={item.url} width={180} height={120} radius={20} />
                        </View>
                      )
                    })
                  }
                  <ALPlaceView width={10} />
                </ScrollView>
              </View>

              {/*评论*/}
              <View style={styles.alMarginTB20}>
                <WingBlank>
                  <ALText h3 style={{marginTop: 20}}>评论</ALText>

                  <CommentContext.Provider value={this.state}>
                    <CommentList workId={workData.id} />
                  </CommentContext.Provider>
                </WingBlank>
              </View>
            </View>

            <ALPlaceView height={80} style={{backgroundColor: "#fff"}} />


          </ALPageContainer>

          {/*顶部封面*/}
          <View style={{
            position: "absolute",
            top: 0,
            zIndex: 1,
            width: ScreenUtils.getScreenWidth(),
          }}>
            <ALImage height={300} src={workData.poster}/>
          </View>

          {/*固定在顶部的导航栏*/}
          <Flex justify="between" style={[
            localStyle.topBar,
            {
              backgroundColor: this.state.offsetTop > 100 ? `rgba(255,255,255, ${0.005 * this.state.offsetTop})` : '#00000000',
            },
          ]}>
            <Text style={{color: this.state.offsetTop > 100 ? `rgba(0,0,0, ${0.005 * this.state.offsetTop})` : '#fff'}}
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}>
              返回
            </Text>
            {
              this.state.offsetTop > 100 ?
                <ALText h3
                        style={{color: this.state.offsetTop > 100 ? `rgba(0,0,0, ${0.005 * this.state.offsetTop})` : '#fff'}}>
                  {workData.title}
                </ALText> : null
            }
            <Text style={{color: this.state.offsetTop > 100 ? `rgba(0,0,0, ${0.005 * this.state.offsetTop})` : '#fff'}}
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}>
              分享
            </Text>
          </Flex>

          {/*固定在底部的导航栏*/}
          <Flex justify="between" style={localStyle.bottomBar}>
            {/*收藏*/}
            <View>
              <ALTapView onPress={() => {
                this.setState({
                  favored: !this.state.favored,
                });
              }}>
                <Icon source={require('../../../../assets/icon/icon1/love.png')}
                      tintColor={this.state.favored ? '#2a95ff' : '#666'} size={39}/>
              </ALTapView>
            </View>

            {/*评论*/}
            <View>
              <ALTapView onPress={() => {
                this.setState({
                  modalVisible: !this.state.modalVisible
                }, () => {
                  console.log("WorkDetailPage modalVisible", this.state.modalVisible);
                })
              }}>
                <Icon source={require('../../../../assets/icon/icon1/message.png')} tintColor={'#666'} size={30}/>
              </ALTapView>
            </View>

            {/*分享*/}
            <View>
              <Icon source={require('../../../../assets/icon/icon1/share.png')} tintColor={'#666'} size={34}/>
            </View>

            <Button type={this.state.liked ? 'info' : 'default'}
                    size="sm"
                    style={[styles.alBorderCapsule]}
                    onPress={() => {
                      this.setState({liked: !this.state.liked});
                    }}>
              <Flex align="center" style={{width: 50}}>
                <Icon source={require('../../../../assets/icon/icon1/like.png')}
                      size={18} tintColor={this.state.liked ? '#fff' : '#ccc'}/>
                <ALPlaceView width={10}/>
                <ALText style={{fontSize: 12}} color={this.state.liked ? "#fff" : "#ccc"}>点赞</ALText>
              </Flex>
            </Button>

          </Flex>
        </View>

    );
  }

  openReplyWindow = () => {
    console.log("openReplyWindow");
    this.setState({modalVisible: !this.state.modalVisible})
  }

  onModalVisibleChange = () => {
    this.setState({modalVisible: !this.state.modalVisible})
  }

  onModalTypeChange = (type) => {
    this.setState({modalType: type})
  }



  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    console.log('WorkDetailPage.js======================');
    // console.log(this.props.route.params.workData);
    this.getWorkData();
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  getWorkData = () => {
    HttpRequest.get({
      url: ApiConst.work.ui.GET_WORK_UI_BY_ID + this.props.route.params.workData.id,
      log: true
    }).then(res => {
      this.setState({workData: res.data.data});
    })
  };

}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  }
}


export default connect(mapStateToProps)(WorkDetailPage);

// 样式
const localStyle = {
  detailBox: {
    backgroundColor: "#fff",
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
    color: "#cdcdcd",
    fontSize: 12,
    marginLeft: 6,
  }
};
