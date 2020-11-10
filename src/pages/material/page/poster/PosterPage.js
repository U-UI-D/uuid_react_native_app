import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {ALImage, ALPlaceView} from '../../../../components/al-components/ALComponent';
import ScreenUtils from '../../../../utils/ScreenUtils';
import {Flex, WingBlank} from '@ant-design/react-native';

class PosterPage extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {
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
    return (
        <ALPageContainer paddingTop={10}>
          <WingBlank>
            <Flex justify="between" wrap="wrap">
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
          </WingBlank>

          <ALPlaceView height={80} />
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


export default PosterPage;

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
