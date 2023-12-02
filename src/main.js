import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import vuetify from './plugins/vuetify';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(vuetify).mount('#app');
