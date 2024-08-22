import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-primary to-white text-white p-20 text-center">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl mb-4">kofa</h2>
        <p className="text-xl mb-8">
          Woke AI solutions.
        </p>
        <div className="relative w-full max-w-md mb-8">
          <Image
            src="/images/kofa.png"
            alt="Kofa.ai"
            layout="responsive"
            width={700}
            height={900}
            className="rounded-lg shadow-lg"
          />
        </div>
        <blockquote className="text-xl italic font-semibold text-gray-800 mt-8">
          &quot;It&apos;s impossible for you and me to have a balanced mind in this society without going into the past, because in this particular society, as we function and fit into it right now, we&apos;re such an underdog, we&apos;re trampled upon, we&apos;re looked upon as almost nothing. Now if we don&apos;t go into the past and find out how we got this way, we will think that we were always this way. And if you think that you were always in the condition that you&apos;re in right now, it&apos;s impossible for you to have too much confidence in yourself, you become worthless, almost nothing.&quot;
          <span className="block text-right mt-4">- Malcolm X</span>
        </blockquote>
      </div>
    </section>
  );
};

export default Hero;
