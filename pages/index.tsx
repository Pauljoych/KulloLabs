import type { NextPage } from 'next'
import Head from 'next/head'
import Staking from '../components/Staking'
import Footer from '../components/Footer'
import Mint from '../components/Mint'
import Navbar from '../components/Navbar'
import Teams from '../components/Teams'

const Home: NextPage = () => {
  return (
    <div className="flex-col w-screen h-screen items-center justify-center">
      <Head>
        <title>KulloLabs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="grid place-items-center py-8 gap-4">
        <Mint />
        <Staking />
      </div>
      <Teams />
      <Footer />
    </div>
  )
}

export default Home
