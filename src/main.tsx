import ReactDOM from 'react-dom/client';

import { RecoilRoot } from 'recoil';

import App from '@finnect/App';
// import { worker } from '@finnect/mocks/Browser';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const enableMocking = async () => {
  // if (import.meta.env.NODE_ENV === 'development') {
  //   return;
  // }
  // // console.log('start!');
  // return worker.start();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ReactQueryDevtools initialIsOpen={true} />
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  );
});
