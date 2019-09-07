<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/tabbar/MainTabBar'
// new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // resolve('hello world');
//     reject('error message')
//   },1000)
// }).then(data=>{
//   console.log(data)
//   return data
// }).then(data=>{
//   console.log(data+'111')
// }).catch(error=>{
//   console.log(error)
// })

export default {
  name: 'App',
  components:{
    MainTabBar,
    }
}
</script>

<style>
@import './assets/css/base.css';

</style>
