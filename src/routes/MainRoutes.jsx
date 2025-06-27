import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardBroker = Loadable(lazy(() => import('views/dashboard/Broker')));
const DashboardAsesor = Loadable(lazy(() => import('views/dashboard/Asesor')));
const AgregarAsesor   = Loadable(lazy(() => import('views/pages/asesor/IndexAgregar')));
const DashboardAgente = Loadable(lazy(() => import('views/dashboard/Agente')));
const DashboardCliente = Loadable(lazy(() => import('views/dashboard/Cliente')));
// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardBroker />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'Broker',
          element: <DashboardBroker />
        }
      ]
    },
    {
      path: 'typography',
      element: <UtilsTypography />
    },
    {
      path: 'asesordashboard',
      element: <DashboardAsesor />
    },
      {
      path: 'asesoragregar',
      element: <AgregarAsesor />
    },
    {
      path: 'agentedashboard',
      element: <DashboardAgente />
    },
        {
      path: 'agenteagregar',
      element: <DashboardAgente />
    },
    {
      path: 'cliente',
      element: <DashboardCliente />
    },
    {
      path: 'color',
      element: <UtilsColor />
    },
    {
      path: 'shadow',
      element: <UtilsShadow />
    },
    {
      path: '/sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
