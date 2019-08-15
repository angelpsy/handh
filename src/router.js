import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import(/* webpackChunkName: "app8-dashboard" */ "./pages/home"),
            exact: true,
        },
        {
            path: "/publishers",
            name: "publishers",
            component: () => import(/* webpackChunkName: "app8-dashboard" */ "./pages/publishers"),
        },
    ],
});
