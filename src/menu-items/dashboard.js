// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Broker',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Detalle',
      type: 'item',
      url: '/dashboard/Broker',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
