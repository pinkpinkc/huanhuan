import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import More from './more'
import Car from './car'
import Mine from './mine'



Vue.use(Router)

export default new Router({
  meta: "history",
  routes: [
    {
      path: '/',
      redirect : '/home'
    },
    Home,
    More,
    Car,
    Mine,
    {
      path : '**',
      redirect : '/home'
    }
  ]
})
 