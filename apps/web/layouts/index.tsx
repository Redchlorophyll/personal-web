import React, { ReactNode, useEffect } from 'react';
import { Navbar } from 'web-ui';
import { ToggleMode } from 'shared-ui';
import { IcBack } from 'shared-icon';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const NavbarItem = dynamic(
  () => import('web-ui').then((mod) => mod.NavbarItem),
  {
    ssr: false,
  }
);

type DefaultLayoutProps = {
  children: ReactNode;
  backButton?: boolean;
  toggleMode?: boolean;
};

export default function DefaultLayout({
  children,
  backButton = true,
  toggleMode = true,
}: DefaultLayoutProps) {
  const router = useRouter();

  useEffect(() => {
    const classList = [
      'bg-light-layout',
      'dark:bg-dark-layout',
      'dark:bg-dark-layout',
      'dark:text-black-100',
    ];
    document.querySelector('body')?.classList.add(...classList);
  }, []);

  const urlList = [
    { label: 'Home', href: '/', wip: true },
    { label: 'Blog', href: '/blog', wip: true },
    { label: 'Project', href: '/project', wip: true },
    { label: 'About Me', href: '/about-me', wip: true },
  ];

  const navbaritems = () => {
    return urlList.map((url, idx) => {
      return (
        <NavbarItem key={idx} wip={url.wip} href={url.href}>
          {url.label}
        </NavbarItem>
      );
    });
  };

  return (
    <div>
      <Navbar>
        <div className="gap-2 hidden md:flex">{navbaritems()}</div>
        {backButton ? (
          <button
            onClick={() => router.back()}
            className="md:hidden p-4 w-[60%]"
          >
            <IcBack />
          </button>
        ) : (
          ''
        )}
        {toggleMode ? (
          <div className="ml-3 p-2">
            <ToggleMode />
          </div>
        ) : (
          ''
        )}
      </Navbar>
      <div className="flex w-full justify-center">
        <div className="max-w-[1080px]">{children}</div>
      </div>
    </div>
  );
}
