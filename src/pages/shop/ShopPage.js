import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, Icon, NavigationBar} from 'beeshell';
import ALPageContainer from '../../components/al-components/al-page-container/ALPageContainer';
import {Flex, WingBlank} from '@ant-design/react-native';
import ALText from '../../components/al-components/al-text/ALText';
import {ALImage, ALPlaceView} from '../../components/al-components/ALComponent';
import ScreenUtils from '../../utils/ScreenUtils';
import styles from '../../style/styles';

function ProductionBox(props) {
  const {data} = props;
  return (
    <View style={{
      width: ScreenUtils.getScreenWidth() / 2.3,
      borderRadius: 10,
      backgroundColor: "#fff",

    }}>
      <ALImage src={data.poster}
               style={{
                 borderTopLeftRadius: 10,
                 borderTopRightRadius: 10
               }}/>

      <View style={{padding: 10}}>
        <ALText hNum={3} row={1} color={"#666"} style={{fontSize: 13}}>{data.title}</ALText>

        <ALPlaceView height={10} />
        <Flex justify="between" align="center">
          <Flex align="center" style={{alignSelf: "stretch"}}>
            <ALImage src={require('../../assets/icon/icon1/collecting.png')}
                     size={16}
                     style={{marginRight: 6}}/>
            <ALText color={'#409EFF'}>{data.price}</ALText>
          </Flex>

          <Button type="info"
                  textStyle={{fontSize: 10}}
                  style={{
                    borderRadius: 999,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 4,
                    paddingBottom: 4,
                  }}>兑换</Button>
        </Flex>
      </View>
    </View>
  );
}

