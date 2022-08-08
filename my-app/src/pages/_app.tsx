import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../model/layout';
import Layout from '../components/layout/website'
import { SWRConfig } from 'swr';
import instance from '../api/instance';
import { Provider } from 'react-redux';
import store, { persistor }  from '../app/store';
import { PersistGate } from 'redux-persist/integration/react';
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <Provider store={store}>
          <PersistGate loading ={null} persistor ={persistor}>
    <LayoutWrapper>

      <SWRConfig

        value={{
          fetcher: async (url: string) => instance.get(url),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>

    </LayoutWrapper>
    </PersistGate>
    </Provider>
  )



}

export default MyApp
