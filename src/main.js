// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import iView from 'iview'
import router from './router'
import VueI18n from 'vue-i18n'

import util from './utils/util';

import zh from './i18n/zh'
import en from './i18n/en'
import config from './config.js'

import 'iview/dist/styles/iview.css';

Vue.use(Vuex)
Vue.use(VueI18n)
Vue.use(iView, {locale: util.iViewLocal[config.default_language]})

Vue.config.productionTip = false

// 语言包配置
const messages = {
  'en-US': {
    message: en
  },
  'zh-CN': {
    message: zh
  }
}
const i18n = new VueI18n({
  locale: config.default_language,
  messages
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App }
})
