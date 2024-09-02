import { createRouter,createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditVue from "@/views/EditVue.vue";
const router =createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView,
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView,
        },
        {
            path:'/jobs/:id',
            name:'job',
            component:JobView,

        },
        {
            path:'/jobs/add',
            name:'add',
            component:AddJobView,

        },
        {
            path:'/jobs/edit/:id',
            name:'edit',
            component:EditVue,

        },
        {
            path:'/:catchAll(.*)', //this catches all the unlinked links 
            name:'not-found',
            component:NotFound,
        }
    ],
});
export default router;