// assets
import { IconKey , IconCreditCard, IconFriends, IconUserPlus  } from '@tabler/icons-react';
// constant
const icons = {
  IconKey, IconCreditCard,IconFriends ,IconUserPlus 
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
      id: 'Agencia1',
      title: 'Asesores',
      type: 'collapse',
      icon: icons.IconCreditCard,
      children: [
        {
          id: 'login',
          title: 'Agregar',
          type: 'item',
          url: '/asesoragregar',
          target: false
        },
        {
          id: 'register',
          title: 'Detalle',
          type: 'item',
          url: '/asesordashboard',
          target: false
        }
      ]
    },
       {
      id: 'Agencia2',
      title: 'Agentes',
      type: 'collapse',
      icon: icons.IconFriends,
      children: [
        {
          id: 'login',
          title: 'Agregar',
          type: 'item',
          url: '/sample-page',
          target: false
        },
        {
          id: 'register',
          title: 'Detalle',
          type: 'item',
          url: '/agentedashboard',
          target: false
        }
      ]
    },
    ,
       {
      id: 'Agencia3',
      title: 'Clientes',
      type: 'collapse',
      icon: icons.IconUserPlus ,
      children: [
        {
          id: 'login',
          title: 'Agregar',
          type: 'item',
          url: '/sample-page',
          target: false
        },
        {
          id: 'register',
          title: 'Detalle',
          type: 'item',
          url: '/cliente',
          target: false
        }
      ]
    }
  ]
};

export default pages;
