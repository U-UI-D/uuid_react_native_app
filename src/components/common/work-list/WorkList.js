import React from "react";
import {View, Text, StyleSheet, FlatList, ScrollView, RefreshControl} from 'react-native';
import {Flex, WingBlank} from '@ant-design/react-native';
import ALText from '../../al-components/al-text/ALText';
import RouteConst from '../../../router/RouteConst';
import {ALImage, ALTapView} from '../../al-components/ALComponent';
import ScreenUtils from '../../../utils/ScreenUtils';
import UserBox from '../../../pages/discovery/page/user/component/UserBox';
import ALLoading from '../../al-components/al-loading/ALLoading';
import ALPlaceView from '../../al-components/al-place-view/ALPlaceView';
import WorkBox from '../work-box/WorkBox';
import styles from '../../../style/styles';
import {HttpRequest} from '../../../utils/network/AxiosRequest';
import {ApiConst} from '../../../utils/network/ApiConst';
import PropTypes from 'prop-types';

class WorkList extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      workList: [],
      refreshing: false,
      wallpaperList: [],
      pageNum: 1,
      hasNextPage: false,
    };
  }

  // 渲染函数
  render() {
    const props = this.props;
    const {refreshing, workList} = this.state;


    /*   const iconList = [
         {
           id: 1,
           url: require('../../assets/image/other/avatar/icon1.png'),
           title: '',
         },
         {
           id: 2,
           url: require('../../assets/image/other/avatar/icon2.png'),
           title: '',
         },
         {
           id: 3,
           url: require('../../assets/image/other/avatar/icon3.png'),
           title: '',
         },
         {
           id: 4,
           url: require('../../assets/image/other/avatar/icon4.png'),
           title: '',
         },

       ];*/
    const posterList = [
      {
        id: 1,
        url: 'https://hbimg.huabanimg.com/5497a0b6178f357489317f835dd0e5bd7eb211e338d7a-zJADoz_fw658/format/webp',
        title: '',
      },
      {
        id: 2,
        url: 'https://hbimg.huabanimg.com/a288c06f5612faccdfbff4411aabf8a947fc768e134a6-K78goI_fw658/format/webp',
        title: '',
      },

    ];
    const wallpaperList = this.state.wallpaperList;
    const designerList = {
      id: 1,
      username: 'AlanLee',
      nickname: 'AlanLee',
      age: 23,
      gender: 'male',
      avatar: 'https://gitee.com/AlanLee97/assert/raw/master/note_images/naruto.jpg',
      sign: '彪悍的人生不需要解释',
      identity: 'UI设计师',
      phone: '15622282904',
      email: '1445654576@qq.com',
    };

    const insertPosterList = (
      <View style={{backgroundColor: '#f8f8f8', paddingTop: 10, paddingBottom: 10, marginBottom: 20}}>

        {/*海报*/}
        <View style={{backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10}}>
          <WingBlank>
            <Flex justify="between" style={{paddingBottom: 10}}>
              <ALText hNum={3}>海报</ALText>
              <ALText type="desc" color={'#aaa'} onPress={() => {
                props.navigation.navigate(RouteConst.material.MATERIAL_PAGE, {data: 'icon'});
              }}>更多</ALText>
            </Flex>

            <FlatList data={posterList} horizontal showsHorizontalScrollIndicator={false}
                      keyExtractor={item => item.id.toString()}
                      renderItem={(item) => {
                        return (
                          <ALImage src={item.item.url}
                                   width={ScreenUtils.getScreenWidth() / 2.2}
                                   height={400}
                                   radius={10}
                                   style={{
                                     marginRight: 6,
                                     borderColor: '#eee',
                                     padding: 10,
                                   }}/>
                        );
                      }}/>
          </WingBlank>
        </View>

      </View>
    );

    const insertWallpaperList = wallpaperList.length > 0 ? (
      <View style={{backgroundColor: '#f8f8f8', paddingTop: 10, paddingBottom: 10, marginBottom: 20}}>

        {/*壁纸*/}
        <View style={{backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10}}>
          <WingBlank>
            <Flex justify="between" style={{paddingBottom: 10}}>
              <ALText hNum={3}>壁纸</ALText>
              <ALText type="desc" color={'#aaa'} onPress={() => {
                props.navigation.navigate(RouteConst.material.MATERIAL_PAGE, {data: 'icon'});
              }}>更多</ALText>
            </Flex>

            <FlatList data={wallpaperList} horizontal showsHorizontalScrollIndicator={false}
                      keyExtractor={item => item.id.toString()}
                      renderItem={(item) => {
                        return (
                          <ALImage src={item.item.url}
                                   width={ScreenUtils.getScreenWidth() / 2.2}
                                   height={400}
                                   radius={10}
                                   style={{
                                     marginRight: 6,
                                     borderColor: '#eee',
                                     padding: 10,
                                   }}/>
                        );
                      }}/>
          </WingBlank>
        </View>

      </View>
    ) : null;

    const insertDesignerList = (
      <View style={{backgroundColor: '#f8f8f8', paddingTop: 10, paddingBottom: 10, marginBottom: 20}}>

        {/*设计师*/}
        <View style={{backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10}}>
          <WingBlank>
            <Flex justify="between" style={{paddingBottom: 10}}>
              <ALText hNum={3}>设计师</ALText>
              <ALText type="desc" color={'#aaa'} onPress={() => {
                props.navigation.navigate(RouteConst.material.MATERIAL_PAGE, {data: 'icon'});
              }}>更多</ALText>
            </Flex>

            <UserBox data={designerList}/>
          </WingBlank>
        </View>

      </View>
    );

    const onRefresh = () => {
      this.setState({
        refreshing: true
      })
      this.refreshUIWorkData()
    }


    return (
      workList.length === 0 ? <ALLoading/> : (
        <ScrollView nestedScrollEnabled={props.enableScroll}
                    showsVerticalScrollIndicator={false}
                    onScroll={this.onScroll}
                    refreshControl={
                      <RefreshControl refreshing={refreshing}
                                      onRefresh={onRefresh}/>
                    }>
          <ALPlaceView height={20}/>

          {
            workList.map((item, index) => {
              return (
                <View key={index}>
                  {
                    props.showRecommend ? <View>
                      {
                        index === Math.floor(Math.random(workList.length) * workList.length)+1 ? insertPosterList : null
                      }
                      {
                        index === Math.floor(Math.random(workList.length) * workList.length)+2 ? insertWallpaperList : null
                      }
                      {
                        index === Math.floor(Math.random(workList.length) * workList.length)+3 ? insertDesignerList : null
                      }
                    </View> : null
                  }
                  <ALTapView onPress={() => {
                    props.navigation.push(RouteConst.work.WORK_DETAIL_PAGE, {workData: item});
                  }}>
                    <WorkBox navigation={props.navigation} data={item}/>
                  </ALTapView>

                </View>
              );
            })
          }

          <View style={{height: 50}}>
            <Text style={[styles.alTextCenter, styles.alColorGray]}>
              到底啦~
            </Text>
          </View>
        </ScrollView>
      )
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.getWallpaperData();
    this.getUIWorkData();

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  // 请求作品列表数据
  getWallpaperData = () => {
    let url = 'http://service.picasso.adesk.com/v1/vertical/vertical?limit=2&skip=180&adult=false&first=0&order=hot';

    HttpRequest.get({url}).then(res => {
      if (res.err === null){
        let list = res.data.res.vertical;
        let arr = [];
        let obj = {
          id: 0,
          url: ""
        }
        list.map((item, index) => {
          obj.id = index+1;
          obj.url = item.preview;
          arr.push(obj);
          obj = {};
        })

        this.setState({
          wallpaperList: arr,
        });
      }else {
        console.log(res.err);
      }
    })
  };

  // 请求作品列表数据
  getUIWorkData = (data={pageNum: this.state.pageNum}) => {
    HttpRequest.get({url: ApiConst.work.ui.GET_WORK_UI_ALL, data, log: true})
      .then(res => {
        console.log(res);
        let {workList} = this.state;
        workList = [...workList, ...res.data.data.list];
        this.setState({
          workList: workList,
          pageNum: res.data.data.pageNum,
          hasNextPage: res.data.data.hasNextPage,
        });
      });
  };

  // 请求作品列表数据
  refreshUIWorkData = () => {
    HttpRequest.get({url: ApiConst.work.ui.GET_WORK_UI_ALL})
      .then(res => {
        this.setState({
          workList: res.data.data.list,
          pageNum: res.data.data.pageNum,
          hasNextPage: res.data.data.hasNextPage,
          refreshing: false
        });
      });
  };

  onScroll = (event) => {
    let {x, y} = event.nativeEvent.contentOffset;
    let contentHeight = event.nativeEvent.contentSize.height;
    console.log('WorkList y', y);
    console.log('WorkList contentHeight', contentHeight);
    if (Math.floor(y) >= Math.floor(contentHeight-800)){
      console.log("load new data=============");
      let {pageNum, hasNextPage} = this.state;
      if (hasNextPage){
        this.getUIWorkData({pageNum: pageNum+1});
      }
    }


  };

}

// prop类型
WorkList.propTypes = {
  // 显示推荐内容
  showRecommend: PropTypes.bool,
};

// prop默认值
WorkList.defaultProps = {
  showRecommend: false,
};

export default WorkList;

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
