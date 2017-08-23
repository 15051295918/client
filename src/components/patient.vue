<template>
    <div>
        <el-row>
            <el-col class="topInformation topFontSize" :span="18"><div class="grid-content bg-purple">协和用户交互系统</div></el-col>
            <el-col class="topInformation topFontSize" :span="6"><div class="grid-content bg-purple-light">点击退出</div></el-col>
        </el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="个人信息" name="first">
                <personal-information></personal-information>
            </el-tab-pane>
            <el-tab-pane label="病史登记" name="second">
                <case-history></case-history>
            </el-tab-pane>
            <el-tab-pane label="留言咨询" name="third">
                <Message></Message>
            </el-tab-pane>
            <el-tab-pane label="活动详情" name="fourth">
                <Activity></Activity>
            </el-tab-pane>
        </el-tabs>
    </div>    
</template>

<script>

    import personalInformation from './personal-information'
    import caseHistory from './case-history'
    import message from './message'
    import activity from './activity'

    export default {
        name: 'hello',
        data () {
            return {
                activeName: 'first',
                id: '未知',
                sex: '未知',
                birthday: '未知',
                ethnic: '未知',
                address: '未知',
                phone: '未知',
                email: '未知',
            }
        },
        methods: {
            handleClick: function(tab,e) {
            }
        },

        components: {
            "personal-information": personalInformation,
            'case-history': caseHistory, 
            'Message':  message,
            'Activity': activity
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
    .personalInformationBox{
        width: 80%;
        height:300px;
        background: red;
    }
    </style>
