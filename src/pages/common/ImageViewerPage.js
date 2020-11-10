import React, {useState} from 'react';
import {View, Modal, Text} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import ScreenUtils from '../../utils/ScreenUtils';

function ImageViewerPage(props) {
  const [modalShow, setModalShow] = useState(true);
  const [bgColor, setBgColor] = useState("#f6f6f6");

  const imageUrls = [];

  props.route.params.imageUrls.map((item, index) => {
    let obj = {url: ""};
    obj.url = item;
    imageUrls.push(obj);
  })


  return (
    <View>
      <Modal visible={modalShow} transparent={true}
             style={{
               width: ScreenUtils.getScreenWidth(),
               height: ScreenUtils.getScreenHeight(),
             }}
             statusBarTranslucent
             onRequestClose={() => {
               console.log("onRequestClose");
               setModalShow(false);
               props.navigation.pop();
             }}>
        <ImageViewer imageUrls={imageUrls}
                     backgroundColor={bgColor}
                     enableSwipeDown
                     enableImageZoom
                     index={props.route.params.index}
                     onCancel={() => {
                       console.log('onCancel');
                     }}
                     onClick={() => {
                       console.log('onClick');
                       setBgColor(bgColor === "#f6f6f6" ? "#000000" : "#f6f6f6")
                       console.log('bgColor', bgColor);

                     }}
                     onDoubleClick={() => {
                       console.log('onDoubleClick');
                     }}
                     onSave={() => {
                       console.log('onSave');
                     }}
                     onLongPress={(image) => {
                       console.log('onLongPress', image);
                     }}
                     onChange={(index) => {
                       console.log('onChange', index);
                     }}
                     onMove={(position) => {
                       console.log('onMove', position);
                       if (position.scale < 0.7 || position.positionY > 150) {
                         props.navigation.pop();
                         setModalShow(false);
                       }
                     }}
                     onSaveToCamera={() => {
                       console.log('onSaveToCamera');
                     }}
                     onShowModal={() => {
                       console.log('onShowModal');
                     }}


        />
      </Modal>
    </View>
  );
}

export default ImageViewerPage;
