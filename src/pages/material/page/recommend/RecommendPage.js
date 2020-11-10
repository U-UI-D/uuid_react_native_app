import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {Carousel, Flex, WingBlank} from '@ant-design/react-native';
import {ALImage, ALPlaceView} from '../../../../components/al-components/ALComponent';
import ScreenUtils from '../../../../utils/ScreenUtils';
import {request} from '../../../../utils/network/AxiosRequest';
import ALText from '../../../../components/al-components/al-text/ALText';

class RecommendPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      carouselList: [
        {
          id: 1,
          poster: require('../../../../assets/image/user/poster1.png'),
          title: "",
          url: "",
        },
        {
          id: 2,
          poster: require('../../../../assets/image/user/poster2.png'),
          title: "",
          url: "",
        },
        {
          id: 3,
          poster: require('../../../../assets/image/user/poster3.png'),
          title: "",
          url: "",
        },
        {
          id: 4,
          poster: require('../../../../assets/image/user/poster4.png'),
          title: "",
          url: "",
        }
      ],
      wallpaperList: [],
      iconList: [
        {
          id: 1,
          url: require('../../../../assets/image/other/avatar/icon1.png'),
          title: "",
        },
        {
          id: 2,
          url: require('../../../../assets/image/other/avatar/icon2.png'),
          title: "",
        },

      ],
      posterList: [
        {
          id: 1,
          url: "https://hbimg.huabanimg.com/5497a0b6178f357489317f835dd0e5bd7eb211e338d7a-zJADoz_fw658/format/webp",
          title: "",
        },
        {
          id: 2,
          url: "https://hbimg.huabanimg.com/a288c06f5612faccdfbff4411aabf8a947fc768e134a6-K78goI_fw658/format/webp",
          title: "",
        },

      ],
    };

  }

  // 渲染函数
  render() {

    const {carouselList} = this.state;

    return (
      <ALPageContainer paddingTop={10}>
        {/*轮播图*/}
        <View style={{paddingLeft: 20, paddingRight: 20, borderRadius: 20}} onLayout={() => {
          const {toRoute} = this.props;
          if (toRoute){
            this.props.jumpTo(toRoute);
          }
        }}>
          <Carousel autoplay infinite
                    style={{
                      height: 180,
                      backgroundColor: '#00000000',
                      borderRadius: 20
                    }}>
            {
              carouselList.map((item, index) => {
                return (
                  <ALImage key={index} src={item.poster}
                           radius={20}
                           width={ScreenUtils.getScreenWidth() - 40}
                           height={180}/>
                );
              })
            }
          </Carousel>
        </View>

        <WingBlank>

          <View>
            <Flex justify="between" style={{paddingTop: 20, paddingBottom: 10}}>
              <ALText hNum={3} >壁纸</ALText>
              <ALText type="desc" color={"#aaa"} onPress={() => {
                this.props.jumpTo('wallpaper');
              }}>更多</ALText>
            </Flex>

            <Flex justify="between">
              {
                this.state.wallpaperList.map((item, index) => {
                  return (
                    <ALImage key={index}
                             src={item.url}
                             width={ScreenUtils.getScreenWidth() / 2.2}
                             height={360}
                             radius={10}  />
                  )
                })
              }
            </Flex>

          </View>
        </WingBlank>

        <WingBlank>

          <View>
            <Flex justify="between" style={{paddingTop: 20, paddingBottom: 10}}>
              <ALText hNum={3} >ICON</ALText>
              <ALText type="desc" color={"#aaa"} onPress={() => {
                this.props.jumpTo('icon');
              }}>更多</ALText>
            </Flex>

            <Flex justify="between">
              {
                this.state.iconList.map((item, index) => {
                  return (
                    <ALImage key={index}
                             src={item.url}
                             width={ScreenUtils.getScreenWidth() / 2.2}
                             height={200}
                             radius={10}  />
                  )
                })
              }
            </Flex>

          </View>
        </WingBlank>

        <WingBlank>

          <View>
            <Flex justify="between" style={{paddingTop: 20, paddingBottom: 10}}>
              <ALText hNum={3} >海报</ALText>
              <ALText type="desc" color={"#aaa"} onPress={() => {
                this.props.jumpTo('poster');
              }}>更多</ALText>
            </Flex>

            <Flex justify="between">
              {
                this.state.posterList.map((item, index) => {
                  return (
                    <ALImage key={index}
                             src={item.url}
                             width={ScreenUtils.getScreenWidth() / 2.2}
                             height={360}
                             radius={10}  />
                  )
                })
              }
            </Flex>

          </View>
        </WingBlank>


        <ALPlaceView height={80} />
      </ALPageContainer>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    const {toRoute} = this.props;
    console.log(toRoute);
    if (toRoute){
      this.props.jumpTo(toRoute);
    }

    this.getWallpaperList();
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  getWallpaperList = () => {
    let url = 'http://service.picasso.adesk.com/v1/vertical/vertical?limit=2&skip=180&adult=false&first=0&order=hot';

    request({
      url: url,
      method: 'GET',
      data: {},
    }).then(res => {
      console.log(res.data.res.vertical);
      let list = res.data.res.vertical;
      let arr = [];
      let obj = {
        id: 0,
        url: ""
      }
      list.map((item, index) => {
        obj.id = index+1;
        obj.url = item.preview;
        arr.push(obj);
        obj = {};
      })

      this.setState({
        wallpaperList: arr
      })
    }).catch(err => {
      console.log(err);
    });
  };

}


export default RecommendPage;

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
