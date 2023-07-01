import React, { useEffect } from 'react';
import { themeSlice } from 'shared-core';
import { useAppSelector, useAppDispatch } from 'shared-core';
import { IcMoon, IcSunny } from 'shared-icon';

const { toggleDark, toggleLight, localStorageTheme } = themeSlice.actions;

export default function ToggleMode() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const isSunny = theme === 'light';

  function onChangeMode(): void {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
      dispatch(toggleLight());
      document.documentElement.classList.remove('dark');
    } else if (
      localStorage.getItem('theme') === 'light' ||
      !localStorage.getItem('theme')
    ) {
      localStorage.setItem('theme', 'dark');
      dispatch(toggleDark());
      document.documentElement.classList.add('dark');
    }
  }

  useEffect((): void => {
    dispatch(localStorageTheme());
  }, []);

  return (
    <div
      className={`${
        theme === 'light' ? 'bg-black-300' : 'bg-yellow-700'
      } w-24 h-12 rounded-full relative left transition-all duration-700`}
    >
      <input
        type="checkbox"
        aria-label="toggle-mode"
        id="toggle-mode"
        className="opacity-0 peer w-24 h-24 z-10"
        checked={theme === 'dark'}
        onChange={onChangeMode}
      />
      <label
        htmlFor="toggle-mode"
        className={[
          'rounded-full absolute',
          'bg-black-100 p-1 left-2 top-1',
          'peer-checked:bg-black-800',
          'peer-checked:left-12',
          'transition-all duration-1000',
          'w-10 h-10',
          'justify-center',
        ].join(' ')}
      >
        {isSunny ? (
          <IcSunny className="scale-90 -translate-x-[2px]" />
        ) : (
          <IcMoon className="scale-90 translate-x-[3px] -translate-y-[1px]" />
        )}
      </label>
    </div>
  );
}
