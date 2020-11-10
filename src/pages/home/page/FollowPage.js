import React from "react";
import {View, Text, ScrollView} from 'react-native';
import ALLoading from '../../../components/al-components/al-loading/ALLoading';
import ALPlaceView from '../../../components/al-components/al-place-view/ALPlaceView';
import {TouchableItem} from 'react-native-tab-view';
import RouteConst from '../../../router/RouteConst';
import WorkBox from '../../../components/common/work-box/WorkBox';
import styles from '../../../style/styles';

class FollowPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    const nav = this.props.navigation;
    return (
      this.props.workList === undefined ? <ALLoading /> : (
        <ScrollView nestedScrollEnabled>
          <ALPlaceView height={20}/>

          {
            this.props.workList.map((item, index) => {
              return (
                <TouchableItem key={item.title}
                               onPress={() => {
                                 this.props.navigation.push(RouteConst.work.WORK_DETAIL_PAGE, {workData: item});
                               }}>
                  <WorkBox navigation={nav} data={item}/>
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

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

}


export default FollowPage;

// 样式
const localStyle = {
  textColorBlue: {
    color: "blue"
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
}
