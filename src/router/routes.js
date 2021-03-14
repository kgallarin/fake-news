import DashboardLayout from '@/layouts/dashboard.vue';
import landingRoutes from '@/components/pages/Home/routes';

export default [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      ...landingRoutes,
    ],
  },
];
