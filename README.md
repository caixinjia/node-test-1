##### 运行项目
    git clone git@github.com:YuQian2015/node-test.git
    执行npm install 安装
    执行npm mongo 启动mongo数据库
    执行npm server启动node服务并连接数据库
    执行npm run dev 启动项目

##### 可能遇到的问题
    npm install --only=dev
    npm install --global webpack webpack-dev-server



##### 接口调用传参统一用JSON JSON
    请求headers---"Content-Type":"application/json"
    localhost:3000

##### 注册:/api/user/signup
    email: string
    password: string
    name: string


##### 登录:/api/user/signin
    email: string
    password: string

##### 获取用户信息:/api/protect/getUser
    id: string
    token: string

##### 完善信息:/api/protect/completeUserInfo
    id: string
    sex: string
    userType: string
    avatar: string
    userNo: string
    token: string

##### 添加文章:/api/protect/addPost
    visible:Boolean,
    source:String,
    tags: Array,
    description:String,
    content:String,
    title:String,
    cover:String,
    typeCode:String  //00未知

##### 获取文章:/api/post/getPost
    postId:string,
    userId:string

##### 点赞文章:/api/post/likePost
    postId:string,

##### 获取文章列表:/api/post/getPostList
    pageSize:Number,
    page:Number
