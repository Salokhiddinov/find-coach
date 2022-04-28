import {createRouter, createWebHistory} from '@/router';

//Coaches components
import CoachDetails from '@/pages/coaches/CoachDetails.vue';
import CoachesList from '@/pages/coaches/CoachesList.vue';
import CoachRegistration from '@/pages/coaches/CoachRegistration.vue';

//Request Components
import ContactCoach from '@/pages/requests/ContactCoach.vue';
import RequestsList from '@/pages/requests/RequestsList.vue';

//Not Found COmponent
import NotFound from '@/pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory,
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        },
        {
            path: '/coaches',
            component: CoachesList,
        },
        {
            path: '/coaches/:id',
            component: CoachDetails,
            children: [
                {
                    path: '/contact',
                    component: ContactCoach,
                }
            ]
        },
        {
            path: '/register',
            component: CoachRegistration,
        },
        {
            path: '/requests',
            component: RequestsList,
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        }
    ]
});

export default router;