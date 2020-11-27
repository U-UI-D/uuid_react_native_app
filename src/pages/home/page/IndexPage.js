import React from 'react';
import {ScrollView} from 'react-native';
import WorkList from '../../../components/common/work-list/WorkList';

class IndexPage extends React.Component {

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
      <WorkList showRecommend navigation={props.navigation} enableScroll={props.enableScroll} />
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  onScroll = (event) => {
    let {x, y} = event.nativeEvent.contentOffset;
    // console.log('y', y);
  };


}



export default IndexPage;

// 样式
const localStyle = {
  textColorBlue: {
    color: 'blue',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
