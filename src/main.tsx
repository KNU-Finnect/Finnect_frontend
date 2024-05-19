import ReactDOM from 'react-dom/client';

import { RecoilRoot } from 'recoil';

import App from './App';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);
