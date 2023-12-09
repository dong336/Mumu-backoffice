import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import MembersIndexPage from '@/pages/members/MembersIndexPage.vue';
import ExhibitIndexPage from '@/pages/exhibit/ExhibitIndexPage.vue';
import ProductIndexPage from '@/pages/product/ProductIndexPage.vue';

const indexRoutes = [
	{
		path: '/',
		name: 'MainPage',
		component: MainPage,
	},
	{
		path: '/members',
		name: 'MembersIndexPage',
		component: MembersIndexPage,
	},
	{
		path: '/exhihit',
		name: 'ExhibitIndexPage',
		component: ExhibitIndexPage,
	},
	{
		path: '/product',
		name: 'ProductIndexPage',
		component: ProductIndexPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: [...indexRoutes],
});

export default router;
