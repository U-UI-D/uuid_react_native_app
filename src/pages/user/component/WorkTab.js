import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from '../../../style/styles';
import ShowWorkBox from './ShowWorkBox';
import ScreenUtils from '../../../utils/ScreenUtils';
import {Flex} from '@ant-design/react-native';
import {HttpRequest} from '../../../utils/network/AxiosRequest';
import {connect} from 'react-redux';
import {ALTapView} from '../../../components/al-components/ALComponent';
import RouteConst from '../../../router/RouteConst';
import {ApiConst} from '../../../utils/network/ApiConst';
import ALEmpty from '../../../components/al-components/al-empty/ALEmpty';

class WorkTab extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      uiWorkList: [],
    };
  }

  // 渲染函数
  render() {

    const {uiWorkList} = this.state;
    if (uiWorkList.length === 0){
      return <ALEmpty />;
    }
    return (
      <ScrollView nestedScrollEnabled={this.props.enableScroll}
                  showsVerticalScrollIndicator={false}>
        {/*作品列表*/}
        <Flex justify="between" wrap="wrap" style={{padding: 20}}>
          {
            uiWorkList.map((item, index) => {
              return <View key={index} style={[styles.alMarginBottom25]}>
                <ALTapView onPress={() => {
                  this.props.navigation.navigate(RouteConst.work.WORK_DETAIL_PAGE, {workData: item})
                }}>
                  <ShowWorkBox
                    width={ScreenUtils.getScreenWidth() / 2.4}
                    url={item.poster}
                    title={item.title}
                    likeCount={item.likeCount}
                    commentCount={item.commentCount}/>
                </ALTapView>
              </View>;
            })
          }
        </Flex>
      </ScrollView>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    console.log("WorkTabs==================");
    this.getUIWorkListByUserId(this.props.userInfo.id);
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  getUIWorkListByUserId = (userId) => {
    HttpRequest.get({
      url: ApiConst.work.ui.GET_WORK_UI_BY_USER_ID + userId
      // url: "http://192.168.0.8:9002/work/ui/user/" + userId
    }).then(res => {
      // console.log("getUIWorkListByUserId", res);
      this.setState({
        uiWorkList: res.data.data.list
      })
    })
  }

}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkTab);

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
