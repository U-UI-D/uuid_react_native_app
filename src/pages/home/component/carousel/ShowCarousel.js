import React from "react";
import {View, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import {Carousel} from '@ant-design/react-native';
import {ALImage} from '../../../../components/al-components/ALComponent';
import ScreenUtils from '../../../../utils/ScreenUtils';

function ShowCarousel(props){
  const {carouselList} = props;

  return (
  <View style={{paddingLeft: 20, paddingRight: 20}}>
    <Carousel autoplay infinite
              style={{
                height: 180,
                backgroundColor: '#00000000',
              }}>
      {
        carouselList.map((item, index) => {
          return (
            <ALImage key={index} src={item.imgUrl}
                     radius={20}
                     width={ScreenUtils.getScreenWidth() - 40}
                     height={180}/>
          );
        })
      }
    </Carousel>
  </View>
  );
}

// 属性类型
ShowCarousel.propTypes = {
  style: PropTypes.object
}

// 默认属性值
ShowCarousel.defaultProps = {
  style: {}
}

export default ShowCarousel;

