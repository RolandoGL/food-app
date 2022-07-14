import { createRouter, createWebHashHistory } from "vue-router";
import clienteRouter from '../modules/clientes/router'
const routes = [{
    path: '/user-home',
    ...clienteRouter
},
{
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () =>
        import ( /*webpackChunkName:"404"*/ '../components/404.vue'),
    // redirect: "/"
},
]

const router = createRouter( {
    history: createWebHashHistory(),
    routes,
} )

export default router;