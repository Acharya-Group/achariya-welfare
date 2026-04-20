import React, { ReactNode } from 'react';

interface SubHeadingProps {
  children: ReactNode;
  className?: string;
}

const SubHeading = ({ children, className = '' }: SubHeadingProps) => {
  return (
    <h2 className={`font-display text-blue text-4xl font-bold mt-2 mb-4 ${className}`}>
      {children}
    </h2>
  );
};

export default SubHeading;