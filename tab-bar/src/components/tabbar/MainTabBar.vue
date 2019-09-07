<template>
    <div>
        <tab-bar>
            <tab-bar-item path='/home' activeColor="#DB639B">
                <img slot="item-icon" src="../../assets/img/tabbar/首页.svg" alt="">
                <img slot="item-icon-active" src="../../assets/img/tabbar/首页active.svg" alt="">
                <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item path='/category'>
                <img slot="item-icon" src="../../assets/img/tabbar/分类.svg" alt="">
                <img slot="item-icon-active" src="../../assets/img/tabbar/分类active.svg" alt="">
                <div slot="item-text">分类</div>

            </tab-bar-item>
            <tab-bar-item path='/cart'>
                <img slot="item-icon" src="../../assets/img/tabbar/购物车.svg" alt="">
                <img slot="item-icon-active" src="../../assets/img/tabbar/购物车active.svg" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
            <tab-bar-item path='/profile'>
                <img slot="item-icon" src="../../assets/img/tabbar/我的.svg" alt="">
                <img slot="item-icon-active" src="../../assets/img/tabbar/我的active.svg" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
            </tab-bar>
    </div>
</template>
<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'

export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem,
    }
    
}
</script>
<style scoped>
    
</style>