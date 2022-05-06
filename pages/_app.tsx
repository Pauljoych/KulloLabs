import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl={process.env.MORALIS_URL as string}
      appId={process.env.MORALIS_ID as string}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}
export default MyApp
