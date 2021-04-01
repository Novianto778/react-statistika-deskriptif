import React from 'react';

const Card = ({ data: {title, img, description} }) => {
  return (
    <div className="rounded-2xl shadow-md h-80 mb-8 cursor-pointer bg-white pb-4 overflow-hidden">
      <img src={img} alt="data" className="h-40 w-80 bg-center bg-cover" />
      <div className="bg-white p-4 w-80">
        <h2 className="font-medium text-lg">{title}</h2>
        <p className="mt-2 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Card;
