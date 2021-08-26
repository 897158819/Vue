import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'
import Recommend from '../component/Find/recommend.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:"/",
        alias:"/discover",
        name:"Find",
        component:Find,
        children:[
          {
            path:"/",
            alias:"/discover",
            name:"Recommend",
            component:Recommend
          },
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
