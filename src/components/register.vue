<template>
  <div class='register'>
    <div id="box">
        <img class="sb" src="../assets/images/img2/tc806.png"/>
        <div class="box2">
            <p>用户名</p>
            <input type="text" name="name" v-model="user">
            <p>密码</p>
            <input type="password" name="password" v-model="password">
            <input type="submit" name="submi" value="注册" class="btn" @click="reg" @keyup.enter="reg">
        </div>
        <div class="box3">
            <p>
                <span>点击注册，代表同意</span>
                <span>《用户协议》</span>
            </p>
            <p>
                <span></span>
                <span></span>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
  name: '',
  data() {
    return {
        user: '',
        password: ''
    }
  },
  created() {},
  computed: {
    ...mapState(['list','userPerson'])
  },
  watch: {},
  methods: {
    ...mapMutations(['register']),
    reg() {
        let userlist = {};
        userlist.user = this.user
        userlist.password = this.password
        let a = this.list.users.some((element) => {
            return element.user == this.user
        })
        if(a){
            return alert('用户名已存在')
        }
        if(this.user == ''){
            return alert('请输入您要注册的用户名')
        }
        if(this.password == ''){
            return alert('请输入您注册用户的密码')
        }
        this.register(userlist)
        this.$router.push('login')
        alert('注册成功')
    }
  }
}
</script>

<style scoped>
.register{
    width: 100vw;
    height: 100vh;
    font-size: 12px;
    background: url("../assets/images/img2/dlbj.png") no-repeat;
    background-size: cover;
}
#box{
    position: relative;
    width:80vw;
    height: 400px;
    background-color: white;
    border-radius: 0.5rem;
    margin: 0 auto;
    top: 120px;
}
.sb{
    display: block;
    position: relative;
    height: 3rem;
    top: 2rem;
    margin: 0 auto;
}
.box2{
    position: relative;
    width: 80%;
    height: 220px;
    top:30px;
    margin: 0 auto;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
}
.box2>p{
    color:#d6d9d8;
    margin-top: 18px;
}
.box2>input{
    width:100%;
    height: 24px;
    color:#000000;
    border: none;
    border-bottom: #d6d9d8 0.8px solid;
}
.box2>input:nth-of-type(3){
    height: 3rem;
    position: relative;
    background: #58d68d;
    border-radius: 0.5rem;
    color: white;
    top: 32px;
}
.box3{
    width: 80%;
    margin-left:10%;
    font-size: 0.9rem;
}
.box3>p>span:nth-of-type(1){
    color:#d6d9d8;
}
.box3>p>span:nth-of-type(2){
    position: absolute;
    color:#58d68d;
}
.box3>p>span:nth-of-type(2)>a:hover{
    color:orangered;
}
.box3>p:nth-of-type(2){
    position: relative;
    top: 16px;
    text-align: center;
}
/* .box3>p:nth-of-type(2)>span{
    position: relative;
    top:2rem;
    margin: 0 auto;
} */
.box3>p:nth-of-type(2)>span:nth-of-type(1){
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin: 6px;
    background: url("../assets/images/img2/wx2x.png") no-repeat;
    background-size: contain;
}
.box3>p:nth-of-type(2)>span:nth-of-type(2){
    display: inline-block;
    width: 3rem;
    height: 3rem;
    margin: 6px;
    background: url("../assets/images/img2/QQ@2x.png") no-repeat;
    background-size: contain;
}

</style>
