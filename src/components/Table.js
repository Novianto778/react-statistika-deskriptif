import React from 'react';
import { splitArr } from '../util/MathFunc';

const Table = ({ data }) => {
  const arr = splitArr(data.data, data.radioOption);
  const length = arr.length;
  const sorted = arr.sort((a, b) => +a - +b);
  const max = +sorted[length - 1];
  const min = +sorted[0];
  const rentangan = max - min;
  const jumlahKelas = Math.ceil(1 + 3.3 * Math.log10(length));
  const panjangKelas = Math.ceil(rentangan / jumlahKelas);

  return (
    <div className="flex flex-col p-2">
      <div className="mt-4 overflow-hidden">
        <h4 className="mb-4 font-semibold">Mencari nilai max: {max}</h4>
        <h4 className="mb-4 font-semibold">Mencari nilai min: {min}</h4>
        <h4 className="mb-4 font-semibold">
          Mencari rentangan: <br />
          <span className="font-normal">
            max - min = {max} - {min} = {rentangan}
          </span>
        </h4>
        <h4 className="mb-4 font-semibold">
          Mencari jumlah kelas: <br />{' '}
          <span className="font-normal">
            1 + 3.3 * log({length}) <br /> 1 +{' '}
            {(3.3 * Math.log10(length)).toFixed(2)} ={' '}
            {(1 + 3.3 * Math.log10(length)).toFixed(2)} <br /> = {jumlahKelas}
          </span>
        </h4>
        <h4 className="mb-4 font-semibold">
          Mencari panjang kelas:
          <br />
          <span className="font-normal">
            rentangan / jumlah kelas = {rentangan} / {jumlahKelas} = <br />{' '}
            {(rentangan / jumlahKelas).toFixed(2)} = {panjangKelas}
          </span>
        </h4>
        <h4 className="mb-4 font-semibold w-full">
          Data setelah diurutkan: <br /> {sorted.join(' ')}
        </h4>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
        <div className="py-2 align-middle inline-block w-9/12 sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {renderTable(panjangKelas, jumlahKelas, min, arr)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

function renderTable(panjangKelas, jumlahKelas, min, arr) {
  let tabel = [];
  let batasBawah = min;
  let row;
  let frekuensi;
  const array = Array(jumlahKelas).fill(1);
  array.forEach((a) => {
    frekuensi = arr.filter((x) => {
      return x >= batasBawah && x <= batasBawah + panjangKelas - 1;
    });
    row = (
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          {batasBawah} - {batasBawah + panjangKelas - 1}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{frekuensi.length}</td>
      </tr>
    );
    tabel.push(row);
    batasBawah += panjangKelas;
  });

  const dataTable = (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Nilai Interval
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Frekuensi
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {tabel.map((kelas, idx) => {
          return <React.Fragment key={idx}>{kelas}</React.Fragment>;
        })}
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">Jumlah</td>
          <td className="px-6 py-4 whitespace-nowrap">{arr.length}</td>
        </tr>
      </tbody>
    </table>
  );

  return dataTable;
}
