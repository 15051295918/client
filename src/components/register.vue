<template>
    <div>
        <el-row>
            <el-col class="topInformation topFontSize" :span="18"><div class="grid-content bg-purple">协和用户交互系统</div></el-col>
            <el-col class="topInformation" :span="6"><div class="grid-content bg-purple-light">
                <router-link  class="returnFont" to="./login">
                    点击返回登录
                </router-link>
            </div></el-col>
        </el-row>
        <div class="form">
            <div class="type">注册</div>
            <form action="/api/signin" method="post">
                <div class="inputbox" style="margin-top:20px;">
                    <label>用户名称：</label>
                    <el-input class="inputInformation" @change=handleUsernameChange v-model="input1" placeholder=""></el-input>
                    <div class="prompt">{{text1}}</div>
                </div>
                <div class="inputbox">
                    <label>用户密码：</label>
                    <el-input class="inputInformation" @change=handlePasswordChange v-model="input2" placeholder=""></el-input>
                    <div class="prompt">{{text2}}</div>
                </div>
                <div class="inputbox">
                    <label class="labelStyle">用户类型：</label>
                    <el-radio class="radio" v-model="radio1" label="0">患者</el-radio>
                    <el-radio class="radio" v-model="radio1" label="1">患者家属</el-radio>
                    <el-radio class="radio" v-model="radio1" label="2">医学行业人员</el-radio>
                </div>
                <div class="inputbox">
                    <label class="labelStyle">用户性别：</label>
                    <el-radio class="radio" v-model="radio" label="0">男</el-radio>
                    <el-radio class="radio" v-model="radio" label="1">女</el-radio>
                    <el-radio class="radio" v-model="radio" label="2">其他</el-radio>
                </div>
                <div class="inputbox">
                    <label class="labelStyle">用户生日：</label>
                    <el-date-picker
                        @change=handleDataChange
                        v-model="value1"
                        type="date"
                        ref = "dataValue"
                        placeholder="选择日期"
                        :picker-options="pickerOptions0">
                    </el-date-picker>
                    <div class="prompt">{{text3}}</div>
                </div>
                <div class="inputbox">
                    <label>用户民族：</label>
                    <el-input class="inputInformation" @change=handleNationChange v-model="input3" placeholder=""></el-input>
                    <div class="prompt">{{text4}}</div>
                </div>
                <div class="inputbox">
                    <label>身份证号：</label>
                    <el-input class="inputInformation" @change=handleNumberChange v-model="input4" placeholder=""></el-input>
                    <div class="prompt">{{text5}}</div>
                </div>
                <div class="inputbox">
                    <label>用户住址：</label>
                    <el-input class="inputInformation" @change=handleAddresChange v-model="input5" placeholder=""></el-input>
                    <div class="prompt">{{text6}}</div>
                </div>
                <div class="inputbox">
                    <label>用户电话：</label>
                    <el-input class="inputInformation" @change=handlePhoneChange v-model="input6" placeholder=""></el-input>
                    <div class="prompt">{{text7}}</div>
                </div>
                <div class="inputbox">
                    <label>用户邮箱：</label>
                    <el-input class="inputInformation" @change=handleMailChange v-model="input7" placeholder=""></el-input>
                    <div class="prompt">{{text8}}</div>
                </div>
                <el-button class="btn" type="primary" @click=handleBtnclick>注册</el-button>
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
                input3: '',
                input4: '',
                input5: '',
                input6: '',
                input7: '',
                radio: '0',
                radio1: '0',
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() > Date.now() - 8.64e7;
                      }
                    },
                value1: '',
                text1: '',
                text2: '',
                text3: '',
                text4: '',
                text5: '',
                text6: '',
                text7: '',
                text8: '',
                IsUserName: false,
                IsPassword: false,
                IsNation: false,
                IsNumber: false,
                IsAddres: false,
                IsPhone: false,
                IsMail: false,
                IsDate: false
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
            //点击注册触发事件
            handleBtnclick: function() {
               //alert(typeof(this.radio1));
                //alert(this.radio1)
                //console.log(123);
                if(this.IsUserName && this.IsDate && this.IsPassword && this.IsMail && this.IsPhone && this.IsAddres && this.IsNumber && this.IsMail && this.IsNation) {
                    if(this.radio1 == "0" || this.radio1 == "1") {
                        this.$router.push({ path: "/patient" });
                    }else {
                        this.$router.push({ path:"/doctor"})
                    }
                }else {
                    alert('请确定您的所有信息输入正确！');
                }
            },
            //用户名称改变事件
            handleUsernameChange: function() {
                const username = this.input1;
                if(username === "" || !(/^1[34578]\d{9}$/.test(username))) {
                    this.text1 = "用户名格式为手机号，或您的号码已被注册";
                }else {
                    this.text1 = "验证通过";
                    this.IsUserName = true;
                }
            },
            //用户密码改变事件
            handlePasswordChange: function() {
                const password = this.input2;
                if(password === "") {
                    this.text2 = "密码格式为8到16位数字字母组合"
                }else {
                    this.text2 = "验证通过";
                    this.IsPassword = true;
                }
            },
            //用户生日改变事件
            handleDataChange: function() {
                const dataValue = this.$refs.dataValue.value;
                if(dataValue === ""){
                    this.text3 = "生日信息不能为空";
                }else {
                    this.text3 = "验证通过";
                    this.IsDate = true;
                }
            },
            //用户民族改变事件
            handleNationChange: function() {
                const nation_array = {
                    "汉族": 1,
                    "壮族": 1,
                    "满族": 1,
                    "回族": 1,
                    "苗族": 1,
                    "维吾尔族": 1,
                    "土家族": 1,
                    "黎族": 1,
                    "蒙古族": 1,
                    "藏族": 1,
                    "布依族": 1,
                    "侗族": 1,
                    "瑶族": 1,
                    "朝鲜族": 1,
                    "白族": 1,
                    "哈尼族": 1,
                    "哈萨克族": 1,
                    "黎族": 1,
                    "畲族": 1,
                    "傈僳族": 1,
                    "仡佬族": 1,
                    "东乡族": 1,
                    "高山族": 1,
                    "拉祜族": 1,
                    "水族": 1,
                    "佤族": 1,
                    "纳西族": 1,
                    "羌族": 1,
                    "土族": 1,
                    "仫佬族": 1,
                    "锡伯族": 1,
                    "柯尔克孜族": 1,
                    "达斡尔族": 1,
                    "景颇族": 1,
                    "毛南族": 1,
                    "撒拉族": 1,
                    "布朗族": 1,
                    "塔吉克族": 1,
                    "阿昌族": 1,
                    "普米族": 1,
                    "鄂温克族": 1,
                    "怒族": 1,
                    "京族": 1,
                    "基诺族": 1,
                    "德昂族": 1,
                    "保安族": 1,
                    "俄罗斯族": 1,
                    "乌孜别克族": 1,
                    "裕固族": 1,
                    "门巴族": 1,
                    "鄂伦春族": 1,
                    "独龙族": 1,
                    "塔塔尔族": 1,
                    "赫哲族": 1,
                    "珞巴族": 1,
                    "汉族": 1
                }
                const nationName = this.input3;
                if(!(nation_array[nationName])) {
                    this.text4 = "用户民族为56民族之一";
                }else {
                    this.text4 = '验证通过';
                    this.IsNation = true;
                }
            },
            //身份证号码验证
            handleNumberChange: function() {
                const number = this.input4;
                if(!(/(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(number))) {
                    this.text5 = '身份证号输入不正确';
                }else {
                    this.text5 = '验证通过';
                    this.IsNumber = true;
                }
            },
            //用户家庭住址验证
            handleAddresChange: function() {
                const addres = this.input5;
                if(addres === ""){
                    this.text6 = '用户住址不能为空';
                }else {
                    this.text6 = '验证通过';
                    this.IsAddres = true;
                }
            },
            //用户手机号码验证
            handlePhoneChange: function() {
                const phone = this.input6;
                if(phone === "" || !(/^1[34578]\d{9}$/.test(phone))) {
                    this.text7 = '手机号码不能为空';
                }else {
                    this.text7 = '验证通过';
                    this.IsPhone = true;
                }
            },
            //用户邮箱地址验证
            handleMailChange: function() {
                 const myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                 const mail = this.input7;
                 if(!(myreg.test(mail))) {
                    this.text8 = '请输入正确的邮箱';
                 }else {
                    this.text8 = '验证通过';
                    this.IsMail = true;
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
    .returnFont{
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
        border: 2px solid #1A3F2E;
        margin: 60px auto;
    }
    .inputInformation{
        width: 60%;
        margin-left: 5%;
    }
    .inputbox{
        margin-left: 40px;
        margin-bottom: 20px;
    }
    .btn{
        width: 60%;
        margin-left: 20%;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    .labelStyle{
        margin-right: 24px;
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
</style>
