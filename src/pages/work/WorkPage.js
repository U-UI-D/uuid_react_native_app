import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ScreenUtils from '../../utils/ScreenUtils';
import ALTabs from '../../components/al-components/al-tabs/ALTabs';
import {request} from '../../utils/network/AxiosRequest';
import ALPageContainer from '../../components/al-components/al-page-container/ALPageContainer';
import ALText from '../../components/al-components/al-text/ALText';
import ALLoading from '../../components/al-components/al-loading/ALLoading';
import {ALPlaceView} from '../../components/al-components/ALComponent';
import {TouchableItem} from 'react-native-tab-view';
import RouteConst from '../../router/RouteConst';
import WorkBox from '../../components/common/work-box/WorkBox';
import styles from '../../style/styles';


function UIWorkPage(props) {
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
function SoftwareWorkPage(props) {
  return (
    <ALPageContainer>
      <ALText align="center">SoftwareWorkPage</ALText>
    </ALPageContainer>
  );
}


class WorkPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      workList: []
    };
  }

  // 渲染函数
  render() {
    const {workList} = this.state;

    const tabs = [
      {key: 'UIWorkPage', title: 'UI'},
      {key: 'SoftwareWorkPage', title: '软件'},
    ];

    const sceneMap = {
      UIWorkPage: () => <UIWorkPage {...this.props} workList={workList}/>,
      SoftwareWorkPage: () => <SoftwareWorkPage {...this.props}/>,
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
          tabBarStyle={localStyle.tabBarStyle} />
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
    let url = "https://gitee.com/AlanLee97/dev-mock/raw/master/project/uuid-react-native-app/work/ui-work-list.json";

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


export default WorkPage;

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
