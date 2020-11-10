import React from 'react';
import {View, Dimensions, StyleSheet, ScrollView, Text, FlatList} from 'react-native';
import ALTabs from '../../components/al-components/al-tabs/ALTabs';
import IndexPage from './page/IndexPage';
import NewestPage from './page/NewestPage';
import FollowPage from './page/FollowPage';
import ScreenUtils from '../../utils/ScreenUtils';
import {ALImage, ALPlaceView, ALTapView} from '../../components/al-components/ALComponent';
import {Carousel, Flex, WingBlank} from '@ant-design/react-native';
import {request} from '../../utils/network/AxiosRequest';
import styles from '../../style/styles';
import IconTextBox from '../../components/common/icon-text-box/IconTextBox';
import RouteConst from '../../router/RouteConst';
import connect from 'react-redux/lib/connect/connect';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class HomePage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      workList: [],
      enableSubScroll: false,
    };
  }

  onScroll = (event) => {
    let {x, y} = event.nativeEvent.contentOffset;
    console.log('y', y);
    this.setState({
      enableSubScroll: Math.floor(y) > 283,
    });
  };

  // 渲染函数
  render() {
    const state = this.state;
    const tabs = [
      {
        key: 'index',
        title: '首页推荐',
        scene: <IndexPage {...this.props} workList={this.state.workList} enableScroll={this.state.enableSubScroll}/>,
      },
      {
        key: 'newest',
        title: '最新',
        scene: <NewestPage {...this.props} workList={this.state.workList}/>,
      },
      {
        key: 'follow',
        title: '关注',
        scene: <FollowPage {...this.props} workList={this.state.workList}/>,
      },
    ];

    const {workList} = this.state;
    const carouselList = workList.length > 0 ? workList.slice(0, 3) : [];

    const iconTextBoxList = [
      {
        icon: require('../../assets/icon/icon1/layer.png'),
        text: '作品',
        route: RouteConst.work.WORK_PAGE,
      },
      {
        icon: require('../../assets/icon/icon1/photo.png'),
        text: '素材',
        route: RouteConst.material.MATERIAL_PAGE,
      },
      {
        icon: require('../../assets/icon/icon1/starcup.png'),
        text: '排行榜',
        route: RouteConst.top.TOP_PAGE,
      },
      {
        icon: require('../../assets/icon/icon1/grow.png'),
        text: '积分商城',
        route: RouteConst.shop.SHOP_PAGE,
      },
    ];

    return (
            <ScrollView nestedScrollEnabled={true}
                        stickyHeaderIndices={[2]}
                        onScroll={this.onScroll}
                        showsVerticalScrollIndicator={false}
                        style={{
                          backgroundColor: '#fff',
                          paddingTop: 30,
                        }}>

              {/*轮播图*/}
              <View style={{paddingLeft: 20, paddingRight: 20}}>
                <Carousel autoplay infinite
                          style={{
                            height: 180,
                            backgroundColor: '#00000000',
                          }}>
                  {
                    carouselList.map((item, index) => {
                      return (
                        <ALImage key={index} src={item.poster}
                                 radius={20}
                                 width={ScreenUtils.getScreenWidth() - 40}
                                 height={180}/>
                      );
                    })
                  }
                </Carousel>
              </View>

              {/*iconTextBoxList*/}
              <Flex>
                {
                  iconTextBoxList.map((item, index) => {
                    return (
                      <IconTextBox key={index}
                                   text={item.text}
                                   icon={item.icon}
                                   onPress={() => {
                                     this.props.navigation.navigate(item.route);
                                   }}/>
                    );
                  })
                }

              </Flex>

              <View>
                <ALPlaceView height={10} style={{backgroundColor: '#fff'}}/>

                {/*Tabs*/}
                <View style={{width: screenWidth, height: screenHeight}}>
                  <ALTabs
                    tabs={tabs}
                    useSceneMap={false}
                    tabBarStyle={localStyle.tabBarStyle}/>
                </View>
              </View>


            </ScrollView>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.getMockData();
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  // 请求作品列表数据
  getMockData = () => {
    // let url = React.mockPath + '/home_work_list.json';
    let url = 'https://gitee.com/AlanLee97/dev-mock/raw/master/project/uuid-react-native-app/work/ui-work-list.json';

    request({
      url: url,
      method: 'GET',
      data: {},
    }).then(res => {
      // console.log(res.data.data);
      this.setState({
        workList: res.data.data.list,
      });
      // console.log(this.state.workList);
    }).catch(err => {
      console.log(err);
    });
  };

}

const mapStateToProps = (state) => {
  return {
    // scrollY: state.scrollY,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // updateScrollY(data) {
    //   let action = {
    //     type: Actions.UPDATE_SCROLL_Y,
    //     value: data,
    //   };
    //   dispatch(action);
    // },

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const localStyle = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#00000000',
  },
});
