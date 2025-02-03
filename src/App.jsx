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
        element: <>Order List</>,
      },
      {
        path: 'order-details',
        element: <>Order Details</>,
      },
      {
        path: 'customer',
        element: <>Customer</>,
      },
      {
        path: 'analytics',
        element: <>Analytics</>,
      },
      {
        path: 'reviews',
        element: <>Reviewes</>,
      },
      {
        path: 'foods',
        element: <>Foods</>,
      },
      {
        path: 'food-details',
        element: <>Food Details</>,
      },
      {
        path: 'customer-details',
        element: <>Customer Details</>,
      },
      {
        path: 'calendar',
        element: <>Calendar</>,
      },
      {
        path: 'chat',
        element: <>Chat</>,
      },
      {
        path: 'chat-wallet',
        element: <>Chat Wallet</>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
