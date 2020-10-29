import {Dimensions} from 'react-native';

class ScreenUtils{
  static getScreenWidth = () => {
    return Dimensions.get('window').width;
  }

  static getScreenHeight = () => {
    return Dimensions.get('window').height;
  }
}

export default ScreenUtils;
