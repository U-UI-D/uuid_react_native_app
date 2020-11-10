import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl, FlatList} from 'react-native';
import ALPageContainer from '../../components/al-components/al-page-container/ALPageContainer';
import styles from '../../style/styles';
import ScreenUtils from '../../utils/ScreenUtils';
import ALTabs from '../../components/al-components/al-tabs/ALTabs';
import ALText from '../../components/al-components/al-text/ALText';
import {request} from '../../utils/network/AxiosRequest';
import RecommendUserPage from './page/user/RecommendUserPage';
import RecommendPage from './page/recommend/RecommendPage';


function TeamPage(props) {
  return (
    <ALPageContainer>
      <ALText align="center">TeamPage</ALText>
    </ALPageContainer>
  );
}

class DiscoveryPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      workList: [],
    };
  }

  // 渲染函数
  render() {
    const {workList} = this.state;

    const tabs = [
      {key: 'RecommendPage', title: '推荐', scene: <RecommendPage {...this.props} workList={workList}/>},
      {key: 'RecommendUserPage', title: '用户', scene: <RecommendUserPage {...this.props}/>},
    ];

    return (
      <View style={{
        width: ScreenUtils.getScreenWidth(),
        height: ScreenUtils.getScreenHeight(),
        paddingTop: 30,
        backgroundColor: '#fff',
      }}>
        <ALTabs
          tabs={tabs}
          useSceneMap={false}
          tabBarStyle={localStyle.tabBarStyle}
          labelStyle={{fontSize: 18}}
          borderStyle={{backgroundColor: '#00000000'}}/>
      </View>
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


export default DiscoveryPage;

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
});
