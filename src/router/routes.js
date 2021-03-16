import DashboardLayout from '@/layouts/dashboard.vue';
import SingleLayout from '@/layouts/single.vue';

import landingRoutes from '@/components/pages/Home/routes';
import singleNewsRoutes from '@/components/pages/News/routes';
import historyRoutes from '@/components/pages/History/routes';

export default [
  {
    path: '/',
    component: DashboardLayout,
    children: [
      ...landingRoutes,
    ],
  },
  {
    path: '/news',
    component: SingleLayout,
    children: [
      ...singleNewsRoutes,
      ...historyRoutes,
    ],
  },
];
