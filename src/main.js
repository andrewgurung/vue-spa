// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import the vue instance
import Vue from 'vue'
// import the App components
import App from './App'
// import the vue router
import VueRouter from 'vue-router'
// tell vue to use the router
Vue.use(VueRouter)
//define your routes
const routes = []

// Create the router instance and pass the `routes` option
// You can pass in additional options here.
const router = new VueRouter({
  routes, // short cut for routes: routes
  mode: 'history'
})

// instantiate the vue instance
new Vue({
  // define the root element
  el: '#app',
  // pass the template to the root component
  template: '<App/>',
  // declare components that the root component can alert-success
  components: { App },
  // pass in the router to the Vue instance
  router
}).$mount('#app')
