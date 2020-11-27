import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import ALPageContainer from '../../../../components/al-components/al-page-container/ALPageContainer';
import {HttpRequest} from '../../../../utils/network/AxiosRequest';
import {ALImage} from '../../../../components/al-components/ALComponent';
import {Flex, WingBlank} from '@ant-design/react-native';
import ALText from '../../../../components/al-components/al-text/ALText';
import {Button, NavigationBar} from 'beeshell';

function FansPage(props) {

  const [fansList, setFansList] = useState([]);

  const {userId} = props.route.params;
  useEffect(() => {
    getFansList(userId);
  }, []);

  const getFansList = (userId) => {
    HttpRequest.get({
      // url: ApiConst.user.GET_USER_DATA_FOLLOW + userId
      url: 'http://192.168.43.83:9001/userdata/fans/uid/' + userId,
    })
      .then(res => {
        console.log(res.data.data.list);
        setFansList(res.data.data.list);
      });
  };

  return (
    <ALPageContainer navigation={props.navigation} showNavBar navBar={{
      title: "粉丝"
    }}>
      <WingBlank >
        {
          fansList.map((item, index) => {
            return (
              <View key={index}>

                <Flex justify="between">
                  <Flex>
                    <ALImage round src={item.avatar} size={70} padding={10} />
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
          })
        }
      </WingBlank>
    </ALPageContainer>
  );
}

// 属性类型
FansPage.propTypes = {
  style: PropTypes.object,
};

// 默认属性值
FansPage.defaultProps = {
  style: {},
};

export default FansPage;

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
