<template>
<!--  -->
  <div class="home">
    <Nav></Nav>
    <!-- <router-view></router-view> -->
    <div class="container-fluid">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/views/Nav.vue";

 
export default {
  name: "home",
  components: {
   Nav
  }
};
</script>
<style>
.home{
  position: relative;
}
footer ul {
  width: 100%;
  /* height: 100%; */
}
li {
  list-style: none;

}

</style>