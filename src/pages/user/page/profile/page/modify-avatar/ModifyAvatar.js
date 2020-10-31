import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import ALPageContainer from '../../../../../../components/al-components/al-page-container/ALPageContainer';
import ALText from '../../../../../../components/al-components/al-text/ALText';
import {WingBlank} from '@ant-design/react-native';
import ScreenUtils from '../../../../../../utils/ScreenUtils';
import styles from '../../../../../../style/styles';
import {Button} from 'beeshell';
import {ALDivider, ALImage, ALPlaceView} from '../../../../../../components/al-components/ALComponent';
import Actions from '../../../../../../store/actions';
import {connect} from 'react-redux';

function ModifyAvatar(props) {

  const [avatar, setAvatar] = useState(props.userInfo.avatar);

  return (
    <ALPageContainer showNavBar
                     navBar={{title: ''}}
                     onPressLeft={() => {
                       props.navigation.goBack();
                     }}>
      <WingBlank>
        <View>
          <ALText type={'title'}>修改头像</ALText>
        </View>

        <View style={{
          height: ScreenUtils.getScreenHeight() - 105,
          flexDirection: "column",
          ...styles.alFlexCenter,
        }}>

          <ALImage size={120} round src={avatar} />

          <ALPlaceView height={20} />
          <ALText type={"desc"}>当前头像</ALText>

          <ALPlaceView height={80} />

          <Button type="info" style={styles.alBorderCapsule}>选择头像上传</Button>

        </View>
      </WingBlank>
    </ALPageContainer>
  );

}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserInfo(data) {
      let action = {
        type: Actions.UPDATE_USERINFO,
        value: data,
      };
      dispatch(action);
    },
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyAvatar);
