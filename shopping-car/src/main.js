import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import jquery from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
Vue.config.productionTip = false;
// Vue.use(ElementUI);
new Vue({
    router,
    store,
    jquery,
    render: h => h(App)
}).$mount("#app");