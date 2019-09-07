/*jshint esversion:6*/
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        totalCounts: 10,
        userInfo: {
            name: 'plm',
            age: 20
        }
    },
    mutations: {
        totalCountsChange(state, num) {
            state.totalCounts = num;
        }
    },
    actions: {
        totalCountsChangeAction({ commit }, num) {
            setTimeout(() => {
                commit("totalCountsChange", num);
            }, 1000);
        }
    },
    getters: {
        userName(state) {
            return state.userInfo.name;
        }
    }
});