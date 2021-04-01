import React from 'react';
import { splitArr } from '../util/MathFunc';

const Median = ({ data }) => {
  const arr = splitArr(data.data, data.radioOption);
  const sortedData = arr.sort((a, b) => +a - +b);

  return (
    <>
      <div className="mb-4">
        <h2 className="font-medium text-lg">Data setelah diurutkan:</h2>
        <p className="tracking-widest">{sortedData.join(' ')}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-medium text-lg">Mencari Median:</h2>
        <p>Median = {medianCal(sortedData)}</p>
      </div>
    </>
  );
};

export default Median;

function medianCal(arr) {
  const length = arr.length;
  if (length % 2 === 1) {
    return arr[(length - 1) / 2];
  } else {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
}
