import React from 'react';
import { splitArr } from '../util/MathFunc';

const Modus = ({ data }) => {
  const arr = splitArr(data.data, data.radioOption);
  const sortedData = arr.sort((a, b) => +a - +b);
  return (
    <>
      <div className="mb-4">
        <h2 className="font-medium text-lg">Data setelah diurutkan:</h2>
        <p className="tracking-widest">{sortedData.join(' ')}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-medium text-lg">Mencari Modus:</h2>
        <p>Modus = {modusCal(arr)}</p>
      </div>
    </>
  );
};

export default Modus;

function modusCal(arr) {
  const obj = {};
  arr.forEach((x) => {
    if (obj[x] === undefined) {
      obj[x] = 0;
    }
    obj[x]++;
  });
  let max = 0;
  Object.keys(obj).forEach((key) => {
    if (obj[key] > max) {
      max = obj[key];
    }
  });
  return Object.keys(obj)
    .filter((key) => obj[key] === max)
    .join(' dan ');
}
