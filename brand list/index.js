/*jshint esversion:6*/
//自定义全局过滤器
Vue.filter('timeFormat', function(time, pattern = ('')) {
    let times = new Date(time),
        y = times.getFullYear(),
        m = (times.getMonth() + 1).toString().padStart(2, '0'),
        d = times.getDate().toString().padStart(2, '0');
    if (pattern.toLowerCase() === "yyyy-mm-dd") {
        return `${y}-${m}-${d}`;
    } else {
        let h = times.getHours().toString().padStart(2, '0'),
            min = times.getMinutes().toString().padStart(2, '0'),
            s = times.getSeconds().toString().padStart(2, '0');
        return `${y}-${m}-${d} ${h}:${min}:${s}`;
    }

});

//自定义全局键盘事件修饰符
Vue.config.keyCodes.f2 = 113;

//自定义全局指令v-focus
Vue.directive("focus", {
    inserted: function(el) {
        el.focus();
    }
});

Vue.directive('color', {
    bind: function(el, binding) {
        el.style.color = binding.value;
        // console.log(binding.name);
        // console.log(binding.expression);
        // console.log(binding.value);

    }
});
//自定义全局指令
var vm = new Vue({
    el: "#app",
    data: {
        items: [
            { id: 1, name: "宝马", time: new Date() },
            { id: 2, name: "奔驰", time: new Date() }
        ],
        id: "",
        name: "",
        keywords: ''
    },
    methods: {
        //删除操作
        del: function(index) {
            //some方法遍历删除
            /* this.items.some((item, i) => {
                 if (item.id === index) {
                     this.items.splice(i, 1); //删除数组元素
                     return true; //return true终止some循环
                 }
             });*/

            //findIndex方法遍历查询删除
            /* this.items.findIndex((item, i) => {
                 if (item.id === index) {
                     this.items.splice(i, 1);
                     return true;
                 }
             });
             */

            //forEach方法遍历查询进行删除
            this.items.forEach((item, i) => {
                if (item.id === index) {
                    this.items.splice(i, 1);
                }
            });
            // console.log("jj");

        },
        //添加操作
        add: function() {
            if (this.id != '' && this.name != '') {
                this.items.push({ id: this.id, name: this.name, time: new Date() });
            } else
                alert("add failed!please input the data completely!!!");

        },
        //搜索功能
        search: function(keywords) {
            var list = [],
                keyword = keywords.trim();



            //使用indexOf进行字符匹配
            /* this.items.findIndex((item, i) => {
                 if (item.name.indexOf(keyword) != -1)
                     list.push(this.items[i]);

             });
             return list;
             */

            //使用includes进行字符匹配
            /*  this.items.forEach(item => {
                    if (item.name.includes(keyword)) {
                        list.push(item);
                    }
                });
                return list;
                */
            return this.items.filter(item => {
                if (item.name.includes(keyword))
                    return item;

            });
        },
    },

    //私有过滤器（局部过滤器）
    filters: {
        timeFormats: function(time, pattern = ("")) {
            let times = new Date(time),
                y = times.getFullYear(),
                m = times.getMonth() + 1,
                d = times.getDate();
            if (pattern.toLowerCase() === "yyyy-mm-dd") {
                return `${y}-${m}-${d}`;
            } else {
                let h = times.getHours(),
                    min = times.getMinutes(),
                    s = times.getSeconds();
                return `${y}-${m}-${d} ${h}:${min}:${s}----`;
            }

        }
    },
    directives: {
        'fontweight': {
            bind: function(el, binding) {
                el.style.fontWeight = binding.value;

            }
        }
    }

});