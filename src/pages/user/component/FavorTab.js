import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from '../../../style/styles';
import ShowWorkBox from './ShowWorkBox';
import ScreenUtils from '../../../utils/ScreenUtils';
import {Flex} from '@ant-design/react-native';
import {HttpRequest} from '../../../utils/network/AxiosRequest';
import {ALTapView} from '../../../components/al-components/ALComponent';
import RouteConst from '../../../router/RouteConst';
import {connect} from 'react-redux';
import {ApiConst} from '../../../utils/network/ApiConst';

class FavorTab extends React.Component{

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
    const emptyView = (
      <View>
        <Text>暂无数据</Text>
      </View>
    );
    if (uiWorkList.length === 0){
      return emptyView;
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
    this.getFavorUIWorkListByUserId(this.props.userInfo.id);
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  getFavorUIWorkListByUserId = (userId) => {
    HttpRequest.get({
      url: ApiConst.user.GET_USER_DATA_FAVOR + userId
    }).then(res => {
      console.log("getFavorUIWorkListByUserId", res);
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

export default connect(mapStateToProps)(FavorTab);

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
