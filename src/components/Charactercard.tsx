import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CharacterData } from '../types/CharacterTypes';

interface Props{data:CharacterData}

export const CharacterCard = (props:Props) => {
  return (
    <div className="w-full max-w-md mx-auto bg-orange-100 rounded-lg overflow-hidden shadow-lg">
      {/* Main character image */}
      <div className="relative">
        <img src={props.data.images ?? "-"} alt={props.data.name ?? "-"} className="w-full h-auto" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500 to-transparent opacity-50"></div>
      </div>

      {/* Character name and stats */}
      <div className="bg-orange-500 text-white p-4">
        <h2 className="text-2xl font-bold mb-2">{props.data.name}</h2>
        <div className="grid grid-cols-2 gap-2">
          <StatItem label="GOUTAN" value={props.data.jutsu ? props.data.jutsu.length:"-"} />
          <StatItem label="CLAN" value={props.data.personal.clan ?? "-"} />
          <StatItem label="SKILLS" value={props.data.jutsu ? props.data.jutsu.length:"-"} />
          <StatItem label="NATURETYPE" value={props.data.natureType ? props.data.natureType[0]:"-"} />
        </div>
      </div>

      {/* Other characters
      <div className="flex justify-between items-center p-2 bg-orange-200">
        <ChevronLeft className="w-6 h-6 text-orange-700" />
        <div className="flex space-x-2 overflow-x-auto">
          {otherCharacters.map((char, index) => (
            <div key={index} className="w-12 h-12 bg-orange-300 rounded-md flex-shrink-0"></div>
          ))}
        </div>
        <ChevronRight className="w-6 h-6 text-orange-700" />
      </div> */}
    </div>
  );
};

const StatItem: React.FC<{ label: string; value: number|string }> = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm">{label}</span>
    <span className="font-bold">{value}</span>
  </div>
);
