import { createBrowserRouter,RouterProvider } from 'react-router-dom';

// routing
import router from 'routes';
// project imports

import NavigationScroll from 'layout/NavigationScroll';

import ThemeCustomization from 'themes';

import LoginPage from 'views/pages/authentication/Login';

// ==============================|| APP ||============================== //

export default function App() {
  return (
    <ThemeCustomization>
      <NavigationScroll>
        <>
          <RouterProvider router ={router} />
        </>
      </NavigationScroll>
    </ThemeCustomization>
  );
}
