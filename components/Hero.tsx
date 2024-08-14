import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-primary to-white text-white p-20 text-center">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl mb-4">Welcome to Kofa.ai</h2>
        <p className="text-xl mb-8">
          Kofa harnesses modern technology to infuse consciousness with practical solutions. We develop tools that prioritize relevant information, ensure safety, and guide informed decisions. Our mission is to create life-saving, educational, and protective technologies that address often overlooked challenges, equipping technology with the insight to serve the greater good.
        </p>
        <div className="relative w-full max-w-md">
          <Image
            src="/images/kofa.png"
            alt="Kofa.ai"
            layout="responsive"
            width={700}
            height={900}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
