import { createBrowserRouter } from 'react-router-dom';

import Layout from 'src/components/Layout';
import CreateAccount from 'src/pages/CreateAccount';
import Home from 'src/pages/Home';
import Artist from 'src/pages/Artist';
import UserDashboard from 'src/pages/UserDashboard';
import UserCreateNFT from 'src/pages/UserCreateNFT';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/user-dashboard/user-id',
        element: <UserDashboard />,
      },
      {
        path: '/user-dashboard/user-id/create',
        element: <UserCreateNFT />,
      },
      {
        path: '/register',
        element: <CreateAccount />,
      },
      {
        path: '/artist/artist-name/created',
        element: <Artist />,
      },
      {
        path: '/artist/artist-name/owned',
        element: <Artist />,
      },
      {
        path: '/artist/artist-name/collection',
        element: <Artist />,
      },
    ],
  },
]);

export default router;
