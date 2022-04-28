import {createRouter} from '@/router';



const router = createRouter({
    history: createWebHistory,
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        },
        {
            path: '/coaches',
            component: null,
        },
        {
            path: '/coaches/:id',
            component: null,
            children: [
                {
                    path: '/contact',
                    component: null,
                }
            ]
        }
    ]
});
export default router;