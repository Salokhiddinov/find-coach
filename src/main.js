import { createApp } from 'vue';
import router from '@/router';
import  App from '@/App.vue';
import BaseCard from '@/components/UI/BaseCard.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseBadge from '@/components/UI/BaseBadge.vue';


import store from './store//index.js';

const app = createApp(App);



app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);



app.use(store);
app.use(router)
app.mount('#app');

