import React, { ReactNode } from 'react';

type NavbarProps = {
  children?: ReactNode;
};

export default function Navbar({ children }: NavbarProps) {
  return (
    <div
      className={[
        'w-full h-[67px] bg-black-100 mb-[8vh] md:mb-[15vh]',
        'shadow-[0_2px_8px_1px_rgba(0,0,0,0.1)]',
        'flex justify-center dark:bg-[#282828] dark:shadow-[0_2px_8px_1px_rgba(154,154,154,0.1)]',
      ].join(' ')}
    >
      {children}
    </div>
  );
}
