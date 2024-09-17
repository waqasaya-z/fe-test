import React from 'react';
import FerryOperatorCard from './FerryOperatorCard';
import { ferryOperators } from '@/data/ferryOperator';
import FilterBox from './Filterbox';

const FerryOperatorList: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-6 px-4 py-6 text-sm md:text-md">
        <div className='hidden md:block w-1/4'>
            <FilterBox />
        </div>
        <div className='flex flex-col space-y-4'>
      {ferryOperators.map((operator) => (
          <FerryOperatorCard key={operator.id} {...operator} />
        ))}
    </div>
        </div>
  );
};

export default FerryOperatorList;
