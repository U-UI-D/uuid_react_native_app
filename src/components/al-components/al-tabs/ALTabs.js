import React, {PureComponent} from 'react';
import {SafeAreaView, Dimensions, StyleSheet,} from 'react-native';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';
import styles from '../../../style/styles';
const screenWidth = Dimensions.get('window').width;

export default class ALTabs extends PureComponent {
  // 默认属性
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      index: 0,
      routes: [],
    };
  }

  // 渲染
  render() {

    const sceneMap = this.props.sceneMap;

    return (
      <SafeAreaView style={{flex: 1}}>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap(sceneMap)}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: screenWidth}}
          renderTabBar={props =>
            <TabBar
              {...props}
              style={this.props.tabBarStyle ?? localStyle.tabBarStyle}
              getLabelText={({route}) => route.title}
              labelStyle={this.props.labelStyle ?? localStyle.labelStyle}
              tabStyle={{height: 44}}
              indicatorStyle={this.props.borderStyle ?? [localStyle.borderStyle, {marginLeft: (screenWidth / this.props.tabs.length) / 2 - 10}]}
              activeColor={this.props.activeColor ?? localStyle.activeColor.color}
              inactiveColor={this.props.inactiveColor ?? localStyle.inactiveColor.color}
            />
          }
        />
      </SafeAreaView>
    );
  }

  componentDidMount() {
    this.setState({
      routes: this.props.tabs
    });
  }
}

const localStyle = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    shadowColor: '#d4d4d4',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  labelStyle: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 15,
  },
  borderStyle: {
    backgroundColor: '#409EFF',
    width: 20,
    borderRadius: 10,
    marginBottom: 5,
  },
  activeColor: {
    color: "#409EFF"
  },
  inactiveColor: {
    color: "#C0C4CC"
  }
});
