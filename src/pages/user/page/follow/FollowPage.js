import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {HttpRequest} from '../../../../utils/network/AxiosRequest';
import {ALImage} from '../../../../components/al-components/ALComponent';
import {Flex, WingBlank} from '@ant-design/react-native';
import ALText from '../../../../components/al-components/al-text/ALText';
import {Button, NavigationBar} from 'beeshell';

function FollowPage(props) {

  const [followList, setFollowList] = useState([]);

  const {userId} = props.route.params;
  useEffect(() => {
    getFollowList(userId);
  }, []);

  const getFollowList = (userId) => {
    HttpRequest.get({
      // url: ApiConst.user.GET_USER_DATA_FOLLOW + userId
      url: 'http://192.168.43.83:9001/userdata/follow/uid/' + userId,
    })
      .then(res => {
        console.log(res.data.data.list);
        setFollowList(res.data.data.list);
      });
  };

  return (
    <ALPageContainer scroll={false} showNavBar navBar={{title: "关注的人"}} navigation={props.navigation}>
      <WingBlank>

        <FlatList data={followList}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => {
                    return (
                      <View>
                        <Flex justify="between">
                          <Flex>
                            <ALImage round src={item.avatar} size={70} padding={10}/>
                            <Flex direction="column">
                              <ALText hNum={3}>{item.nickname}</ALText>
                            </Flex>
                          </Flex>

                          <Button size={'sm'} style={{borderRadius: 999}} textStyle={{fontSize: 9}}>
                            取消关注
                          </Button>
                        </Flex>
                      </View>
                    );
                  }}/>
      </WingBlank>
    </ALPageContainer>
  );
}

// 属性类型
FollowPage.propTypes = {
  style: PropTypes.object,
};

// 默认属性值
FollowPage.defaultProps = {
  style: {},
};

export default FollowPage;

// 样式
const localStyle = StyleSheet.create({
  textColorBlue: {
    color: 'blue',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
