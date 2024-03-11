// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import PocketBase from 'pocketbase'
// const pb = new PocketBase('http://127.0.0.1:8090')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 해당옵션을 명시하지 않을 경우 , this.$mount() function을 통해서 직접 마운트해주어야한다. 그렇지 않으면 컴파일이 중단됩니다 ^^
  router,
  components: { App },
  template: '<App/>',
  methods: {
    getList () {
      console.log('g')
    }
  }
})
