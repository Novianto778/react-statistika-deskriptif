import React from 'react';
import { splitArr } from '../util/MathFunc';

const Mean = ({ data }) => {
  const arr = splitArr(data.data, data.radioOption);
  const sortedData = arr.sort((a, b) => +a - +b);
  const length = sortedData.length;
  const totalData = arr.reduce((a, b) => +a + +b);
  return (
    <>
      <div className="mb-4">
        <h2 className="font-medium text-lg">Data setelah diurutkan:</h2>
        <p className="tracking-widest">{sortedData.join(' ')}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-medium text-lg">Mencari Mean:</h2>
        <p>
          Mean = {totalData} / {length} = {(totalData / length).toFixed(2)}
        </p>
      </div>
    </>
  );
};

export default Mean;
