import React from 'react';
import TitleAndSub from '../shared/titleAndSub';
import Image from 'next/image';
import icon1 from '@/../../public/assets/icons/check.svg';
import icon2 from '@/../../public/assets/icons/deliveryt.svg';
import icon3 from '@/../../public/assets/icons/group.svg';
import icon5 from '@/../../public/assets/icons/person.svg';
import icon6 from '@/../../public/assets/icons/quote.svg';
import icon7 from '@/../../public/assets/icons/Wrench.svg';

const FeatureCard = ({ icon, text }) => (
  <div className="flex rounded-md shadow-md flex-col items-center text-center w-[200px] py-6 border-2 border-gray-400 hover:bg-gradient-to-r from-[#db6447] to-[#e77205] hover:text-white">
    <Image src={icon} alt={text} height={60} width={70} />
    <p className="mt-2 text-lg font-semibold">{text}</p>
  </div>
);

const ChooseUs = () => {
  const features = [
    { icon: icon1, text: '100% Guarantee' },
    {icon: icon3,text: 'Expert Team'},
    { icon: icon2, text: 'Timely Delivery' },
    { icon: icon3, text: 'Expart Team' },
    { icon: icon5, text: '24/7 support' },
    { icon: icon7, text: 'Best Equpment' },
  ];

  return (
    <div className="relative grid justify-center p-6 mb-20">
      <TitleAndSub
        title="Why Choose Us"
        subtitle="The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable."
      />
      <div className="flex flex-wrap gap-4 justify-center mt-6 p-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
