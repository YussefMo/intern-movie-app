import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClint}>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
