import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-primary to-white text-white p-20 text-center">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl mb-4">kofa</h2>
        <p className="text-xl mb-8">Woke AI solutions.</p>
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
        <div className="mt-12 w-full max-w-3xl">
          <h3 className="text-3xl font-bold mb-6">Products</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold mb-2">Coin</h4>
              <p className="text-lg text-gray-700">
                Kofa Coin derives its name from &quot;Sankofa,&quot; a profound word from the Twi language of Ghana that means &quot;to retrieve&quot; or &quot;go back and get.&quot; This digital currency is created to address the economic impact of historical injustices like slavery and Jim Crow on Black Americans. It is pegged to the US Dollar and serves as an identity token, identifying descendants of slaves and assigning value based on reparations owed, offering a new approach to addressing historical debts in a democratic and forward-looking manner.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Search</h4>
              <p className="text-lg text-gray-700">
                Kofa Search leverages advanced language models to deliver direct answers to your queries, offering concise and culturally resonant information. What sets Kofa Search apart is its unique perspective, shaped by a collective Black consciousness, ensuring that the insights provided are not only accurate but also deeply reflective of the experiences and achievements of Black Americans.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Learn</h4>
              <p className="text-lg text-gray-700">
                Kofa Learn is an innovative, interactive curriculum that immerses students in the fields of Computer Science, Artificial Intelligence, Law, and Theology. Tailored to each learner&apos;s style, it integrates &quot;woke&quot; elements, emphasizing the contributions and achievements of Black Americans, ensuring a culturally enriched educational journey that is both empowering and effective.
              </p>
            </div>
          </div>
        </div>
        <blockquote className="text-xl italic font-semibold text-gray-800 mt-12">
          &quot;It&apos;s impossible for you and me to have a balanced mind in this society without going into the past, because in this particular society, as we function and fit into it right now, we&apos;re such an underdog, we&apos;re trampled upon, we&apos;re looked upon as almost nothing. Now if we don&apos;t go into the past and find out how we got this way, we will think that we were always this way. And if you think that you were always in the condition that you&apos;re in right now, it&apos;s impossible for you to have too much confidence in yourself, you become worthless, almost nothing.&quot;
          <span className="block text-right mt-4">- Malcolm X</span>
        </blockquote>
      </div>
    </section>
  );
};

export default Hero;
