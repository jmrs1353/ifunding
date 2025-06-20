// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Agencia',
  caption: '[Nombre de la Agencia]',
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Agentes',
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'login',
          title: 'Agregar',
          type: 'item',
          url: '/pages/login',
          target: true
        },
        {
          id: 'register',
          title: 'Detalle',
          type: 'item',
          url: '/pages/register',
          target: true
        }
      ]
    }
  ]
};

export default pages;
