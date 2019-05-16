<template>
  <div>
    <div class="userinfo">
      <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover"
      >
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover">

      <div class="userinfo-nickname" @click="bindViewTap()">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <van-cell-group>
      <van-field
        :value="username"
        required
        @blur="onChangeUsername"
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        :value="password"
        type="password"
        label="密码"
        @blur="onChangePassword"
        placeholder="请输入密码"
        required
        :border="false"
      />
      <van-field :value="area" readonly label="地方" @click="show=true" />
    </van-cell-group>

    <van-button type="primary" @click="test" block>登录</van-button>
    <van-popup :show="show" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="handleConfirm"
        @cancel="show = false"
      />
    </van-popup>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import card from '@/components/card'
import api from '@/api'
import Toast from '../../../static/vant/toast/toast.js'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      username: '',
      password: '',
      area: '杭州',
      show: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },

  components: {
    card
  },

  methods: {
    onChangeUsername (ev) {
      this.username = ev.mp.detail.value
    },
    onChangePassword (ev) {
      this.password = ev.mp.detail.value
    },
    onChange1 (ev) {
      console.log(ev.mp.detail)
    },
    bindViewTap (...ev) {
      const url = '/pages/logs/main'
      mpvue.switchTab({ url })
    },
    handleConfirm (ev) {
      this.area = ev.mp.detail.value
      this.show = false
    },
    test (ev) {
      api.test().then(res => {
        Toast.success('登录成功！')
      })
    }
  },

  created () {
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}
</style>
