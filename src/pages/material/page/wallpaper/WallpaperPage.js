import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {Flex, WingBlank} from '@ant-design/react-native';
import {ALImage, ALPlaceView, ALTapView} from '../../../../components/al-components/ALComponent';
import ScreenUtils from '../../../../utils/ScreenUtils';
import {request} from '../../../../utils/network/AxiosRequest';
import RouteConst from '../../../../router/RouteConst';

class WallpaperPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      wallpaperList: [],
    };
  }

  // 渲染函数
  render() {
    return (
        <ALPageContainer paddingTop={10}>
          <WingBlank>
            <Flex justify="between" wrap="wrap">
              {
                this.state.wallpaperList.map((item, index) => {
                  return (
                    <ALTapView key={index} onPress={() => {
                      let imageUrls = [];
                      this.state.wallpaperList.map((item1) => {
                        imageUrls.push(item1.img)
                      });
                      this.props.navigation.navigate(RouteConst.other.IMAGE_VIEWER_PAGE, {imageUrls: imageUrls, index});
                    }}>
                      <ALImage src={item.img}
                               width={ScreenUtils.getScreenWidth() / 2.2}
                               height={360}
                               radius={10}
                               style={{marginBottom: 5}}  />
                    </ALTapView>
                  )
                })
              }
            </Flex>
          </WingBlank>
          <ALPlaceView height={80} />
        </ALPageContainer>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.getWallpaperList();
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  getWallpaperList = () => {
    request({
      url: 'http://service.picasso.adesk.com/v1/vertical/vertical?limit=30&skip=180&adult=false&first=0&order=hot',
      method: 'GET',
    }).then(res => {
      console.log(res);
      this.setState({
        wallpaperList: res.data.res.vertical
      })
    }).catch(err => {
      console.log(err);
    });
  }

}


export default WallpaperPage;

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