function SecKillProductionBox(props) {
  const {data} = props;
  const [vw, setVw] = useState();
  return (
    <View>
      <Flex style={{
        borderRadius: 10,
        backgroundColor: "#fff",
        padding: 6
      }}>
        <ALImage src={data.poster}
                 width={120}
                 radius={10}/>

        <Flex direction="column"  justify="between" style={{
          padding: 10,
          alignSelf: "stretch",
        }}>
          <ALText hNum={3} row={2} color={"#666"} style={{fontSize: 13, width: 208}}>{data.title}</ALText>

          <Flex justify="between" style={{width: 208}}>
            <Flex align="center" style={{alignSelf: "stretch"}}>
              <ALImage src={require('../../assets/icon/icon1/collecting.png')}
                       size={16}
                       style={{marginRight: 6}}/>
              <ALText color={'#409EFF'}>{data.price}</ALText>
            </Flex>

            <Button type="info"
                    textStyle={{fontSize: 10}}
                    style={{
                      borderRadius: 999,
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 4,
                      paddingBottom: 4,
                    }}>秒杀兑换</Button>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}


class ShopPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      fixedNavBar: false
    };
  }

  onScroll = (event) => {
    const {x, y} = event.nativeEvent.contentOffset;
    this.setState({
      fixedNavBar: y > 8
    })
  }

  // 渲染函数
  render() {

    const productionList = [
      {
        id: 1,
        poster: 'https://img14.360buyimg.com/n1/jfs/t1/136498/30/6868/364458/5f3276adEd05c78ef/2210770765ad8771.jpg',
        price: 200,
        title: '一往无前 雷军亲述小米热血10年 范海涛 著',
      },
      {
        id: 2,
        poster: 'https://img10.360buyimg.com/n1/jfs/t1519/131/198721377/200812/584886dd/55643512Ne480d0e2.jpg',
        price: 200,
        title: '配色设计原理',
      },
      {
        id: 1,
        poster: 'https://img14.360buyimg.com/n1/jfs/t1/136498/30/6868/364458/5f3276adEd05c78ef/2210770765ad8771.jpg',
        price: 200,
        title: '一往无前 雷军亲述小米热血10年 范海涛 著',
      },
      {
        id: 2,
        poster: 'https://img10.360buyimg.com/n1/jfs/t1519/131/198721377/200812/584886dd/55643512Ne480d0e2.jpg',
        price: 200,
        title: '配色设计原理',
      },
      {
        id: 1,
        poster: 'https://img14.360buyimg.com/n1/jfs/t1/136498/30/6868/364458/5f3276adEd05c78ef/2210770765ad8771.jpg',
        price: 200,
        title: '一往无前 雷军亲述小米热血10年 范海涛 著',
      },
      {
        id: 2,
        poster: 'https://img10.360buyimg.com/n1/jfs/t1519/131/198721377/200812/584886dd/55643512Ne480d0e2.jpg',
        price: 200,
        title: '配色设计原理',
      },
      {
        id: 1,
        poster: 'https://img14.360buyimg.com/n1/jfs/t1/136498/30/6868/364458/5f3276adEd05c78ef/2210770765ad8771.jpg',
        price: 200,
        title: '一往无前 雷军亲述小米热血10年 范海涛 著',
      },

    ];

    const secKillList = [
      {
        id: 1,
        poster: 'https://img14.360buyimg.com/n1/jfs/t1/136498/30/6868/364458/5f3276adEd05c78ef/2210770765ad8771.jpg',
        price: 1,
        title: '一往无前 雷军亲述小米热血10年 范海涛 著',
      },
      {
        id: 2,
        poster: 'https://img10.360buyimg.com/n1/jfs/t1519/131/198721377/200812/584886dd/55643512Ne480d0e2.jpg',
        price: 1,
        title: '配色设计原理',
      },
      {
        id: 1,
        poster: 'https://img11.360buyimg.com/n1/jfs/t6226/191/1419897342/43340/75f6c32d/5950b73eN9b9f3a8a.jpg',
        price: 1,
        title: '京东E卡经典卡50面值（电子卡）',
      },

    ];

    return (
      <ScrollView stickyHeaderIndices={[1]}
                  onScroll={this.onScroll}
                  backgroundColor={'#f8f8f8'}>
        <View>
          <ALImage src={require('../../assets/image/shop/topbg.png')} height={200}/>
        </View>

        {/*导航栏*/}
        <View style={{position: "absolute", width: ScreenUtils.getScreenWidth()}}>
          <NavigationBar title="积分商城"
                         backLabelText={""}
                         titleStyle={{color: this.state.fixedNavBar ? "#000" : '#fff'}}
                         backLabelTextStyle={{color: this.state.fixedNavBar ? "#000" : '#fff'}}
                         backLabelIcon={<Icon source={require('beeshell/dist/common/images/icons/angle-left.png')}
                                              tintColor={this.state.fixedNavBar ? "#000" : '#fff'} size={20}/>}
                         style={{
                           backgroundColor: this.state.fixedNavBar ? "#fff" : '#00000000',
                           paddingTop: 30
                         }}
                         onPressBack={() => {
                           this.props.navigation.goBack();
                         }}/>
        </View>

        {/*积分信息*/}
        <View style={{marginTop: -120}}>
          <Flex direction="column" justify="center" align="center">
            <Flex justify="center" align="center" style={{marginTop: 10}}>
              <ALImage src={require('../../assets/icon/icon1/collecting.png')}
                       size={30} style={{tintColor: '#fff', marginRight: 10}}/>
              <ALText type="title" color={'#fff'} style={{fontSize: 32}}>99</ALText>
            </Flex>

            <Button textStyle={{color: '#fff', fontSize: 13}}
                    style={{
                      borderRadius: 999,
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 6,
                      paddingBottom: 6,
                      marginTop: 20,
                      marginBottom: 20,
                    }}>兑换记录</Button>

          </Flex>
        </View>

        {/*商品列表*/}
        <View style={{padding: 20}}>
          <ALText hNum={3}>秒杀</ALText>
          <Flex justify="between" wrap="wrap">
            {
              secKillList.map((item, index) => {
                return (
                  <View key={index} style={{marginBottom: 10, width: ScreenUtils.getScreenWidth() - 38}}>
                    <SecKillProductionBox data={item}/>
                  </View>
                );
              })
            }
          </Flex>

          <ALPlaceView height={10} />
          <ALText hNum={3}>书籍</ALText>
          <Flex justify="between" wrap="wrap">
            {
              productionList.map((item, index) => {
                return (
                  <View key={index} style={{marginBottom: 10}}>
                    <ProductionBox data={item}/>
                  </View>
                );
              })
            }
          </Flex>
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


export default ShopPage;

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
});
