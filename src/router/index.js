import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Classify from './classify'
import Car from './car'
import Mine from './mine'
import Shop from './shop'
import Search from './search'


Vue.use(Router)

export default new Router({
  meta: "hash",
  routes: [
    {
      path: '/',
      redirect : '/home'
    },
    Home,
    Classify,
    Car,
    Mine,
    Shop,
    Search,
    {
      path : '**',
      redirect : '/home'
    }
  ]
})
 