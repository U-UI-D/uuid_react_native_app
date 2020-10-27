import React from 'react';
import {View} from 'react-native';
import styles from '../../../style/styles';

class ALDivider extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染函数
  render() {
    return (
        <View>
          {
            this.props.children ? this.props.children :
                <View>
                  {
                    this.props.slotCenter ?
                        <View style={[styles.alFlexRow, styles.alFlexCenter]}>
                          <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            height: this.props.weight ?? 0.5,
                            backgroundColor: this.props.color ?? '#eee',
                          }}/>
                          <View style={{flex: 1}}>
                            {this.props.slotCenter}
                          </View>
                          <View style={{
                            flex: 1,
                            height: this.props.weight ?? 0.5,
                            backgroundColor: this.props.color ?? '#eee',
                          }}/>
                        </View> :
                        <View style={{
                          margin: this.props.margin ?? 0,
                          width: this.props.width,
                          height: this.props.weight ?? 0.5,
                          backgroundColor: this.props.color ?? '#eeeeee'
                        }}/>
                  }
                </View>
          }
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

export default ALDivider;
