import React from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Flex} from '@ant-design/react-native';
import {ALDivider, ALImage, ALPlaceView, ALTapView} from '../../../../components/al-components/ALComponent';
import {Button} from 'beeshell';
import ALText from '../../../../components/al-components/al-text/ALText';
import ALLoading from '../../../../components/al-components/al-loading/ALLoading';
import {request} from '../../../../utils/network/AxiosRequest';
import UserBox from './component/UserBox';

class RecommendUserPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      userList: null,
    };
  }

  // 渲染函数
  render() {
    const {userList} = this.state;
    return (
        userList === null ? <ALLoading /> :
          (
            <ScrollView stickyHeaderIndices={[0]}>
              <View style={{backgroundColor: "#fff"}}>
                <Flex style={{padding: 10}}>
                  <ALText hNum={4} style={{marginLeft: 10}}>筛选</ALText>
                  <Button type="default"
                          size="sm"
                          textStyle={{fontSize: 10}}
                          style={localStyle.btnStyle}>
                    UI设计师
                  </Button>
                  <Button type="default"
                          size="sm"
                          textStyle={{fontSize: 10}}
                          style={localStyle.btnStyle}>
                    开发者
                  </Button>
                </Flex>

              </View>
              <View>
                {
                  userList.map((item, index) => {
                    return (
                      <View key={index} >
                        <UserBox data={item}
                                 navigation={this.props.navigation}
                                 style={{padding: 20}} />
                        <ALDivider />
                      </View>
                    )
                  })
                }
              </View>
            </ScrollView>
          )
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.getMockData()
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
        userList: res.data.data.list,
      });
      // console.log(this.state.workList);
    }).catch(err => {
      console.log(err);
    });
  };

}


export default RecommendUserPage;

// 样式
const localStyle = StyleSheet.create({
  textColorBlue: {
    color: "blue"
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  btnStyle: {
    borderRadius: 999,
    marginLeft: 10,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6
  }
})
