import React from 'react';
import {Image, View} from 'react-native';
import PropTypes from 'prop-types';


class ALImage extends React.Component {

  //构造器
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      vw: 0,
      vh: 0,
      width: 0,
      height: 0
    };
  }

  //根View的onLayout回调函数
  onLayout = (event) => {
    //获取根View的宽高，以及左上角的坐标值
    let {width, height} = event.nativeEvent.layout;
    this.setState({vw: Math.floor(width), vh: Math.floor(height)});
    this.setWH();
  }

  setWH = () => {

    // 本地图片
    if (typeof this.props.src === 'number') {
      let img = Image.resolveAssetSource(this.props.src);
      this.setState({
        width: img.width,
        height: img.height
      });
    }

    // 网络图片
    if (typeof this.props.src !== 'number') {
      Image.getSize(this.props.src,
        (width, height) => {
          this.setState({
            width: this.state.vw,
            height: Math.floor(this.state.vw/width*height),
          });
        },
        err => {
          console.log('net image err', err);
          this.setState({
            src: require("../../../assets/icon/icon1/image.png")
          });
        });
    }
  }

  // 渲染函数
  render() {
    let {src, width, height, vw, vh, defaultSrc} = this.state;
    const props = this.props;
    let iw = vw;
    let ih = Math.floor(vw / width * height);

    return (
      <View  onLayout={this.onLayout} style={{
        padding: props.padding,
        margin: props.margin,
      }}>
        <Image source={src}
               resizeMode={props.fit}
               style={{
                 width: props.size ?? (props.width ?? (iw ? iw : width)),
                 height: props.size ?? (props.height ?? (ih ? ih : height)),
                 borderRadius: props.round ? (props.size ?? props.width) : props.radius,
                 ...props.style,
               }}/>
      </View>
    );
  }


  // 生命周期函数
  //组件已挂载
  componentDidMount() {
    this.setState({
      src: (typeof this.props.src === 'number') ? this.props.src : {uri: this.props.src},
    });

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
  defaultSrc: PropTypes.oneOfType([
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
  size: PropTypes.number,
  padding: PropTypes.number,
  margin: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  onPress: PropTypes.func,
};

// prop默认值
ALImage.defaultProps = {
  fit: 'cover',
  round: false,
  style: {},
  onPress: null,
  defaultSrc: require("../../../assets/icon/icon1/image.png")
};

export default ALImage;
