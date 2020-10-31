import React from "react";
import {View, Text} from 'react-native'
import ALImage from '../../../components/al-components/al-image/ALImage';
import styles from '../../../style/styles';

class IconTextBox extends React.Component{

  //构造器
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // 渲染函数
  render() {
    const props = this.props;
    return (
        <View style={[styles.alFlexCenter, styles.alPadding10, styles.alMargin10]}>
          <ALImage src={props.icon} size={36} />
          <Text style={{fontSize: 12}}>{props.text}</Text>
        </View>
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

export default IconTextBox;
