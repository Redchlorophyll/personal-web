import React, { ReactNode, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

export type variantType = "error" | "info" | "success" | "warning";

type SnackbarProps = {
  children?: ReactNode;
  variant?: variantType;
  timer?: number;
  isShown?: boolean;
  onClose?: (value: boolean) => void;
};

export function Snackbar({
  variant = "error",
  isShown = false,
  timer,
  onClose,
  children,
}: SnackbarProps) {
  const [baseColor, setBaseColor] = useState<string>("bg-red-700");
  const [image, setImage] = useState<string>('error');

  useEffect(() => {
    if (variant === "error") {
      setBaseColor("bg-red-700");
      setImage('error');
    } else if (variant === "info") {
      setBaseColor("bg-primary-700");
      setImage('info');
    } else if (variant === "success") {
      setBaseColor("bg-green-700");
      setImage('checked');
    } else if (variant === "warning") {
      setBaseColor("bg-orange-700");
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

  const snackbarIcon = () => {
    if (image === 'error') return (<div className={`bg-icon-error w-[30px] h-[30px] bg-cover`} />);
    else if (image === 'info') return (<div className={`bg-icon-info w-[30px] h-[30px] bg-cover`} />);
    else if (image === 'warning') return (<div className={`bg-icon-warning w-[30px] h-[25px] bg-cover`} />);
    else if (image === 'checked') return (<div className={`bg-icon-checked w-[30px] h-[30px] bg-cover`} />);
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2">
      {isShown ? (
        <Fade>
          <div
            className={`${baseColor} w-fit max-w-xl min-h-[65px] p-[19px_35px_10px_35px] rounded-[10px] flex gap-4 leading-[27px] text-black-100`}
          >
            <div>
              {snackbarIcon()}
            </div>
            <div>
              <p className="text-base translate-y-[2px] min-w-[10rem]">
                {children ? children : "Snackbar Children Goes Here!"}
              </p>
            </div>
            {!timer ? (
              <div className="-translate-y-1 translate-x-4">
                <button
                  onClick={() => onCloseAction()}
                  data-testid="close-snackbar"
                >
                  <div className="bg-icon-close w-[30px] h-[30px]" />
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </Fade>
      ) : (
        ""
      )}
    </div>
  );
}
