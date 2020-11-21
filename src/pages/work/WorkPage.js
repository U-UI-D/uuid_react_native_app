import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ScreenUtils from '../../utils/ScreenUtils';
import ALTabs from '../../components/al-components/al-tabs/ALTabs';
import {HttpRequest} from '../../utils/network/AxiosRequest';
import ALLoading from '../../components/al-components/al-loading/ALLoading';
import {ALPlaceView} from '../../components/al-components/ALComponent';
import {TouchableItem} from 'react-native-tab-view';
import RouteConst from '../../router/RouteConst';
import WorkBox from '../../components/common/work-box/WorkBox';
import styles from '../../style/styles';
import {ApiConst} from '../../utils/network/ApiConst';
import WorkList from '../../components/common/work-list/WorkList';


function UIWorkPage(props) {
  return (
    <WorkList navigation={props.navigation} />
  );
}

function SoftwareWorkPage(props) {
  return (
    props.workList === undefined ? <ALLoading /> : (
      <ScrollView >
        <ALPlaceView height={20}/>

        {
          props.workList.map((item, index) => {
            return (
              <TouchableItem key={index}
                             onPress={() => {
                               props.navigation.push(RouteConst.work.WORK_DETAIL_PAGE, {workData: item});
                             }}>
                <WorkBox navigation={props.navigation} data={item}/>
              </TouchableItem>
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


class WorkPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      workList: [],
      softwareWorkList: [],
    };
  }

  // 渲染函数
  render() {
    const {workList, softwareWorkList} = this.state;

    const tabs = [
      {key: 'UIWorkPage', title: 'UI'},
      {key: 'SoftwareWorkPage', title: '软件'},
    ];

    const sceneMap = {
      UIWorkPage: () => <UIWorkPage {...this.props} workList={workList}/>,
      SoftwareWorkPage: () => <SoftwareWorkPage {...this.props} workList={softwareWorkList}/>,
    };

    return (
      <View style={{
        width: ScreenUtils.getScreenWidth(),
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#fff"
      }}>
        <ALTabs
          tabs={tabs}
          sceneMap={sceneMap}
          tabBarStyle={localStyle.tabBarStyle}
          labelStyle={{fontSize: 18}}
          borderStyle={{backgroundColor: '#00000000'}}/>
      </View>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.getUIWorkData();
    this.getSoftwareWorkData();
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  // 请求作品列表数据
  getUIWorkData = () => {
    HttpRequest.get({url: ApiConst.work.ui.GET_WORK_UI_ALL})
      .then(res => {
        this.setState({
          workList: res.data.data.list,
        });
      });
  };

  // 请求作品列表数据
  getSoftwareWorkData = () => {
    HttpRequest.get({url: ApiConst.work.software.GET_WORK_SOFTWARE_ALL})
      .then(res => {
        this.setState({
          softwareWorkList: res.data.data.list,
        });
      });
  };


}


export default WorkPage;

// 样式
const localStyle = StyleSheet.create({
  tabBarStyle: {
    width: 160,
    backgroundColor: '#00000000',
  },
})
