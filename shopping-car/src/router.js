import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home,
            children: [{
                path: 'buycar',
                name: 'buycar',
                component: () =>
                    import ( /* webpackChunkName: "about" */ "@/components/buycar.vue")
            }, {
                path: "about",
                name: "about",
                component: () =>
                    import ( /* webpackChunkName: "about" */ "@/views/About.vue")
            }]
        },

    ]
});