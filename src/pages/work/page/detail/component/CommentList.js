import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Modal} from 'react-native';
import PropTypes from 'prop-types';
import {Flex} from '@ant-design/react-native';
import {ALImage, ALPlaceView} from '../../../../../components/al-components/ALComponent';
import ALText from '../../../../../components/al-components/al-text/ALText';
import {Button, Icon} from 'beeshell';
import {connect} from 'react-redux';
import styles from '../../../../../style/styles';
import {HttpRequest} from '../../../../../utils/network/AxiosRequest';
import DateTimeUtils from '../../../../../utils/DateTimeUtils';
import ALLoading from '../../../../../components/al-components/al-loading/ALLoading';
import {CommentContext} from './CommentContext';
import {ApiConst} from '../../../../../utils/network/ApiConst';


// 回复组件
function Reply(props) {
  const {data} = props;

  return (
    <CommentContext.Consumer>
      {
        ({modalType, updateModeType, modalVisible, updateModalVisible}) => {
          return (
            <View>
              <Flex>
                <ALImage size={18} round src={data.avatar} style={{marginRight: 5}}/>
                <ALText size={13}>
                  {data.nickname}:
                  <ALText size={13} onPress={() => {
                    updateModeType('subReply');
                    updateModalVisible(!modalVisible);
                    props.onReplyChange(data);
                  }}>
                    {' ' + data.content}
                  </ALText>
                </ALText>
              </Flex>
              {
                data.subReply ? (
                  data.subReply.list.length > 0 ? (
                    data.subReply.list.map((item, index) => {
                      return (
                        <Flex key={index} align="center">
                          <ALText size={13} style={{marginTop: 6}}>
                            {item.nickname} 回复 {item.originUserNickname}:
                            <ALText size={13} onPress={() => {
                              updateModeType('subReply');
                              updateModalVisible(!modalVisible);
                              props.onReplyChange(data);
                            }}>
                              {' ' + item.content}
                            </ALText>
                          </ALText>

                        </Flex>
                      );
                    })
                  ) : null
                ) : null
              }
            </View>
          );
        }
      }
    </CommentContext.Consumer>
  );
}

// 评论组件
function Comment(props) {
  const {data} = props;
  const styles = StyleSheet.create({
    replyList: {
      marginLeft: 50,
      marginTop: 6,
      padding: 10,
      backgroundColor: '#f8f8f8',
    },
  });

  return (
    <CommentContext.Consumer>
      {
        ({modalType, updateModeType, modalVisible, updateModalVisible}) => {
          return (
            <View>
              <Flex>
                <ALImage src={data.avatar} size={40} round style={{marginRight: 10}}/>
                <Flex.Item>
                  <ALText h4>{data.nickname}</ALText>
                  <ALText type="desc" size={12}>{DateTimeUtils.getMobileEndFormerTimeFromISO(data.createdTime)}</ALText>
                </Flex.Item>
                <Icon source={require('../../../../../assets/icon/icon1/love.png')} tintColor={'#f8f8f8'} size={28}/>
              </Flex>

              {/*评论内容*/}
              <ALText size={14} style={{marginLeft: 50, marginTop: 10}}
                      onPress={() => {
                        updateModeType('reply');
                        updateModalVisible(!modalVisible);
                        props.onCommentChange(data);
                      }}>
                {data.content}
              </ALText>

              {
                data.reply.list.length > 0 ? (
                  <View style={styles.replyList}>
                    {
                      data.reply.list.map((item, index) => {
                        return (
                          <View key={index} style={{marginTop: index === 0 ? 0 : 8}}>
                            <Reply data={item} onReplyChange={props.onReplyChange}/>
                          </View>
                        );
                      })
                    }
                  </View>
                ) : null
              }
            </View>
          );
        }
      }
    </CommentContext.Consumer>
  );
}

