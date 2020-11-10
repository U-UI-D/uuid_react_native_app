import React, {PureComponent} from 'react';
import {SafeAreaView, Dimensions, StyleSheet,} from 'react-native';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';
import PropTypes from 'prop-types';
import ScreenUtils from '../../../utils/ScreenUtils';
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

  switchScene = ({route, jumpTo}) => {
    let tabs = this.props.tabs;
    for (let i = 0; i < tabs.length; i++) {
      if (route.key === tabs[i].key){
        return tabs[i].scene;
      }
    }
  }

  // 渲染
  render() {

    const sceneMap = this.props.sceneMap;
    const props = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <TabView
          navigationState={this.state}
          renderScene={props.renderScene ?? (props.useSceneMap ? SceneMap(sceneMap) : this.switchScene)}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: props.width, height: props.height}}
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
      index: 0,
      routes: this.props.tabs
    });
  }
}

// 属性类型
ALTabs.propTypes = {
  style: PropTypes.object,
  useSceneMap: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  switchScene: PropTypes.func,
  renderScene: PropTypes.func,
  defaultIndex: PropTypes.number,
};

// 默认属性值
ALTabs.defaultProps = {
  style: {},
  useSceneMap: true,
  width: ScreenUtils.getScreenWidth(),
  height: ScreenUtils.getScreenHeight(),
  defaultIndex: 0
};

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
