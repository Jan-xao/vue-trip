<template>
  <div class="login">
    <div id="box">
      <img class="sb" src="../assets/images/img2/tc806.png"/>
      <div class="box2">
          <p>用户名</p>
          <input type="text" name="name" v-model="userName">
          <p>密码</p>
          <input type="password" name="password" v-model="passWord" @keyup.enter="login">
          <input type="submit" name="submi" value="登录" class="btn" @click="login">
      </div>
      <div class="box3">
          <p>
              <span>还没有账号？</span>
              <span><a @click="register">立即注册</a></span>
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
  name: 'login',
  data() {
    return {
        userName: '',
        passWord: ''
    }
  },
  created() {},
  computed: {
    ...mapState(['list','userPerson'])  // 要使用store中的state要在组件中的computed中引进来
  },
  watch: {},
  methods: {
    ...mapMutations(['personName']),    // 要使用store中的Mutations必须在组件中的methods中引进来
    login() {
        // 用户名存在让 a = 1
        let a =0;
        if(this.userName == ''){
            return alert('请输入用户名')
        }
        if(this.passWord == ''){
            return alert('请输入密码')
        }
        // console.log('list.users',this.list.users instanceof Array)
        this.list.users.forEach((element) => {
           if(element.user == this.userName){
               // 用户名存在让 a = 1
               a=1
               if(element.password == this.passWord){
                   window.sessionStorage.setItem('token', '123')
                   this.personName(this.userName)
                   this.$router.push('home')
                   return alert('登录成功')
               }else{
                   alert('密码错误')
               }
           }
        })
        // a 不等于 1 用户名则不存在
        if(a !==1){
            alert('用户名不存在')
        }


        // console.log(this.list.includes(this.userName))
    //   this.$router.push('home')
    },
    register() {
      this.$router.push('register')
    }
  }
}

</script>

<style scoped>
.login{
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
.box3>p>span:nth-of-type(2)>a{
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
