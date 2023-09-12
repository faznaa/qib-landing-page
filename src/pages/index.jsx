import Head from 'next/head'
import  Footer  from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Pricing } from '../components/Pricing'
import { PrimaryFeatures } from '../components/PrimaryFeatures'
import { SecondaryFeatures } from '../components/SecondaryFeatures'
import { Testimonials } from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>QIB Logistics</title>
        <meta
          name="description"
          content="Welcome to QIB Logistics (QuickCargo)! We specialize in helping Canada connect with the world through imports and exports. Explore our services and products to discover how we can meet your needs."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <CallToAction /> */}

        <PrimaryFeatures />
        <SecondaryFeatures />
        {/* <Pricing /> */}

        {/* <Testimonials />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
