import {View, StyleSheet} from 'react-native';
import {Flex} from '@ant-design/react-native';
import {ALImage, ALPlaceView, ALTapView} from '../../../../../components/al-components/ALComponent';
import RouteConst from '../../../../../router/RouteConst';
import ALText from '../../../../../components/al-components/al-text/ALText';
import {Button} from 'beeshell';
import React from 'react';

function UserBox(props) {
  const {data} = props;
  return (
    <View style={props.style}>
      <Flex justify="between">
        <Flex justify="between" >
          <ALTapView onPress={() => {
            props.navigation.navigate(RouteConst.user.VISITOR_PROFILE_PAGE)
          }}>
            <ALImage size={60} round src={data.avatar} />
          </ALTapView>

          <Flex direction="column" align="start" justify="between" style={{marginLeft: 10, alignSelf: "stretch"}}>
            <ALText hNum={5}>{data.nickname}</ALText>
            <ALText type="desc" hNum={6} >UI设计师</ALText>
            <ALText style={{fontSize: 10}}>作品 · 12   粉丝 · 4325</ALText>
          </Flex>
        </Flex>

        <Button type="default" size="sm" textStyle={{fontSize: 10}} style={[localStyle.btnStyle, {width: 50}]}>关注</Button>
      </Flex>

      <ALPlaceView height={20} />

      <Flex justify="between">
        <ALImage src={require('../../../../../assets/image/user/poster1.png')} width={112} height={90} radius={4} />
        <ALImage src={require('../../../../../assets/image/user/poster2.png')} width={112} height={90} radius={4} />
        <ALImage src={require('../../../../../assets/image/user/poster3.png')} width={112} height={90} radius={4} />
      </Flex>
    </View>
  )
}

export default UserBox;

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
