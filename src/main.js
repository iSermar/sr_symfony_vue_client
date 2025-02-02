import Vue from 'vue'

Vue.config.productionTip = false;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue';
import MoviesList from './components/MoviesList.vue';

import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://dev-221626.okta.com/oauth2/default',
  client_id: '0oabf5g3aUpctdasS356',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

const routes = [
  { path: '/implicit/callback', component: Auth.handleCallback() },
  { path: '/movies', component: MoviesList },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(Dashboard)
}).$mount('#app')