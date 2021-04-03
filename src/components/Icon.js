import React from 'react';

const Icon = ({ svg, text, className }) => {
  const classNames = [
    'hover:text-primary-blue cursor-pointer tooltip ',
    className,
  ];
  return (
    <div className={classNames.join('')}>
      {svg}
      <p className="tooltiptext hidden md:block">{text}</p>
    </div>
  );
};

export default Icon;
