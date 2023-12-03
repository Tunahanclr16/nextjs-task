"use client"
import { useState } from 'react';
import Psikolog from './Psikolog';
import Nutritionist from './Nutritionist';
import SportsTrainer from './SportsTrainer';

export default function TabMenu() {
  const [selectedTab, setSelectedTab] = useState('Psikolog'); // Varsayılan seçili sekme

  const handleClick = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'Psikolog':
        return (
          <div className=''>
                <Psikolog/>
          </div>
        );
      case 'Diyetisyen':
        return (
          <div>
              <Nutritionist/>
          </div>
        );
      case 'Spor Eğitmeni':
        return (
          <div>
            <SportsTrainer/>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-12 max-w-[1200px] mx-auto">
      <h2 className="text-center pt-24 text-3xl font-semibold text-[30px]">
        İhtiyacına En Uygun Uzmanı Seç
      </h2>
      <div className="border-b-2 mx-auto w-[340px] ">
        <ul className="flex gap-4 w-full text-center  justify-center mt-4 items-center">
          <li
            onClick={() => handleClick('Psikolog')}
            className={`cursor-pointer ${selectedTab === 'Psikolog' ? 'border-b-2 border-black font-bold' : ''}`}
          >
            <span>Psikolog</span>
          </li>
          <li
            onClick={() => handleClick('Diyetisyen')}
            className={`cursor-pointer ${selectedTab === 'Diyetisyen' ? 'border-b-2 border-black font-bold' : ''}`}
          >
            <span>Diyetisyen</span>
          </li>
          <li
            onClick={() => handleClick('Spor Eğitmeni')}
            className={`cursor-pointer ${selectedTab === 'Spor Eğitmeni' ? 'border-b-2 border-black font-bold' : ''}`}
          >
            <span>Spor Eğitmeni</span>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
}
