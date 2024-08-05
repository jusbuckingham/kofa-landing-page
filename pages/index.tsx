import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Kofa.ai - Empowering Informed Decisions with AI</title>
        <meta name="description" content="Kofa.ai empowers informed decision-making with advanced AI solutions. Introducing 'woke' AI for a better future." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <main className="container mx-auto p-4">
        {/* Additional content sections here */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
