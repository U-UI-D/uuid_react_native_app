import React from "react";
import {View, Text, ScrollView} from 'react-native'
import styles from '../../../style/styles';
import ALWrapView from '../../../components/al-components/al-wrap-view/ALWrapView';
import ALPlaceView from '../../../components/al-components/al-place-view/ALPlaceView';
import AvatarNickname from '../../../components/common/avatar-nickname/AvatarNickname';
import {request} from '../../../utils/network/AxiosRequest';
import {ALImage} from '../../../components/al-components/ALComponent';
import ALPageContainer from '../../../components/al-components/al-page-container/ALPageContainer';
import {WingBlank} from '@ant-design/react-native';
import ScreenUtils from '../../../utils/ScreenUtils';

//作品详情页
class WorkDetailPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      workData: null,
      offsetTop: 0
    };
  }

  onLayout = (event) => {
    let {x, y, width, height} = event.nativeEvent.layout;
    console.log("x", x, "y", y, "width", width, "height", height);
  }

  onScroll = (event) => {
    let {x, y} = event.nativeEvent.contentOffset;

    if (y < 400){
      console.log("x", x, "y", y);
      this.setState({
        offsetTop: Math.floor(y)
      })
    }
  }



  // 渲染函数
  render() {
    const workData = this.state.workData;


    return (
        workData === null ? <Text>加载中</Text> :

          <View style={{
            width: ScreenUtils.getScreenWidth(),
            height: ScreenUtils.getScreenHeight() + 100
          }}>

            <ALPageContainer paddingTop={0} onScroll={this.onScroll}>
              <View>
                <ALImage src={workData.poster} />
              </View>

              <View style={{
                backgroundColor: "#fff",
                paddingTop: 30,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                marginTop: -50,
              }}>

                <WingBlank>
                  <View style={[styles.alFlexRow, styles.alFlexSpaceBetween]}>
                    <AvatarNickname
                      text1={workData.nickname}
                      text2={"永远相信美好的事情即将发生"}
                      avatar={workData.avatar} />

                    <ALWrapView>
                      <View style={[styles.alFlexCenterV]}>
                        <View style={[localStyle.followBox]}>
                          <Text style={localStyle.followText}>+关注</Text>
                        </View>
                      </View>
                    </ALWrapView>
                  </View>
                </WingBlank>



                <ALPlaceView height={20} />

                <WingBlank>
                  <View>
                    <Text style={{fontSize: 25}}>{this.props.route.params.workData.title}</Text>
                  </View>
                </WingBlank>

                <View>
                  {
                    workData.imageUrls.map((item, index) => {
                      return (
                        <View key={index}>
                          <ALImage src={item} />
                          {/*<FitImage source={{uri: item}} />*/}
                          {/*<Image source={{uri: item}} style={{width: ScreenUtils.getScreenWidth(), height: 200}} />*/}
                        </View>
                      )
                    })
                  }
                </View>
              </View>


            </ALPageContainer>

            <View style={[
              styles.alFlexRow,
              styles.alFlexSpaceBetween,
              styles.alPaddingTB20,
              localStyle.topBar,
              {width: ScreenUtils.getScreenWidth(), backgroundColor: this.state.offsetTop > 100 ? "#fff" : "#00000000"}
            ]}>
              <View><Text onPress={() => {this.props.navigation.goBack()}}>返回</Text></View>
              <View><Text>分享</Text></View>
            </View>
          </View>

    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    console.log("WorkDetailPage.js======================");
    // console.log(this.props.route.params.workData);

    request({
      url: `https://gitee.com/AlanLee97/dev-mock/raw/master/project/uuid-react-native-app/work/detail/ui-work-detail-id-${this.props.route.params.workData.id}.json`,
      method: 'GET',
      data: {}
    }).then(res => {
      // console.log(res.data.data);
      this.setState({workData: res.data.data});
    }).catch(err => {
      console.log(err);
    });
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

}


export default WorkDetailPage;

// 样式
const localStyle = {
  textColorBlue: {
    color: "blue"
  },
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  followBox: {
    padding: 8,
    width: 80,
    textAlign: "center",
    borderRadius: 100,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#409EFF"
  },
  followText: {
    textAlign: "center",
    color: "#409EFF"
  },
  topBar: {
    position: "absolute",
    zIndex: 1000,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    backgroundColor: "#fff"
  }
}
