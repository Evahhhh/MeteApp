import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from 'vue-router';
import Help from './pages/Help.vue';
import Contact from './pages/Contact.vue';
import Home from './pages/Home.vue';
import "./assets/main.css";

createApp(App).mount("#app");


const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes: [
    {
    path: '/app',
    name: 'app',
    component: Home
    },
    {
    path: '/contact',
    name: 'contact',
    component: Contact
    },
    {
    path: '/help',
    name: 'help',
    component: Help
    }
  ]
})

const app = createApp(App)
app.use(router).mount('#app')
app.mount('app')