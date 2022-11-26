import React, { ReactNode, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type navbarProps = {
  children: ReactNode
  isActive?: boolean
  href?: string
  wip?: boolean
};

export default function NavbarItem({
  children,
  href='#',
  wip=false
}) {
  const [isChecked, setChecked] = useState<boolean>(false);
  const { asPath, push } = useRouter();

  const onLinkClicked = () => {
    if (isSamePath()) return;
    else push(href)
  }

  const isSamePath = () => {
    const cleanUrl = asPath.split('?')[0];
    const baseUrl = cleanUrl.split('/')[1];
    return baseUrl === href.split('/')[1];
  };

  useEffect(() => {
    if (isSamePath()) setChecked(true);
    else setChecked(false);
  }, []);

  return (
    <div className='relative h-[calc(100%+20px)]'>
      <input type="checkbox" className='w-full h-full peer absolute -translate-y-3 z-[2] opacity-0' checked={isChecked} onChange={onLinkClicked} />
      <div className={[
        'absolute transition-all peer-hover:h-[65%] bg-red-200 h-0 w-full rounded-b-[3px]',
        'peer-checked:text-black-100 peer-checked:peer-hover:h-full',
        'peer-checked:h-full peer-checked:bg-primary-700',
      ].join(' ')} /> {/* flag */}
      <div
      className={[
        'relative p-[18px] transition-colors',
        'peer-hover:text-black-100 peer-checked:text-black-100 text-lg'
      ].join(' ')}>
        { wip? (
          <div
          className={[
            'bg-red-700 absolute z-[1] py-[1px] px-[3px]',
            'text-xs -translate-y-1 right-0 text-black-100'
          ].join(' ')}>WIP</div>): '' }
        {children}
      </div>
    </div>
  )
}
