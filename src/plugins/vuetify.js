import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify/lib/framework';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
	components,
	directives,
	icons: {
		defaultSet: 'mdi',
	},
});

export default vuetify;
