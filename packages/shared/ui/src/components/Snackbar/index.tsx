import React, { ReactNode, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import {
  IcSnackbarClose,
  IcInfo,
  IcWarning,
  IcError,
  IcChecked,
} from 'shared-icon';

export type variantType = 'error' | 'info' | 'success' | 'warning';

type SnackbarProps = {
  children?: ReactNode;
  variant?: variantType;
  timer?: number;
  isShown?: boolean;
  onClose?: (value: boolean) => void;
};

const SnackbarIcon = ({ type }: { type: variantType }) => {
  switch (type) {
    case 'error':
      return <IcError />;
    case 'info':
      return <IcInfo />;
    case 'warning':
      return <IcWarning />;
    case 'success':
      return <IcChecked />;
    default:
      return null;
  }
};

export function Snackbar({
  variant = 'error',
  isShown = false,
  timer,
  onClose,
  children,
}: SnackbarProps) {
  const [baseColor, setBaseColor] = useState<string>('bg-red-700');
  const [image, setImage] = useState<string>('error');

  useEffect(() => {
    if (variant === 'error') {
      setBaseColor('bg-red-700');
      setImage('error');
    } else if (variant === 'info') {
      setBaseColor('bg-primary-700');
      setImage('info');
    } else if (variant === 'success') {
      setBaseColor('bg-green-700');
      setImage('success');
    } else if (variant === 'warning') {
      setBaseColor('bg-orange-700');
      setImage('warning');
    }
  }, [variant]);

  function onCloseAction() {
    if (onClose) onClose(false);
  }

  useEffect(() => {
    if (timer && isShown) {
      setTimeout(() => {
        if (onClose) onClose(false);
      }, timer);
    }
  }, [timer, isShown]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {isShown ? (
        <Fade>
          <div
            className={`${baseColor} w-fit max-w-xl min-h-[65px] p-[19px_35px_10px_35px] rounded-[10px] flex gap-4 leading-[27px] text-black-100`}
          >
            <SnackbarIcon type={image as variantType} />
            <p className="text-base translate-y-[2px] min-w-[10rem] block">
              {children ? children : 'Snackbar Children Goes Here!'}
            </p>
            {!timer ? (
              <button
                onClick={() => onCloseAction()}
                data-testid="close-snackbar"
                className="-translate-y-1 translate-x-4"
              >
                <IcSnackbarClose />
              </button>
            ) : (
              ''
            )}
          </div>
        </Fade>
      ) : (
        ''
      )}
    </div>
  );
}
