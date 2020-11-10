import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import styles from '../../../style/styles';
import ALImage from '../../al-components/al-image/ALImage';
import {Flex} from '@ant-design/react-native';
import {Icon} from 'beeshell';
import ALText from '../../al-components/al-text/ALText';
import {ALPlaceView} from '../../al-components/ALComponent';
import RouteConst from '../../../router/RouteConst';


class WorkBox extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    const props = this.props;
    return(
      <View style={[styles.alMarginLR20, styles.alMarginBottom30]}>
        {/*封面*/}
        <View>
          <ALImage src={this.props.data.poster} height={260} radius={10} />
        </View>
        {/*标题*/}
        <Text numberOfLines={1} style={[styles.alTextH4, styles.alMarginTB10]}>{this.props.data.title}</Text>
        {/*浏览、点赞、评论*/}
        <View style={[styles.alFlexRow, styles.alFlexSpaceBetween]}>
          <Flex>
            <Flex style={{width: 60}}>
              <Icon source={require('../../../assets/icon/icon1/look.png')} size={13} tintColor={"#cdcdcd"} />
              <Text style={localStyle.iconCountText}>{props.data.lookCount}</Text>
            </Flex>
            <Flex style={{width: 60}}>
              <Icon source={require('../../../assets/icon/icon1/like.png')} size={16} tintColor={"#cdcdcd"} />
              <Text style={localStyle.iconCountText}>{props.data.likeCount}</Text>
            </Flex>
            <Flex style={{width: 60}}>
              <Icon source={require('../../../assets/icon/icon1/comment.png')} size={16} tintColor={"#cdcdcd"} />
              <Text style={localStyle.iconCountText}>{props.data.commentCount}</Text>
            </Flex>
          </Flex>
        </View>
        {/*用户头像*/}
        <ALPlaceView height={10} />
        <Flex justify="between">
          <Flex align="center" onPress={() => {
            this.props.navigation.navigate(RouteConst.user.VISITOR_PROFILE_PAGE)
          }}>
            <ALImage src={this.props.data.avatar} round size={25} />
            <ALText hNum={5} style={{marginLeft: 10}}>{this.props.data.nickname}</ALText>
          </Flex>
          <ALText type="desc" style={{fontSize: 10}}>1小时前</ALText>
        </Flex>

        <ALPlaceView height={10} />
      </View>
    )
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }


}

export default WorkBox;

// 样式
const localStyle = StyleSheet.create({
  iconCountText: {
    color: "#cdcdcd",
    fontSize: 12,
    marginLeft: 6,
  }
});
