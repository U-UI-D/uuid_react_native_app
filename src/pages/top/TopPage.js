import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import ALPageContainer from '../../components/al-components/al-page-container/ALPageContainer';
import ALTabs from '../../components/al-components/al-tabs/ALTabs';
import ALText from '../../components/al-components/al-text/ALText';
import ScreenUtils from '../../utils/ScreenUtils';
import {Flex, WingBlank} from '@ant-design/react-native';
import {request} from '../../utils/network/AxiosRequest';
import {ALDivider, ALImage, ALPlaceView} from '../../components/al-components/ALComponent';
import styles from '../../style/styles';
import RouteConst from '../../router/RouteConst';

function DotText(props){
  return (
    <Flex justify="center" align="center" style={{
      backgroundColor: props.bgcolor,
      width: 30,
      height: 30,
      borderRadius: 30,
      textAlign: "center"
    }}>
      <ALText hNum={5} style={{color: "#fff"}}>{props.text}</ALText>
    </Flex>
  );
}

function SlotRow(props) {

  const renderRank = (rank) => {
    switch (rank) {
      case 1:
        return (
          <DotText text={props.index} bgcolor={"#ff5959"} />
        );
      case 2:
        return (
          <DotText text={props.index} bgcolor={"#ff743b"} />
        );
      case 3:
        return (
          <DotText text={props.index} bgcolor={"#ffd659"} />
        );
      default:
        return <Text>{rank}</Text>;
    }
  }

  const {data} = props;
  return (
    <View style={{flex: 1}}>
      <Flex align="stretch" onPress={() => {
        props.navigation.navigate(RouteConst.work.WORK_DETAIL_PAGE, {workData: data})
      }}>
        <Flex justify="end" align="stretch" style={{flex: 1, marginRight: 15}}>
          <Flex direction="column" justify="between">
            <Text>{renderRank(props.index)}</Text>
            <View >
              <ALText type="desc" style={{fontSize: 13}} align="center">分数</ALText>
              <ALText align="center" style={{fontWeight: "bold", color: "#666"}}>{100 - props.index}</ALText>
            </View>
          </Flex>
        </Flex>
        <Flex style={{flex: 2}}>
          <ALImage src={data.poster} height={80} width={120} style={{flex: 1}} />
        </Flex>
        <Flex align="stretch" style={{flex: 3, marginLeft: 20}}>
          <Flex direction="column" align="stretch" justify="between" >
            <Text numberOfLines={1} style={{fontSize: 16, color: "#666"}}>{data.title}</Text>
            <ALText type="desc">UI</ALText>
            <Flex>
              <ALImage src={data.avatar} size={20} round />
              <ALPlaceView width={10} />
              <Text style={{color: "#666"}}>{data.nickname}</Text>
            </Flex>
            <ALText type="desc" style={{fontSize: 12}}>2020-10-16</ALText>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}

function TopUI(props) {
  let [workList, setWorkList] = useState([]);

  useEffect(() => {
    getMockData()
  }, []);

  // 请求作品列表数据
  const getMockData = () => {
    let url = "https://gitee.com/AlanLee97/dev-mock/raw/master/project/uuid-react-native-app/work/ui-work-list.json";

    request({
      url: url,
      method: 'GET',
      data: {},
    }).then(res => {
      console.log(res.data.data);
      setWorkList(res.data.data.list);
    }).catch(err => {
      console.log(err);
    });
  };

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <WingBlank>
        {/*<ALText align="center">TopUI</ALText>*/}
        <ALPlaceView height={20} />

        {
          workList.map((item, index) => {
            return (
              <View key={index}>
                <SlotRow data={item} index={index+1} navigation={props.navigation}></SlotRow>

                <ALDivider marginTop={20} marginBottom={20} weight={workList.length === (index+1) ? 0 : 0.5} />
              </View>
            );
          })
        }


        <ALPlaceView height={50} />
      </WingBlank>
    </ScrollView>
  );
}

function TopSoftware(props) {
  let [workList, setWorkList] = useState([]);

  useEffect(() => {
    getMockData()
  }, []);

  // 请求作品列表数据
  const getMockData = () => {
    let url = "https://gitee.com/AlanLee97/dev-mock/raw/master/project/uuid-react-native-app/work/ui-work-list.json";

    request({
      url: url,
      method: 'GET',
      data: {},
    }).then(res => {
      console.log(res.data.data);
      setWorkList(res.data.data.list);
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <ALPageContainer>
      <WingBlank>
        {/*<ALText align="center">TopUI</ALText>*/}

        {
          workList.map((item, index) => {
            return (
              <View key={index}>
                <SlotRow data={item} index={index+1} navigation={props.navigation}></SlotRow>

                <ALDivider marginTop={20} marginBottom={20} weight={workList.length === (index+1) ? 0 : 0.5} />
              </View>
            );
          })
        }

        <ALPlaceView height={50} />
      </WingBlank>


    </ALPageContainer>
  );
}

function TopDesigner(props) {
  return (
    <ALPageContainer>
      <ALText align="center">TopDesigner</ALText>
    </ALPageContainer>
  );
}

function TopDeveloper(props) {
  return (
    <ALPageContainer>
      <ALText align="center">TopDeveloper</ALText>
    </ALPageContainer>
  );
}


class TopPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      workList: []
    };
  }

  // 渲染函数
  render() {
    const tabs = [
      {key: 'ui', title: 'UI作品', scene: <TopUI {...this.props}/>},
      {key: 'software', title: '软件作品', scene: <TopSoftware {...this.props}/>},
      {key: 'designer', title: '设计师', scene: <TopDesigner {...this.props}/>},
      {key: 'developer', title: '开发者', scene: <TopDeveloper {...this.props}/>},
    ];

    return (
        <ALPageContainer>

          <View style={{width: ScreenUtils.getScreenWidth(), height: ScreenUtils.getScreenHeight()}}>
            <ALTabs
              tabs={tabs}
              useSceneMap={false}
              tabBarStyle={localStyle.tabBarStyle} />
          </View>

        </ALPageContainer>
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


export default TopPage;

// 样式
const localStyle = StyleSheet.create({
  tabBarStyle:{
    backgroundColor: "#00000000"
  }
})
