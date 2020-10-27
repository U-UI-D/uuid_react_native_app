import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import routes from "./routes";
import {StatusBar, View} from 'react-native';

function RouterView() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        {/*设置状态栏（透明）*/}
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" barStyle={'dark-content'}/>

        <Stack.Navigator>
          {
            routes.map((item, index) => {
              return (<Stack.Screen key={item.name} name={item.name} component={item.component} options={item.options} />)
            })
          }

        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default RouterView;
