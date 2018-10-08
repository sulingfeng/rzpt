import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import index from '@/components/index/index'
import user from '@/components/user/user'
import apply from '@/components/apply/apply'
import message from '@/components/message/message'
import myApply from '@/components/myApply/myApply'
import log from '@/components/log/log'
import statist from '@/components/statist/statist'
import main from '@/components/main'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
        {
          path: '/index/index',
          name: 'index',
          component: index
        },
        {
          path: '/user/user',
          name: 'user',
          component: user
        },
        {
          path: '/apply/apply',
          name: 'apply',
          component: apply
        },
        {
          path: '/message/message',
          name: 'message',
          component: message
        },
        {
          path: '/myApply/myApply',
          name: 'myApply',
          component: myApply
        },
        {
          path: '/log/log',
          name: 'log',
          component: log
        },
        {
          path: '/statist/statist',
          name: 'statist',
          component: statist
        }
      ]
    }
  ]
})
