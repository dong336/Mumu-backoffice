import vuetify from './plugins/vuetify';
import router from './router';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(vuetify).use(router).mount('#app');
