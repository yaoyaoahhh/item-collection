<template>
    <div class="tar-bar-item" @click="clickItem">
        <div v-if="!isActive"><slot name='item-icon'></slot></div>
        <div v-else><slot name='item-icon-active'></slot></div>
        <div :style="activeStyle"><slot name='item-text'></slot></div>
        
    </div>
</template>
<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'#DB639B'
        }
    },
    data() {
        return {
            // isActive:false,
        }
    },
    methods: {
        clickItem(){
            this.$router.push(this.path)
        },
        
    },
    computed: {
        isActive(){
            return this.$route.path.includes(this.path)
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
}
</script>
<style scoped>
.tar-bar-item{
        flex:1;
        text-align: center;
        font-size: 14px;
    }
    .tar-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
        margin-bottom: 2px;
    }
    /* .active{
    //     color:#DB639B;
     }*/
</style>