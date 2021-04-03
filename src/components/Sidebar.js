import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const homeIcon = (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      ></path>
    </svg>
  );

  const dataIcon = (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"
      ></path>
    </svg>
  );

  const tableIcon = (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      ></path>
    </svg>
  );

  const calculatorIcon = (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
      ></path>
    </svg>
  );

  const percentIcon = (
    <svg
      className="w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={{ transform: 'rotate(360deg)' }}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="M18.5 3.5l-15 15l2 2l15-15M7 4a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m10 10a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"
        fill="#e5e7eb"
      />
    </svg>
  );

  const tabMenu = [
    { title: 'Home', url: '/', icon: homeIcon },
    { title: 'Data to Table', url: '/data-to-table', icon: dataIcon },
    { title: 'Table to Data', url: '/table-to-data', icon: tableIcon },
    {
      title: 'Kuartil, Desil, Persentil',
      url: '/kuartil-desil-persentil',
      icon: percentIcon,
    },
  ];

  return (
    <div className="md:h-screen h-16 w-full md:w-20 bg-gray-900 text-white flex flex-row md:flex-col items-center justify-evenly fixed md:top-0 bottom-0">
      {tabMenu.map((menu, idx) => {
        return (
          <Link to={menu.url} key={idx}>
            <Icon svg={menu.icon} text={menu.title} />
          </Link>
        );
      })}
      <Icon
        svg={calculatorIcon}
        text="Calculator"
        className="md:block hidden"
      />
    </div>
  );
};

export default Sidebar;
