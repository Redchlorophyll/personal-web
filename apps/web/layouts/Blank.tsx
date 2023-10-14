import React, { ReactNode, useEffect } from 'react';
import AdminNavbar from '@/components/AdminNavbar';

type BlankProps = {
  children: ReactNode;
};

export default function Blank({ children }: BlankProps) {
  useEffect(() => {
    const classList = [
      'bg-light-layout',
      'dark:bg-dark-layout',
      'dark:bg-dark-layout',
      'dark:text-black-100',
    ];
    document.querySelector('body')?.classList.add(...classList);
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div>{children}</div>
    </div>
  );
}
