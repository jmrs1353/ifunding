// assets
import { IconDashboard, IconBuildingFactory2  } from '@tabler/icons-react';

// constant
const icons = { IconDashboard, IconBuildingFactory2  };

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
      icon: icons.IconBuildingFactory2,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
