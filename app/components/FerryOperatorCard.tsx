import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { PiArrowCircleRightFill } from "react-icons/pi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


interface FerryOperator {
  name: string;
  image: StaticImageData;
  description: String;
  vessels: number;
  ferryTypes: string;
  reviews: number;
  popularVessels: string[];
  country: string | string[];
  countryImage: StaticImageData | StaticImageData[];
  rating: number;
  buttonValue: string;
}

const FerryOperatorCard: React.FC<FerryOperator> = ({ name, image, description, vessels, ferryTypes, reviews, popularVessels, country, countryImage, rating, buttonValue }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white relative">
      <div className='flex flex-col md:flex-row justify-between'>
      <div>
      <Image src={image} alt="company-logo" />
       </div>  
      <div>
      <h3 className="text-xl font-bold">{name}</h3>
      <div className='inline-flex items-center justify-center gap-2 '> <span className="flex text-yellow-400">  < FaStar /> < FaStar /> < FaStar /> < FaStarHalfAlt /> </span> by  <span className='font-semibold'>{reviews} customers</span> </div>
      </div>
      </div>  

     <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col md:w-1/3'>
      <div className='p-2'> 
        Operates in 
       <div className='flex gap-2 mt-1'> 
        {Array.isArray(countryImage) ? (
                countryImage.map((img, idx) => (
                  <Image key={idx} src={img} alt={`country-${idx}`} />
                ))
              ) : (
                <Image src={countryImage} alt="country" />
              )} <p> {`${country}`} </p></div> 
      </div>

     <div className='px-2'>
      <p>{`Vessels Numbers: ${vessels}`}</p>
      <p> {`Ferry types: ${ferryTypes}`} </p>
      <p className='mt-2'>Popular Vessels: </p>
      <p className='text-blue-500'> {`${popularVessels.join(', ')}`} </p>
     </div>
        </div>

     <div className='md:w-2/3 p-2 md:p-0'>
        {description}
     </div>
     </div>
     <br />
     <div>
    <button className='inline-flex items-center justify-center gap-2 p-1 rounded-sm font-semibold text-blue-500 absolute bottom-4 right-4 hover:bg-gray-100'> {buttonValue} <PiArrowCircleRightFill /> </button>
     </div>
    </div>
  );
};

export default FerryOperatorCard;
