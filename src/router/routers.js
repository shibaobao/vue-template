import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Register from '@/components/Register'

export default [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/user/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/user/register',
    name: 'Register',
    component: Register
  }
]
