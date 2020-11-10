import React, {useEffect, useState} from 'react';
import {request} from '../../../../utils/network/AxiosRequest';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {Flex, WingBlank} from '@ant-design/react-native';
import ALText from '../../../../components/al-components/al-text/ALText';
import RouteConst from '../../../../router/RouteConst';
import {ALImage, ALPlaceView, ALTapView} from '../../../../components/al-components/ALComponent';
import ScreenUtils from '../../../../utils/ScreenUtils';
import UserBox from '../user/component/UserBox';
import ALLoading from '../../../../components/al-components/al-loading/ALLoading';
import WorkBox from '../../../../components/common/work-box/WorkBox';
import styles from '../../../../style/styles';

function RecommendPage(props) {

  const [wallpaperList, setWallpaperList] = useState([]);
  useEffect(() => {
    getMockData();
  }, []);

  // 请求作品列表数据
  const getMockData = () => {
    // let url = React.mockPath + '/home_work_list.json';
    let url = 'http://service.picasso.adesk.com/v1/vertical/vertical?limit=2&skip=180&adult=false&first=0&order=hot';

    request({
      url: url,
      method: 'GET',
      data: {},
    }).then(res => {
      console.log(res.data.res.vertical);
      let list = res.data.res.vertical;
      let arr = [];
      let obj = {
        id: 0,
        url: ""
      }
      list.map((item, index) => {
        obj.id = index+1;
        obj.url = item.preview;
        arr.push(obj);
        obj = {};
      })

      console.log("arr", arr);
      setWallpaperList(arr);
    }).catch(err => {
      console.log(err);
    });
  };

  const iconList = [
    {
      id: 1,
      url: require('../../../../assets/image/other/avatar/icon1.png'),
      title: '',
    },
    {
      id: 2,
      url: require('../../../../assets/image/other/avatar/icon2.png'),
      title: '',
    },
    {
      id: 3,
      url: require('../../../../assets/image/other/avatar/icon3.png'),
      title: '',
    },
    {
      id: 4,
      url: require('../../../../assets/image/other/avatar/icon4.png'),
      title: '',
    },

  ];
  const posterList = [
    {
      id: 1,
      url: 'https://hbimg.huabanimg.com/5497a0b6178f357489317f835dd0e5bd7eb211e338d7a-zJADoz_fw658/format/webp',
      title: '',
    },
    {
      id: 2,
      url: 'https://hbimg.huabanimg.com/a288c06f5612faccdfbff4411aabf8a947fc768e134a6-K78goI_fw658/format/webp',
      title: '',
    },

  ];
  const designerList = {
    id: 1,
    username: "AlanLee",
    nickname: "AlanLee",
    age: 23,
    gender: "male",
    avatar: "https://gitee.com/AlanLee97/assert/raw/master/note_images/naruto.jpg",
    sign: "彪悍的人生不需要解释",
    identity: "UI设计师",
    phone: "15622282904",
    email: "1445654576@qq.com"
  };

  const HeaderComponent = (
    <>
      <View style={{backgroundColor: '#f8f8f8', paddingTop: 10, paddingBottom: 10}}>

        {/*ICON*/}
        <View style={{backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10}}>
          <WingBlank>
            <Flex justify="between" style={{paddingBottom: 10}}>
              <ALText hNum={3}>ICON</ALText>
              <ALText type="desc" color={'#aaa'} onPress={() => {
                props.navigation.navigate(RouteConst.material.MATERIAL_PAGE, {data: 'icon'});
              }}>更多</ALText>
            </Flex>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                iconList.map((item, index) => {
                  return (
                    <ALImage key={index}
                             src={item.url}
                             width={200}
                             height={140}
                             radius={10}
                             style={{
                               marginRight: 20,
                               borderColor: '#eee',
                               borderWidth: 1,
                               padding: 10,
                             }}/>
                  );
                })
              }
            </ScrollView>
          </WingBlank>
        </View>

      </View>

      <ALPlaceView height={20}/>
    </>
  );

  const insertPosterList = (
    <View style={{backgroundColor: '#f8f8f8', paddingTop: 10, paddingBottom: 10, marginBottom: 20}}>

      {/*海报*/}
      <View style={{backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10}}>
        <WingBlank>
          <Flex justify="between" style={{paddingBottom: 10}}>
            <ALText hNum={3}>海报</ALText>
            <ALText type="desc" color={'#aaa'} onPress={() => {
              props.navigation.navigate(RouteConst.material.MATERIAL_PAGE, {data: 'icon'});
            }}>更多</ALText>
          </Flex>

          <FlatList data={posterList} horizontal showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(item) => {
                      return (
                        <ALImage src={item.item.url}
                                 width={ScreenUtils.getScreenWidth() / 2.2}
                                 height={400}
                                 radius={10}
                                 style={{
                                   marginRight: 6,
                                   borderColor: '#eee',
                                   padding: 10,
                                 }}/>
                      );
                    }}/>
        </WingBlank>
      </View>

    </View>
  );

  const insertWallpaperList = (
    <View style={{backgroundColor: '#f8f8f8', paddingTop: 10, paddingBottom: 10, marginBottom: 20}}>

      {/*壁纸*/}
      <View style={{backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10}}>
        <WingBlank>
          <Flex justify="between" style={{paddingBottom: 10}}>
            <ALText hNum={3}>壁纸</ALText>
            <ALText type="desc" color={'#aaa'} onPress={() => {
              props.navigation.navigate(RouteConst.material.MATERIAL_PAGE, {data: 'icon'});
            }}>更多</ALText>
          </Flex>

          <FlatList data={wallpaperList} horizontal showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(item) => {
                      return (
                        <ALImage src={item.item.url}
                                 width={ScreenUtils.getScreenWidth() / 2.2}
                                 height={400}
                                 radius={10}
                                 style={{
                                   marginRight: 6,
                                   borderColor: '#eee',
                                   padding: 10,
                                 }}/>
                      );
                    }}/>
        </WingBlank>
      </View>

    </View>
  );

  const insertDesignerList = (
    <View style={{backgroundColor: '#f8f8f8', paddingTop: 10, paddingBottom: 10, marginBottom: 20}}>

      {/*设计师*/}
      <View style={{backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10}}>
        <WingBlank>
          <Flex justify="between" style={{paddingBottom: 10}}>
            <ALText hNum={3}>设计师</ALText>
            <ALText type="desc" color={'#aaa'} onPress={() => {
              props.navigation.navigate(RouteConst.material.MATERIAL_PAGE, {data: 'icon'});
            }}>更多</ALText>
          </Flex>

          <UserBox data={designerList} />
        </WingBlank>
      </View>

    </View>
  );


  return (
    props.workList.length === 0 ? <ALLoading/> : (
      <View>

        {/*作品列表*/}
        <FlatList ListHeaderComponent={HeaderComponent}
                  data={props.workList}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={(item) => {
                    return (
                      <View>
                        {
                          item.index === 3 ? insertPosterList : null
                        }
                        <ALTapView onPress={() => {
                          props.navigation.push(RouteConst.work.WORK_DETAIL_PAGE, {workData: item.item});
                        }}>
                          <WorkBox navigation={props.navigation} data={item.item}/>
                        </ALTapView>

                        {
                          item.index === 7 ? insertWallpaperList : null
                        }

                        {
                          item.index === 9 ? insertDesignerList : null
                        }

                      </View>
                    );
                  }}/>

        <View style={{height: 50}}>
          <Text style={[styles.alTextCenter, styles.alColorGray]}>
            到底啦~
          </Text>
        </View>
      </View>
    )
  );
}

export default RecommendPage;
