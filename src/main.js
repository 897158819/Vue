import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import element from './element/elementIndex'
import './style/base.css'
import 'element-plus/lib/theme-chalk/index.css'
createApp(App).use(store).use(router).use(element).mount('#app') 


// const app = createApp(App)
// app.use(
//     store,
//     router,
//     element
// ).mount('#app')