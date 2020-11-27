//API路径常量
export const ApiConst = {
  sso: {
    //登录
    POST_LOGIN: '/sso/sso/login',
    //通过token获取用户信息
    GET_USER_BY_TOKEN: '/sso/sso/',
    //退出登录
    POST_LOGOUT: '/sso/sso/logout',
  },

  //用户接口 ============================
  user: {
    //所有用户
    GET_USER_ALL: '/user/user',
    //用户资料
    GET_USER_ID: '/user/user',
    //更新用户资料
    PUT_USER: '/user/user',
    //获取用户收藏作品
    GET_USER_DATA_FAVOR: '/user/userdata/favor-work/uid/',
    //获取用户点赞作品
    GET_USER_DATA_LIKE: '/user/userdata/like-work/uid/',
    //获取用户点赞作品
    GET_USER_DATA_FANS: '/user/userdata/fans/uid/',
    //获取用户点赞作品
    GET_USER_DATA_FOLLOW: '/user/userdata/follow/uid/',
    //查询用户名是否存在
    GET_CHECK_USER_EXIST: '/user/user/u/',
    //注册
    POST_USER_REGISTER: '/user/user/register',
    //获取首页显示的设计师
    GET_USER_DESIGNER_SHOW: '/user/user/designer/show',
    //获取推荐的设计师
    GET_DESIGNER_RECOMMEND: '/user/designer/recommend',
  },

  //作品接口 ============================
  work: {
    ui: {
      //所有ui作品
      GET_WORK_UI_ALL: '/work/work/ui',
      //ui作品详情
      GET_WORK_UI_BY_ID: '/work/work/ui/',
      //添加ui作品
      POST_WORK_UI_ADD: '/work/work/ui',
      //ui作品详情
      GET_WORK_UI_BY_USER_ID: '/work/work/ui/user/',
    },

    software: {
      //所有软件作品
      GET_WORK_SOFTWARE_ALL: '/work/work/software',
      //软件作品详情
      GET_WORK_SOFTWARE_BY_ID: '/work/work/software/',
      //添加软件作品
      POST_WORK_SOFTWARE_ADD: '/work/work/software',
    },
  },

  //轮播图接口 ===========================
  carousel: {
    GET_CAROUSEL_ALL: '/common/carousel',
  },

  //排行榜接口 ===========================
  top: {
    //设计师-排行榜
    GET_TOP_WORK: '/top/top-work',
    //设计师-排行榜
    GET_TOP_DESIGNER: '/top/top-designer',
    //设计师-排行榜
    GET_TOP_DEVELOPER: '/top/top-developer',
  },

  //商城接口 ===========================
  shop: {
    GET_SHOP_DIY_GOODS: '/shop/diy-goods-list',
  },

  //消息接口 ===========================
  message: {
    // 所有消息
    GET_MESSAGE_ALL: '/message/message-all',
    // 聊天消息接口
    GET_MESSAGE_CHAT: '/message/message-all',
  },
};






