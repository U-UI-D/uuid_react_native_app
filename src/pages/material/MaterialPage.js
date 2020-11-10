import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl, SafeAreaView} from 'react-native';
import ALPageContainer from '../../components/al-components/al-page-container/ALPageContainer';
import ScreenUtils from '../../utils/ScreenUtils';
import ALTabs from '../../components/al-components/al-tabs/ALTabs';
import {request} from '../../utils/network/AxiosRequest';
import {Carousel, Flex, WingBlank} from '@ant-design/react-native';
import {ALDivider, ALImage, ALPlaceView, ALTapView} from '../../components/al-components/ALComponent';
import RecommendPage from './page/recommend/RecommendPage';
import IconPage from './page/icon/IconPage';
import WallpaperPage from './page/wallpaper/WallpaperPage';
import PosterPage from './page/poster/PosterPage';


class MaterialPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      defaultIndex: 0
    };
  }

  // 渲染函数
  render() {
    const tabs = [
      {key: 'recommend', title: '推荐', scene: <RecommendPage {...this.props} />},
      {key: 'icon', title: 'ICON', scene: <IconPage {...this.props} /> },
      {key: 'wallpaper', title: '壁纸', scene: <WallpaperPage {...this.props} />},
      {key: 'poster', title: '海报', scene: <PosterPage {...this.props} />},
    ];

    const {params} =  this.props.route;

    console.log(params);

    const renderScene = ({ route, jumpTo }) => {
      switch (route.key) {
        case 'recommend':
          return <RecommendPage {...this.props} toRoute={params ? params.data : null} jumpTo={jumpTo} />;
        case 'icon':
          return <IconPage {...this.props} jumpTo={jumpTo} />;
        case 'wallpaper':
          return <WallpaperPage {...this.props} jumpTo={jumpTo} />;
        case 'poster':
          return <PosterPage {...this.props} jumpTo={jumpTo} />;
        default: return null
      }
    };


    return (
      <ALPageContainer scroll={false}>
        <ALTabs
          tabs={tabs}
          useSceneMap={false}
          defaultIndex={this.state.defaultIndex}
          renderScene={renderScene}
          tabBarStyle={localStyle.tabBarStyle}
          labelStyle={{fontSize: 18}}
          borderStyle={{backgroundColor: '#00000000'}}/>

        <ALPlaceView height={200}/>

      </ALPageContainer>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    const {toRoute} = this.props;
    if (toRoute === 'icon'){
      this.setState({
        defaultIndex: 1
      })
    }
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

}


export default MaterialPage;

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
    width: 300,
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
