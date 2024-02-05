import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/Home';
import Artist from '../pages/Artist';

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
        path: '/register',
        element: <CreateAccount />,
      },
      {
        path: '/artist',
        element: <Artist />,
      },
    ],
  },
]);

export default router;
