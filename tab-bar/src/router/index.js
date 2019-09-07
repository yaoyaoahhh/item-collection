/*jshint esversion:6 */
import Vue from 'vue'
import Router from 'vue-router'
// import TarBar from './assets/components/tab-bar/TabBar'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const Home = () =>
    import ('../views/home/Home')
const Category = () =>
    import ('../views/category/Category')
const Cart = () =>
    import ('../views/cart/Cart')
const Profile = () =>
    import ('../views/profile/Profile')

export default new Router({
    mode: 'history',
    routes: [{
            path: '',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/category',
            component: Category,
        },
        {
            path: '/cart',
            component: Cart,
        },
        {
            path: '/profile',
            component: Profile,
        },

    ]
})