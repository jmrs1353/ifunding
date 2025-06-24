 import { createBrowserRouter } from 'react-router-dom';
    import LoginPage from './pages/LoginPage';
    import DashboardPage from './pages/DashboardPage';
    import ProtectedRoute from './components/ProtectedRoute'; // A component to handle authentication

    const router = createBrowserRouter([
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/',
        element: <ProtectedRoute><DashboardPage /></ProtectedRoute>, // Protect this route
      },
      // ... other routes
    ]);

    export default router;