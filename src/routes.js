import { createWebHashHistory, createRouter } from "vue-router";
import EbData from "./components/EbData.vue";
import EbAdd from "./components/EbAdd.vue";
import EbEdit from "./components/EbEdit.vue";

const routes = [{
        name: 'ebdata',
        path: "/",
        component: EbData,
    },
    {
        name: 'EbAdd',
        path: "/add-recipe",
        component: EbAdd,
    },
    {
        name: 'EbEdit',
        path: "/EbEdit/:id",
        component: EbEdit,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;