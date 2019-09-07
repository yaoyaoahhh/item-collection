/*jshint esversion:6 */
var vm = new Vue({
    el: "#app",
    data: {
        n1: 0,
        n2: 0,
        result: 0,
        opt: '+'
    },
    methods: {
        calc() {
            console.log("fff");
            switch (this.opt) {
                case '+':
                    this.result = parseInt(this.n1) + parseInt(this.n2);
                    break;
                case '-':
                    this.result = parseInt(this.n1) - parseInt(this.n2);
                    break;
                case '*':
                    this.result = parseInt(this.n1) * parseInt(this.n2);
                    break;
                case '/':
                    this.result = parseInt(this.n1) / parseInt(this.n2);
                    break;
            }

        }
    }
});