// 评论列表
function CommentList(props) {
  useEffect(() => {
    getCommentData();
  }, []);

  const [commentData, setCommentData] = useState();
  const [comment, setComment] = useState('');
  const [currentCommentData, setCurrentCommentData] = useState();
  const [currentReplyData, setCurrentReplyData] = useState();
  const [selfModalType, setSelfModalType] = useState();

  // 获取评论数据
  const getCommentData = () => {
    HttpRequest.get({
      url: ApiConst.comment.comment.GET_COMMENT_BY_WORK_ID + props.workId,
    }).then(res => {
      setCommentData(res.data.data);
    });
  };
  // 添加评论
  const addCommentToBackend = (text) => {
    console.log('addCommentToBackend');
    HttpRequest.post({
      url: ApiConst.comment.comment.POST_COMMENT_ADD,
      data: {
        userId: props.userInfo.id,
        workId: props.workId,
        content: text,
      },
    }).then(res => {
      getCommentData();
    });
  };
  // 添加回复
  const addReplyToBackend = (text) => {
    console.log('addReplyToBackend');
    HttpRequest.post({
      url: ApiConst.comment.reply.POST_REPLY_ADD,
      data: {
        userId: props.userInfo.id,
        commentId: currentCommentData.id,
        content: text,
      },
    }).then(res => {
      console.log('post comment', res.data.data);
      getCommentData();
    });
  };
  // 添加二级回复
  const addSubReplyToBackend = (text) => {
    console.log('addSubReplyToBackend');
    console.log('currentReplyData', currentReplyData);
    HttpRequest.post({
      url: ApiConst.comment.reply.POST_REPLY_ADD,
      data: {
        userId: props.userInfo.id,
        content: text,
        mainReplyId: currentReplyData.id,
        originUserId: currentReplyData.userId,
      },
    }).then(res => {
      console.log('post comment', res.data.data);
      getCommentData();
    });
  };

  // 发表评论或回复
  const addCommentOrReply = (text, callback) => {
    if (selfModalType === 'comment') {
      addCommentToBackend(text);
    }
    if (selfModalType === 'reply') {
      addReplyToBackend(text);
    }
    if (selfModalType === 'subReply') {
      addSubReplyToBackend(text);
    }

    if (callback) {
      callback();
    }
  };
  const onCommentChange = (data) => {
    setCurrentCommentData(data);
  };
  const onReplyChange = (data) => {
    setCurrentReplyData(data);
  };
  const styles = StyleSheet.create({
    modalWindow: {
      backgroundColor: 'rgba(0,0,0,.2)',
      flex: 1,
      position: 'relative',
    },
    inputAreaBox: {
      position: 'absolute',
      bottom: 0,
      backgroundColor: '#fff',
    },
  });

  return (
    <View>
      <CommentContext.Consumer>
        {
          ({modalType, updateModeType, modalVisible, updateModalVisible}) => {
            return (
              <View>
                {/*评论弹框*/}
                <Modal
                  statusBarTranslucent={false}
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onShow={() => {
                    console.log('onShow type', modalType);
                    setSelfModalType(modalType);
                  }}
                  onRequestClose={() => {
                    console.log('onRequestClose');
                  }}
                >
                  <View style={styles.modalWindow}>
                    {/*空白地方*/}
                    <Flex.Item onPress={() => {
                      updateModalVisible(!modalVisible);
                      updateModeType('comment');
                      setComment('');
                    }}/>
                    {/*输入框区域*/}
                    <Flex style={styles.inputAreaBox}>
                      <Flex.Item>
                        <TextInput placeholder={'期待你的神评~'}
                                   selectionColor={'#188afa'}
                                   style={{
                                     padding: 10,
                                   }}
                                   onChangeText={text => {
                                     setComment(text);
                                   }}/>
                      </Flex.Item>
                      <Button size="sm" type="info" disabled={comment.length === 0}
                              onPress={() => {
                                addCommentOrReply(comment, () => {
                                  updateModalVisible(!modalVisible);
                                  setComment('');
                                });
                              }}
                      >
                        {modalType === 'comment' ? '发送' : '回复'}
                      </Button>
                      <ALPlaceView width={10}/>
                    </Flex>
                  </View>
                </Modal>

                {/*评论列表*/}
                <View>
                  {
                    commentData ? (
                      commentData.list.length === 0 ?
                        <ALLoading height={100}/>
                        :
                        commentData.list.map((item, index) => {
                          return (
                            <View key={index} style={{marginTop: 18}}>
                              <Comment data={item} onCommentChange={onCommentChange} onReplyChange={onReplyChange}/>
                            </View>
                          );
                        })
                    ) : null
                  }
                </View>
              </View>
            );
          }
        }
      </CommentContext.Consumer>
    </View>
  );
}

// 属性类型
CommentList.propTypes = {
  style: PropTypes.object,
};

// 默认属性值
CommentList.defaultProps = {
  style: {},
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};


export default connect(mapStateToProps)(CommentList);

