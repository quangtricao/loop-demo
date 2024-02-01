import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import CreateAccount from '../pages/CreateAccount';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <CreateAccount />,
      },
    ],
  },
]);

export default router;
