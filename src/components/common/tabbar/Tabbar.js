import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';

class Tabbar extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染函数
  render() {
    const Tab = createBottomTabNavigator();

    let screenOptions = ({route}) => ({
      tabBarIcon: ({focused}) => {
        return this.createTabBarIcon(route, focused);
      },
    });

    let tabBarOptions = {
      activeTintColor: this.props.color,
      inactiveTintColor: this.props.inactiveColor,
    };

    return (
      <Tab.Navigator backBehavior={true} screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
        {
          this.props.tabScreens.map((item, index) => {
            return <Tab.Screen key={item.key}
                               name={item.name}
                               component={item.component}
                               options={item.options}/>;
          })
        }
      </Tab.Navigator>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  createTabBarIcon = (route, focused) => {
    for (let i = 0; i < this.props.tabScreens.length; i++) {
      let item = this.props.tabScreens[i];
      if (item.name === route.name) {
        return (
          <Image key={item.name}
                 source={focused ? item.icon1 : item.icon0}
                 style={{
                   width: this.props.iconSize,
                   height: this.props.iconSize,
                 }}
          />
        );
      }
    }
  };
}

// prop类型
Tabbar.propTypes = {
  // 需要渲染的tab：数组
  tabScreens: PropTypes.array.isRequired,
  // 激活时文字的颜色
  color: PropTypes.string,
  // 未激活时文字的颜色
  inactiveColor: PropTypes.string,
  // icon大小
  iconSize: PropTypes.number,
};

// prop默认值
Tabbar.defaultProps = {
  tabScreens: [],
  color: '#000',
  inactiveColor: 'gray',
  iconSize: 30,
};

export default Tabbar;
