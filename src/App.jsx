import { Navigate, RouterProvider, createBrowserRouter } from 'react-router';
import BaseLayout from './layout/BaseLayout';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'order-list',
        element: <Dashboard />,
      },
      {
        path: 'order-details',
        element: <Dashboard />,
      },
      {
        path: 'customer',
        element: <Dashboard />,
      },
      {
        path: 'analytics',
        element: <Dashboard />,
      },
      {
        path: 'reviews',
        element: <Dashboard />,
      },
      {
        path: 'foods',
        element: <Dashboard />,
      },
      {
        path: 'food-details',
        element: <Dashboard />,
      },
      {
        path: 'customer-details',
        element: <Dashboard />,
      },
      {
        path: 'calendar',
        element: <Dashboard />,
      },
      {
        path: 'chat',
        element: <Dashboard />,
      },
      {
        path: 'chat-wallet',
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
