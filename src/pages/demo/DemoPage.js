import React from 'react';
import {ScrollView, View, Text, ToastAndroid, Image} from 'react-native';
import {Button, List, WhiteSpace, WingBlank, InputItem} from '@ant-design/react-native';
import RouteConst from '../../router/RouteConst';
import {request} from '../../utils/network/AxiosRequest';
import storage from '../../storage/storage';
import ALImage from '../../components/al-components/al-image/ALImage';


class DemoPage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      networkData: null,
      storageData: '',
      readData: null,
    };
  }


  // 渲染函数
  render() {
    return (
      <ScrollView style={{paddingTop: 30}}>
        <WingBlank>
          <Text style={localStyle.hello}>React Native示例</Text>
          <WhiteSpace/>

          {/*UI组件*/}
          <View style={localStyle.box}>
            <Text style={localStyle.title}>Ant Design UI组件</Text>

            <Button>按钮</Button>

            <List>
              <InputItem
                clear
                value={this.state.inputValue}
                onChange={inputValue => {
                  this.setState({
                    inputValue,
                  });
                }}
                placeholder="有标签"
              >
                输入框
              </InputItem>
            </List>

          </View>

          {/*自定义组件*/}
          <View style={localStyle.box}>
            <Text style={localStyle.title}>自定义组件</Text>

            <ALImage src={require('../../assets/image/rem.jpg')}/>
            <ALImage src={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603980614033&di=d351d77f02e1133d035232ef797d773d&imgtype=0&src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fphoto%2Fl%2Fpublic%2Fp2203874088.jpg"} />

          </View>

          {/*路由/页面跳转*/}
          <View style={localStyle.box}>
            <Text style={localStyle.title}>路由/页面跳转</Text>
            <Button onPress={() => {
              this.props.navigation.push(RouteConst.other.ABOUT_PAGE);
            }}>跳转到关于页面</Button>
            <WhiteSpace/>
            <Button type="primary"
                    onPress={() => {
                      this.props.navigation.push(RouteConst.other.ABOUT_PAGE, {id: 1});
                    }}>带参数跳转到关于页面</Button>
          </View>

          {/*网络*/}
          <View style={localStyle.box}>
            <Text style={localStyle.title}>网络</Text>

            <Button type="primary" onPress={() => {
              this.getNetworkData();
            }}>获取网络数据</Button>
            <WhiteSpace/>
            <ScrollView>
              <Text style={{backgroundColor: '#efefef', padding: 10, borderRadius: 6}}>
                {
                  this.state.networkData === null ? '展示网络数据结果' : JSON.stringify(this.state.networkData)
                }
              </Text>
            </ScrollView>
          </View>

          {/*数据存储*/}
          <View style={localStyle.box}>
            <Text style={localStyle.title}>数据存储</Text>

            <List>
              <InputItem
                value={this.state.storageData}
                onChange={storageData => {
                  this.setState({
                    storageData,
                  });
                }}
                placeholder="输入数据"
              >
                输入框
              </InputItem>
            </List>
            <WhiteSpace/>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button type="primary" onPress={() => {
                storage.save({
                  key: 'storageData',
                  data: this.state.storageData,
                }).then(res => {
                  console.log('save success');
                  ToastAndroid.show('保存成功', ToastAndroid.SHORT);
                }).catch(err => {
                  console.log('save failed');
                  ToastAndroid.show('保存失败', ToastAndroid.SHORT);
                });
              }}>保存数据</Button>
              <Button onPress={() => {
                storage.load({
                  key: 'storageData',
                }).then(res => {
                  console.log('load data', res);
                  this.setState({
                    readData: res,
                  });
                  ToastAndroid.show('读取成功', ToastAndroid.SHORT);
                }).catch(err => {
                  console.log('load storage data error');
                  ToastAndroid.show('读取失败', ToastAndroid.SHORT);
                });
              }}>读取数据</Button>
              <Button type="warning" onPress={() => {
                storage.remove({
                  key: 'storageData',
                }).then(res => {
                  this.setState({
                    readData: null,
                    storageData: null,
                  });
                  ToastAndroid.show('删除成功', ToastAndroid.SHORT);
                }).catch(err => {
                  ToastAndroid.show('删除失败', ToastAndroid.SHORT);
                });
              }}>删除数据</Button>
            </View>
            <WhiteSpace/>
            <Text style={{backgroundColor: '#efefef', padding: 10, borderRadius: 6}}>
              {
                this.state.readData === null ? '展示存储的数据' : this.state.readData
              }
            </Text>


          </View>

          <View style={{height: 50}}></View>
        </WingBlank>
      </ScrollView>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    let img = require('../../assets/image/sample.png');
    let src = Image.resolveAssetSource(img);
    console.log("image src", src);
  }

  //组件将要卸载时
  componentWillUnmount() {

  }

  // 获取网络数据
  getNetworkData = () => {
    request({
      url: 'http://192.168.0.8:8764/api/v1/work/work/ui/257',
      method: 'GET',
      data: {},
    }).then(res => {
      console.log(res);
      this.setState({
        networkData: res.data,
      });
    }).catch(err => {
      console.log(err);
    });
  };

}


export default DemoPage;

// 样式
const localStyle = {
  hello: {
    color: '#5eb3f6',
    fontSize: 22,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
};
