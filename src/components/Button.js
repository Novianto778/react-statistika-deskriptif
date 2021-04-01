import React from 'react';

const Button = ({ children, large, base, mt, blue, ...rest }) => {
  const classNames = ['rounded shadow text-white '];
  if (large) {
    classNames.push('px-6 py-2 ');
  } 
  if(base) {
    classNames.push('px-4 py-1 ');
  }

  if (blue) {
    classNames.push('bg-primary-blue ');
  }

  return (
    <button {...rest} className={classNames.join('') + ` mt-${mt}`}>
      {children}
    </button>
  );
};

export default Button;
