import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {Flex, WingBlank} from '@ant-design/react-native';
import {ALImage, ALPlaceView} from '../../../../components/al-components/ALComponent';
import ScreenUtils from '../../../../utils/ScreenUtils';
import styles from '../../../../style/styles';

class IconPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      iconList: [
        {
          id: 1,
          url: require('../../../../assets/image/other/avatar/icon1.png'),
          title: '',
        },
        {
          id: 2,
          url: require('../../../../assets/image/other/avatar/icon2.png'),
          title: '',
        },
        {
          id: 3,
          url: require('../../../../assets/image/other/avatar/icon3.png'),
          title: '',
        },
        {
          id: 4,
          url: require('../../../../assets/image/other/avatar/icon4.png'),
          title: '',
        },

      ],
    };
  }

  // 渲染函数
  render() {

    const {iconList} = this.state;
    return (
      <ALPageContainer paddingTop={10}>
        <WingBlank>
          <View>
            {
              iconList.map((item, index) => {
                return (
                  <View key={index}>
                    <ALImage
                      src={item.url}
                      height={220}
                      radius={10}
                      style={{
                        marginBottom: 10,
                        borderColor: '#eee',
                        borderWidth: 1,
                        padding: 10,
                      }}/>
                  </View>
                );
              })
            }
          </View>
        </WingBlank>

        <ALPlaceView height={60} />
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


export default IconPage;

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
