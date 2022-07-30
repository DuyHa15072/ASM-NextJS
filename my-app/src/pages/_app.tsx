import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../model/layout';
import Layout from '../components/layout/website'
import { SWRConfig } from 'swr';
import instance from '../api/instance';
import { Provider } from 'react-redux';
import { store } from '../app/store';
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <Provider store={store}>
    <LayoutWrapper>

      <SWRConfig

        value={{
          fetcher: async (url: string) => instance.get(url),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </LayoutWrapper>
    </Provider>
  )



}

export default MyApp
