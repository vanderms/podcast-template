import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import SectionHero from '../containers/section-hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Podcast Template: your daily podcast</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SectionHero/>

    </>
  )
}

export default Home
