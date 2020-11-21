import React from 'react';
import {View, Text, Modal, ScrollView, Animated, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {HttpRequest} from '../../utils/network/AxiosRequest';
import {ApiConst} from '../../utils/network/ApiConst';



class TestPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      carouselList: []
    };
  }



  // 渲染函数
  render() {

    return (
      <ScrollView>

        <View>
          <Text>
          </Text>
        </View>

      </ScrollView>

    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    console.log("============== TestPage ===============");
    this.getCarouselList();
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  getCarouselList = () => {
    HttpRequest.get({url: ApiConst.carousel.GET_CAROUSEL_ALL})
      .then(res => {
        this.setState({
          carouselList: res.data,
        });
      });
  };

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
