import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import ALPageContainer from '../../../../../../components/al-components/al-page-container/ALPageContainer';
import ALText from '../../../../../../components/al-components/al-text/ALText';
import {WingBlank} from '@ant-design/react-native';
import ScreenUtils from '../../../../../../utils/ScreenUtils';
import styles from '../../../../../../style/styles';
import {Button} from 'beeshell';
import {ALDivider, ALPlaceView} from '../../../../../../components/al-components/ALComponent';
import Actions from '../../../../../../store/actions';
import {connect} from 'react-redux';

function ModifyNicknamePage(props) {

  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [newPassword2, setNewPassword2] = useState();


  return (
    <ALPageContainer showNavBar
                     navBar={{title: ''}}
                     onPressLeft={() => {
                       props.navigation.goBack();
                     }}>
      <WingBlank>
        <View>
          <ALText type={'title'}>修改密码</ALText>
        </View>

        <View style={{
          height: ScreenUtils.getScreenHeight() - 105,
          flexDirection: "column",
          ...styles.alFlexCenter,
        }}>

          <View style={[styles.alFlexItemStretch, styles.alMarginLR20]}>

            <View style={styles.alPaddingTB20}>
              <TextInput placeholder="请输入旧密码"
                         defaultValue={oldPassword}
                         style={{fontSize: 18, padding: 0}}
                         onChangeText={(value) => {
                           console.log(value)
                         }} />
              <ALDivider marginTop={10}/>
            </View>

            <View style={styles.alPaddingTB20}>
              <TextInput placeholder="请输入新密码"
                         defaultValue={newPassword}
                         style={{fontSize: 18, padding: 0}}
                         onChangeText={(value) => {
                           console.log(value)
                         }} />
              <ALDivider marginTop={10}/>
            </View>

            <View style={styles.alPaddingTB20}>
              <TextInput placeholder="请再次输入新密码"
                         defaultValue={newPassword2}
                         style={{fontSize: 18, padding: 0}}
                         onChangeText={(value) => {
                           console.log(value)
                         }} />
              <ALDivider marginTop={10}/>
            </View>
          </View>

          <ALPlaceView height={80} />

          <Button type="info" style={styles.alBorderCapsule}>确认</Button>

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

export default connect(mapStateToProps, mapDispatchToProps)(ModifyNicknamePage);
