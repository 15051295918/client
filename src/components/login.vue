<template>
    <div>
        <el-row>
            <el-col class="topInformation topFontSize" :span="18"><div class="grid-content bg-purple">协和用户交互系统</div></el-col>
            <el-col class="topInformation" :span="6"><div class="grid-content bg-purple-light">{{loginMsg}}</div></el-col>
        </el-row>
        <div class="form">
            <div class="type">登录</div>
            <form action="/api/login" method="post">
                <el-input class="inputInformation" @change=handleUsernameBlur v-model="input1" placeholder="请输入用户名称"></el-input>
                <div class="prompt">{{text1}}</div>
                <el-input class="inputInformation" @change=handlePasswordBlur v-model="input2" placeholder="请输入用户密码"></el-input>
                <div class="prompt">{{text2}}</div>
                <div class="linkTo">
                    <router-link  to="./register">
                        注册账号
                    </router-link>
                </div>
                <el-button class="btn" :disabled=Islogin type="primary" @click=handleBtnclick>登录</el-button>
            </form>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                loginMsg:'未登录',
                input1: '',
                input2: '',
                isUsername: false,
                isPassword: false,
                Islogin: true,
                text1:'',
                text2:''
            }
        },
        //在页面创造之前获取数据
        created: function() {
            this.axios.post('/api/Login')
            .then(function(res) {
                console.log(res)
            })
            .catch(function(err) {
                console.log(err)
            })
        },

        methods: {
            //点击登录
            handleBtnclick: function() {
                const this_ = this;
                const reg1 = "^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$";
                const username = this.input1;
                const password = this.input2;
                alert(123);
            },
            //用户名失焦时间
            handleUsernameBlur: function()  {
                const username = this.input1;
                if(username === "" || !(/^1[3|4|5|7|8][0-9]{9}$/.test(username))) {
                    this.text1 = "用户名不能为空，并且为注册时的手机号"
                } else {
                    //点击登录后isUsername要改为false
                    this.isUsername = true;
                    this.text1 = "";
                    if(this.isUsername && this.isPassword) {
                        this.Islogin = false;
                    }
                }
            },
            //用户密码失焦事件
            handlePasswordBlur: function() {
                const password = this.input2;
                if(!(/^[A-Za-z0-9]{8,18}$/.test(password))) {
                    this.text2 = "密码不能为空，并且为6-8位子母数组组成"
                    //alert('密码不能为空，并且为6-8位子母数组组成')
                } else {
                    this.isPassword = true;
                    this.text2 = "";
                    if(this.isUsername && this.isPassword) {
                        this.Islogin = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .topInformation{
        height: 60px;
        text-align: center;
        line-height: 60px;
        background: #1A3F2E;
    }
    .topFontSize{
        font-size: 20px;
        font-weight: 900;
        color: #fff;
    }
    .type{
        width: 100%;
        height: 20%;
        text-align: center;
        line-height: 60px;
        border-bottom: 2px solid #1A3F2E;
        background: #1A3F2E;
        font-size: 20px;
        font-weight: 900;
        color: #fff;
    }
    .form{
        width: 40%;
        height: 330px;
        border: 2px solid #1A3F2E;
        margin: 60px auto;

    }
    .inputInformation{
        width: 60%;
        margin-left: 20%;
        margin-top: 3%;
    }
    .prompt{
        width: 50%;
        margin-left: 20%;
        margin-top: 10px;
        text-align: center;
        color: red;
        font-weight: 900;
        border: none;
        font-size: 12px;
        height: 12px;
    }
    .linkTo{
        margin-top: 20px;
        margin-left: 305px;
    }
    .btn{
        width: 60%;
        margin-left: 20%;
        margin-top: 5%;
    }
</style>
