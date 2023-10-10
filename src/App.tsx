import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';
import routes from './routes';

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: routes
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}


