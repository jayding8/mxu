<template>
  <div class="login">
    <div class="login-header">
      <img src="../assets/images/login/logo.png" alt="" />
    </div>
    <div class="login-body">
      <div class="login-body-box">
        <div class="login-body-box-header">
          <div class="login-body-box-header-title">密码登录</div>
          <span class="login-body-box-header-border"></span>
        </div>
        <div class="login-body-box-body">
          <div>
            <img src="../assets/images/login/user_pre.png" alt="" />
            <input type="text" placeholder="请输入账号" autocomplete="off" />
          </div>
          <div>
            <img src="../assets/images/login/password.png" alt="" />
            <input
              type="password"
              placeholder="请输入密码"
              autocomplete="off"
            />
          </div>
          <div class="login-body-box-body-rfpwd">
            <span>
              <input type="checkbox" name="" id="" />
              <label for="">记住密码</label>
            </span>
            <span class="login-body-box-body-forgetpwd">忘记密码？</span>
          </div>
          <div class="login-body-box-body-login-button" @click="doLogin">
            登录
          </div>
          <div class="login-body-box-body-login-verify" v-if="showVerify">
            <slide-verify
              :l="30"
              :r="8"
              :w="newW"
              :h="newH"
              :imgs="imgs"
              slider-text="向右滑动"
              @success="onSuccess"
              @fail="onFail"
              @refresh="onRefresh"
            ></slide-verify>
          </div>
        </div>
        <div class="login-body-box-footer">
          <img src="../assets/images/login/mxu_logo.png" alt="" />
          <div class="login-body-box-footer-text">提供技术服务</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "",
      w: "340",
      h: "146",
      showVerify: false,
      screenWidth: document.documentElement.clientWidth,
      imgs: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.go2yd.com%2Fimage.php%3Furl%3D0Vip74xWZi&refer=http%3A%2F%2Fi1.go2yd.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645866427&t=b317cb3d81110558b858b8fdeaea043c",
      ],
    };
  },
  methods: {
    onSuccess() {
      this.msg = "login success";
      this.showVerify = false;

      this.$http.login({ a: 1, b: 2 }).then((response) => {
        console.log("login", response.data);
      }).catch(err => console.log(err));
    },
    onFail() {
      this.msg = "fail";
    },
    onRefresh() {
      this.msg = "fresh";
    },
    doLogin() {
      this.showVerify = true;
    },
  },
  computed: {
    newW() {
      return this.w * (this.screenWidth / 1920);
    },
    newH() {
      return this.h * (this.screenWidth / 1920);
    },
  },
  mounted() {
    // console.log("login", this.$http);
  },
};
</script>

<style lang="scss" scoped>
.login {
  $height: 8rem;
  width: 100%;
  height: 100%;
  .login-header {
    width: 100%;
    height: #{$height};
    background: #fff;
    display: flex;
    align-items: center;
    position: relative;
    img {
      width: 34rem;
      height: 4.4rem;
      position: absolute;
      left: 34rem;
    }
  }
  .login-body {
    background: #fff url("../assets/images/login/bg_new.png") no-repeat center;
    background-size: 100%;
    width: 100%;
    height: calc(100% - #{$height});
    height: -webkit-calc(100% - #{$height});
    display: flex;
    justify-content: center;
    align-items: center;
    .login-body-box {
      width: 46rem;
      height: 56rem;
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.3);
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      // justify-content: flex-end;
      .login-body-box-header {
        width: 34rem;
        margin-top: 5rem;
        .login-body-box-header-title {
          width: 14.6rem;
          height: 3.6rem;
          text-align: left;
          font-size: 2.4rem;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 3.3rem;
        }
        .login-body-box-header-border {
          width: 3rem;
          height: 0.2rem;
          background: #ffffff;
          border-radius: 0.2rem;
          display: block;
        }
      }
      .login-body-box-body {
        width: 34rem;
        height: calc(100% - 9.6rem - 7.4rem);
        margin-top: 5rem;
        position: relative;
        > div {
          margin-bottom: 4rem;
          position: relative;
        }
        input {
          width: 34rem;
          height: 5rem;
          background: #000000;
          border-radius: 0.4rem;
          opacity: 0.3;
          text-indent: 5rem;
          border: 0rem;
        }
        img {
          width: 3rem;
          height: 3rem;
          position: absolute;
          left: 2rem;
          top: 50%;
          transform: translate(0, -50%);
        }
        .login-body-box-body-rfpwd {
          text-align: left;
          input {
            width: 1.6rem;
            height: 1.6rem;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
            border-radius: 0.2rem;
            vertical-align: text-top;
          }
          label {
            width: 12.8rem;
            height: 2.2rem;
            font-size: 1.4rem;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: #ffffff;
            line-height: 2rem;
          }
          .login-body-box-body-forgetpwd {
            float: right;
            // width: 12.8rem;
            height: 2.2rem;
            font-size: 1.4rem;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: #cccccc;
            line-height: 2rem;
          }
        }
        .login-body-box-body-login-button {
          width: 34rem;
          height: 4.8rem;
          line-height: 4.8rem;
          background: #40a1f8;
          border-radius: 0.4rem;
          font-size: 2rem;
          font-family: PingFang-SC-Medium, PingFang-SC;
          font-weight: 500;
          color: #ffffff;
        }
        .login-body-box-body-login-verify {
          bottom: 10rem;
          position: absolute;
        }
      }
      .login-body-box-footer {
        margin-bottom: 2rem;
        .login-body-box-footer-text {
          // width: 8.4rem;
          height: 2rem;
          font-size: 1.4rem;
          font-family: PingFang-SC-Regular, PingFang-SC;
          font-weight: 400;
          color: #cccccc;
          line-height: 2rem;
        }
      }
    }
  }
}
</style>