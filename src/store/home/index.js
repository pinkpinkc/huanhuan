export default ({
    state: {
        isOn: false, //下拉导航
        isShow: true, //返回顶部
        times: { d: 1, h: 0, m: 0, s: 0 }, //倒计时
        timer: null, //倒计时
    },
    mutations: {
        handleTime(state, params) {
            state.times = params;
        },
        handleDown(state) {
            state.isOn = !state.isOn;
        },
        handleUp(state) {
            state.isOn = !state.isOn;
        },
        scrollToTop(state) {
            let that = this
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            that.scrollTop = scrollTop
            if (that.scrollTop > 0.5) {
                state.isShow = true
            } else {
                state.isShow = false
            }
        }
    },
    actions: {
        // 倒计时
        handleTime({ commit, state }) {
            var d, h, m, s;
            var startTime = new Date();
            var endTime = new Date("2022/5/1");
            var time = (endTime.getTime() - startTime.getTime()) / 1000;
            function showTime() {
                d = Math.floor(time / (24 * 60 * 60));
                h = Math.floor((time / 60 / 60) - (d * 24));
                m = Math.floor((time / 60) - (d * 24 * 60) - (h * 60));
                s = Math.floor((time) - (d * 24 * 60 * 60) - (h * 60 * 60) - (m * 60));
                d = zero(d);
                h = zero(h);
                m = zero(m);
                s = zero(s);
            }

            function zero(val) { //补0 
                return val < 10 ? "0" + val : val;
            }

            state.timer = setInterval(function () {
                time--;
                if (time <= 0) {
                    alert("放假啦！！");
                } else {
                    showTime();
                    commit("handleTime", { d, h, m, s });
                }
            }, 1000)
        },

        // 下拉导航
        handleDown({ commit }) {
            commit("handleDown")
        },
        handleUp({ commit }) {
            commit("handleUp")
        },

        // 返回顶部
        backToTop({ commit }) {
            let that = this
            let backTimer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 2)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if (that.scrollTop === 0) {
                    clearInterval(backTimer)
                }
            }, 6);
            commit("scrollToTop")
        }
    },
    getters: {

    },
    namespaced: true
})