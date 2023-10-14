import React, { CSSProperties, ReactNode, useEffect } from 'react';

type modalProps = {
  children?: ReactNode;
  title?: string;
  style?: CSSProperties;
};

export function Modal({ children, title, style }: modalProps) {
  useEffect(() => {
    document.querySelector('body')?.classList.add('overflow-hidden');

    return () => {
      document.querySelector('body')?.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <>
      <div className="w-full h-[100vh] fixed top-0 left-0 z-30 bg-black-900 opacity-25" />
      <div
        className={[
          'w-full h-[100vh] absolute z-30',
          'flex justify-center align-baseline top-0 left-0',
        ].join(' ')}
      >
        <div
          style={style}
          className={[
            'w-[616px] min-h-[503px] bg-black-100 dark:bg-dark-layout',
            'top-1/2 fixed -translate-y-1/2',
            'p-[25px_30px] rounded-2xl text',
          ].join(' ')}
        >
          {title ? (
            <div className="pb-5">
              <span className="text-base font-bold">{title}</span>
            </div>
          ) : (
            ''
          )}
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
