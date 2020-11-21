import React from 'react';
import {View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import ALTabs from '../../components/al-components/al-tabs/ALTabs';
import IndexPage from './page/IndexPage';
import NewestPage from './page/NewestPage';
import FollowPage from './page/FollowPage';
import {ALPlaceView} from '../../components/al-components/ALComponent';
import {Flex} from '@ant-design/react-native';
import {HttpRequest} from '../../utils/network/AxiosRequest';
import IconTextBox from '../../components/common/icon-text-box/IconTextBox';
import RouteConst from '../../router/RouteConst';
import connect from 'react-redux/lib/connect/connect';
import {ApiConst} from '../../utils/network/ApiConst';
import ShowCarousel from './component/carousel/ShowCarousel';

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
    const {workList, carouselList} = this.state;
    const tabs = [
      {
        key: 'index',
        title: '推荐',
        scene: <IndexPage {...this.props} workList={workList} enableScroll={this.state.enableSubScroll}/>,
      },
      {
        key: 'newest',
        title: '最新',
        scene: <NewestPage {...this.props} workList={workList}/>,
      },
      {
        key: 'follow',
        title: '关注',
        scene: <FollowPage {...this.props} workList={workList}/>,
      },
    ];
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
        <ShowCarousel carouselList={carouselList ?? []} />

        {/*iconTextBoxList*/}
        <View>
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
          <ALPlaceView height={10} style={{backgroundColor: '#f8f8f8'}}/>
        </View>


        {/*Tabs*/}
        <View style={{width: screenWidth, height: screenHeight}}>
          <ALTabs
            tabs={tabs}
            useSceneMap={false}
            tabBarStyle={localStyle.tabBarStyle}
            labelStyle={{fontSize: 18}}
            borderStyle={{backgroundColor: '#00000000'}}/>
        </View>

        <ALPlaceView height={300} />


      </ScrollView>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.getUIWorkData();
    this.getCarouselList();
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  // 请求作品列表数据
  getUIWorkData = (data={}) => {
    HttpRequest.get({url: ApiConst.work.ui.GET_WORK_UI_ALL, data, log: true})
      .then(res => {
        let {workList} = this.state;
        workList = [...workList, ...res.data.data.list];
        this.setState({
          workList: workList
        });
      });
  };

  // 请求轮播图列表数据
  getCarouselList = () => {
    HttpRequest.get({url: ApiConst.carousel.GET_CAROUSEL_ALL})
      .then(res => {
        this.setState({
          carouselList: res.data.data,
        });
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
    //     type: ActionTypes.UPDATE_SCROLL_Y,
    //     value: data,
    //   };
    //   dispatch(action);
    // },

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

const localStyle = StyleSheet.create({
  tabBarStyle: {
    width: 200,
    backgroundColor: '#00000000',
  },
});
