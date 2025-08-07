import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello World</h1>,
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  );
}
