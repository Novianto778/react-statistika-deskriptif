import React, { useState } from 'react';
import Mean from './Mean';
import Median from './Median';
import Modus from './Modus';
import Table from './Table';

const Accordion = ({ children, title, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const chevDown = (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );

  const chevUp = (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 15l7-7 7 7"
      ></path>
    </svg>
  );

  const renderContent = () => {
    switch (title) {
      case 'Mean':
        return <Mean data={data} />;
      case 'Modus':
        return <Modus data={data} />;
      case 'Median':
        return <Median data={data} />;
      case 'Table':
        return <Table data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-9/12">
      <div
        className="flex bg-white shadow border-b-2 border-gray-200 p-4 rounded-md items-center justify-between"
        onClick={() => setIsOpen((c) => !c)}
      >
        <h4>{title}</h4>
        {isOpen ? chevUp : chevDown}
      </div>
      {isOpen && (
        <div className="p-6 bg-white border-b-2 border-gray-200">
          {renderContent(title)}
        </div>
      )}
    </div>
  );
};

export default Accordion;
