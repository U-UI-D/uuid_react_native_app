import React from 'react';
import {View, Text, Modal, ScrollView, Animated, FlatList} from 'react-native';
import {connect} from 'react-redux';



class TestPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      headHeight:-1,
      dataSource: [
        {
          title: "1"
        },
        {
          title: "2"
        },
        {
          title: "3"
        },
        {
          title: "4"
        },

      ],

      enableScroll: true
    };
  }

  onScroll = (event) => {
    let {x, y} = event.nativeEvent.contentOffset;

    console.log('Y', y);

    if (y > 600){
      this.setState({
        enableScroll: false
      })
    }

  };

  onSubScroll = (event) => {
    let {x, y} = event.nativeEvent.contentOffset;

    console.log('onSubScroll Y', y);
    if (y === 0){
      this.setState({
        enableScroll: !this.state.enableScroll
      })
    }


  };

  // 渲染函数
  render() {

    return (
      <ScrollView onScroll={this.onScroll} nestedScrollEnabled={true}
      >
        <View style={{height: 2000}}>
          <View style={{height: 300, backgroundColor: "#c8c3ff"}} />
          <View style={{height: 300, backgroundColor: "#45e59e"}} />

          <View style={{height: 300, padding: 20}}>
            <ScrollView nestedScrollEnabled={true}
                        onScroll={this.onSubScroll}>
              <View style={{height: 300, backgroundColor: "#c8c3ff"}} />
              <View style={{height: 300, backgroundColor: "#45e59e"}} />
              <View style={{height: 300, backgroundColor: "#39d2fc"}} />
              <View style={{height: 300, backgroundColor: "#ff9090"}} />
            </ScrollView>
          </View>

          <View style={{height: 300, backgroundColor: "#39d2fc"}} />
          <View style={{height: 300, backgroundColor: "#ff9090"}} />

        </View>
      </ScrollView>

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

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateLoginState(data) {
      let action = {
        type: 'updateLoginState',
        value: data,
      };
      dispatch(action);
    },
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);

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
