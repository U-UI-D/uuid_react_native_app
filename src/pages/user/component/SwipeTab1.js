import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from '../../../style/styles';
import ShowWorkBox from './ShowWorkBox';
import ScreenUtils from '../../../utils/ScreenUtils';

class SwipeTab1 extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      workData: [
        {
          url: require('../../../assets/image/user/poster1.png'),
          title: 'UI中国手机客户端原创设计',
          like: 12,
          comment: 32,
        },
        {
          url: require('../../../assets/image/user/poster2.png'),
          title: '「汉学」文学工具产品的视觉与体验碰撞',
          like: 43,
          comment: 2432,
        },
        {
          url: require('../../../assets/image/user/poster3.png'),
          title: '【顷刻】_视听解说APP',
          like: 123,
          comment: 5452,
        },
        {
          url: require('../../../assets/image/user/poster4.png'),
          title: '拼多多APP REDESIGN',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster5.png'),
          title: 'Redesign《在外》APP ',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster6.png'),
          title: '植物类社交APP概念设计',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster7.png'),
          title: '优灵APP改版 - 帮助你发现优秀产品和设计灵感',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster8.png'),
          title: '晓知新闻APP',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster9.png'),
          title: '微信Redesign（重设计）',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster10.png'),
          title: '生活家 - APP视觉设计',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster1.png'),
          title: 'UI中国手机客户端原创设计',
          like: 12,
          comment: 32,
        },
        {
          url: require('../../../assets/image/user/poster2.png'),
          title: '「汉学」文学工具产品的视觉与体验碰撞',
          like: 43,
          comment: 2432,
        },
        {
          url: require('../../../assets/image/user/poster3.png'),
          title: '【顷刻】_视听解说APP',
          like: 123,
          comment: 5452,
        },
        {
          url: require('../../../assets/image/user/poster4.png'),
          title: '拼多多APP REDESIGN',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster5.png'),
          title: 'Redesign《在外》APP ',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster6.png'),
          title: '植物类社交APP概念设计',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster7.png'),
          title: '优灵APP改版 - 帮助你发现优秀产品和设计灵感',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster8.png'),
          title: '晓知新闻APP',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster9.png'),
          title: '微信Redesign（重设计）',
          like: 123,
          comment: 362,
        },
        {
          url: require('../../../assets/image/user/poster10.png'),
          title: '生活家 - APP视觉设计',
          like: 123,
          comment: 362,
        },
      ],
    };
  }

  // 渲染函数
  render() {

    const {workData} = this.state;
    const emptyView = (
      <View>
        <Text>暂无数据</Text>
      </View>
    );
    if (!workData){
      return emptyView;
    }
    return (
        <ScrollView>
          {/*作品列表*/}
          <View style={[styles.alFlexRow, styles.alFlexWrap, styles.alPadding20, styles.alFlexSpaceBetween]}>
            {
              this.state.workData.map((item, index) => {
                return <View key={index} style={[styles.alMarginBottom25]}>
                  <ShowWorkBox
                    width={ScreenUtils.getScreenWidth() / 2.4}
                    url={item.url}
                    title={item.title}
                    like={item.like}
                    comment={item.comment}/>
                </View>;
              })
            }
          </View>
        </ScrollView>
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


export default SwipeTab1;

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
