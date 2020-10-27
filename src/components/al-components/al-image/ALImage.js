import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

class ALImage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 渲染函数
  render() {
    const props = this.props;

    return (
      <Image source={props.src !== '' ? props.src : {uri: props.url}}
             style={{
               width: props.width,
               height: props.height,
               borderRadius: props.round ? props.width : props.radius,
               ...props.style,
             }}/>
    );
  }

  // 生命周期函数
  //组件已挂载
  componentDidMount() {

  }

  //组件将要卸载时
  componentWillUnmount() {

  }


}

// prop类型
ALImage.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  fit: PropTypes.string,
  round: PropTypes.bool,
  radius: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

// prop默认值
ALImage.defaultProps = {
  src: '',
  width: 200,
  height: 200,
  fit: 'cover',
  round: false,
  style: {},
  onClick: null,
};

export default ALImage;
