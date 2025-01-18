import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import router from './Router/Router.jsx';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <QueryClientProvider client={QueryClient}> */}
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    {/* </QueryClientProvider> */}
  </StrictMode>
);
