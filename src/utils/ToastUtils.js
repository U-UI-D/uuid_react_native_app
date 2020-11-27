import {ToastAndroid} from 'react-native';


export const ToastUtils = {
  success(msg){
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }
}
