<template>
  <div class="buycar"> 
    <ul class="row">
     <li class="col-sm-2 col-xs-2 col-md-2" >商品信息</li>
     <li class="col-sm-2 col-xs-2 col-md-2" >尺码/颜色</li>
     <li class="col-sm-1 col-xs-1 col-md-1" >吊牌价</li>
     <li class="col-sm-2 col-xs-2 col-md-2" >数量</li>
     <li class="col-sm-1 col-xs-1 col-md-1" >折扣</li>
     <li class="col-sm-2 col-xs-2 col-md-2" >总金额</li>
     <li class="col-sm-2 col-xs-2 col-md-2" >操作</li>
    </ul>
    <!-- {{selectedCloth}} -->
        <div v-if="items.length!=0" class="hasCloth" >
        <ul class="clothBox row"  v-for="item in items" :key='item.id' >
            <li class="col-sm-2 col-xs-2 col-md-2" >
                <label ><input type="checkbox" v-model="selectedCloth" :value="item.id" @change="item.checked=!item.checked"/>{{item.name}}</label>
                <img class="clothPic" src="@/assets/logo.png" alt="">
            </li> 
            <li class="col-sm-2 col-xs-2 col-md-2" >{{item.colorSize}}</li>
            <li class="col-sm-1 col-xs-1 col-md-1" >{{item.price}}</li>
            <li class="col-sm-2 col-xs-2 col-md-2" >
                <button @click='sub(item)' role="button">-</button>
                {{item.number}}
               <button @click='add(item)' role="button">+</button>
            </li>
            <li class="col-sm-1 col-xs-1 col-md-1" >{{item.count}}</li>
            <li class="col-sm-2 col-xs-2 col-md-2" >{{(parseInt(item.price)*parseInt(item.number)*parseFloat(item.count)).toFixed(2)}}</li>
            <li class="col-sm-2 col-xs-2 col-md-2" ><button class="btn btn-danger" @click='del(item)' size='mini' >删除</button></li>
        </ul>
    </div>
    <div v-else>
    购物车没有商品，快去逛逛吧~
    </div>
    <div class="total-cloth">
        <div class="total-choose"><label><input type="checkbox" v-model="allChecked" @change="getAllChecked">全选</label></div>
        <div id="has-choose">已选商品{{totalCount}} 件</div>
        <div id="total-monery">共计:{{totalMoney}} 元</div>
    </div>
  </div>

</template>

<script>
import bus from "@/assets/bus.js"
import { mapMutations,mapActions } from 'vuex';
export default {
    data() {
        return {
            // message:'hello buycar'
            items:[],
            allChecked:false,
            // items: getItems,
            hasCloth:true,
            totalCount:0,
            totalMoney:0,
            selectedCloth:[],
        }
    },
    
    methods: {
        
        sub(item){
            if(item.number==1){
                let flag=confirm('只有一件，确定移出该宝贝吗？？');
                if(flag){
                    this.del(item)
                }
                item.number=1
            }else if(item.number==0)return 
            else {
                item.number--
                this.getTotalCount()
                }
        },
        add(item){
            item.number++
            this.getTotalCount()
        },
        del(item){
            let index = this.items.findIndex(cloth=>{
                return cloth.id===item.id
            })
            this.items.splice(index,1);
            this.getTotalCount()
        },
        getItems(){
          let itemsArr=[
                {id:'1', name:'款式1',colorSize:'red-s',price:'200',number:'1',count:'0.5',total:''},
                {id:'2', name:'款式2',colorSize:'yellow-m',price:'100',number:'1',count:'0.5',total:''},
                {id:'3', name:'款式3',colorSize:'green-l',price:'230',number:'2',count:'0.7',total:''},
                {id:'4', name:'款式4',colorSize:'pink-xl',price:'340',number:'1',count:'0.5',total:''},
                {id:'5', name:'款式5',colorSize:'blue-xxl',price:'203',number:'2',count:'0.9',total:''},
                {id:'6', name:'款式6',colorSize:'blue-xxl',price:'203',number:'2',count:'0.8',total:''},

            ]
            itemsArr.forEach(item=>{
                item.checked=false
            })
            this.items=itemsArr
            // alert('ff')
        },
        getTotalCount(){
           let totalCount=0,
                totalMoney=0
            this.items.forEach(item=>{
                if(item.checked){
                    totalCount+=parseInt(item.number)
                    totalMoney+=parseInt(item.price)*parseInt(item.number)*parseFloat(item.count)
                    // alert('dd')
                }
            })
            this.totalCount=totalCount
            this.totalMoney=totalMoney.toFixed(2)
          
        },
        getAllChecked(){
            let selectedCloth=[]
            if(this.allChecked){
                this.items.forEach(item=>{
                    item.checked=true
                    selectedCloth.push(item.id)
                })
                this.selectedCloth=selectedCloth
            }else{
                this.items.forEach(item=>{
                    item.checked=false
                })
                this.selectedCloth=[]
            }
            this.getTotalCount()
        },
        ...mapMutations(["totalCountsChange"]),
        ...mapActions(["totalCountsChangeAction"])
        

    },
     created() {
        this.getItems()
       
    },
    watch: {
        selectedCloth(){
            if(this.selectedCloth.length==this.items.length){
                this.allChecked=true
            }else{
                this.allChecked=false
            }
            // alert('gg') 
            this.getTotalCount()
        },
        items:{
            handler(){
                let count=0
                this.items.forEach(item=>{
                count+=parseInt(item.number)
                })
                // bus.$emit("totalCountsChange",count)
                // this.$store.commit("totalCountsChange", count);
                // this.totalCountsChange(count)
                this.totalCountsChangeAction(count)
                
            },
            deep:true
        }
       
    },
    

    
}
</script>

<style scoped>
    div {
        position: relative;
        /* box-sizing: border-box; */
        /* color:black; */
    }
    .clothBox{
        /* display: table-cell; */
        vertical-align: middle;
    }
    .clothPic{
        width: 60px;
        height: 100px;
    }
    ul{
        padding-left: 0px;
    }
    li{
        list-style: none;
    }
  div .total-cloth{
    position: fixed;
    /* float: left; */
    width: 100%;
    padding: 1em 0;
    background: #F8F8F8;
    color: #777777;
    bottom: 0em;
    left: 0em;
  }
  .total-cloth div{
      position: relative;
      display: inline;  
  }
  .total-choose {
      /* position: relative; */
      float: left;
      margin-left: 3%;
  }
  #total-monery{
      float: right;
      margin-right:8em;
  }
 
</style> 
    
