import {createStore} from "redux";
import {reducer} from './reducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';


const persistConfig = {
  key: "Cache",
  storage: AsyncStorage
}
const _persistReducer = persistReducer(persistConfig, reducer);
const store = createStore(_persistReducer);

export const persistor = persistStore(store);

export default store;
