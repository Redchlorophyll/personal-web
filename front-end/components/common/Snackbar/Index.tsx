import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import icWarning from "@/assets/img/icons/ic_warning.svg";
import icInfo from "@/assets/img/icons/ic_info.svg";
import icError from "@/assets/img/icons/ic_error.svg";
import icClose from "@/assets/img/icons/ic_snackbar-close.svg";
import icChecked from "@/assets/img/icons/ic_checked.svg";
import { Fade } from "react-awesome-reveal";
import { variantType } from "@/globals/types";

type SnackbarProps = {
  children?: ReactNode;
  variant?: variantType;
  timer?: number;
  isShown?: boolean;
  onClose?: (value: boolean) => void;
};

export default function Snackbar({
  variant = "error",
  isShown = false,
  timer,
  onClose,
  children,
}: SnackbarProps) {
  const [baseColor, setBaseColor] = useState<String>("bg-red-700");
  const [image, setImage] = useState<string>(icError);

  useEffect(() => {
    if (variant === "error") {
      setBaseColor("bg-red-700");
      setImage(icError);
    } else if (variant === "info") {
      setBaseColor("bg-primary-700");
      setImage(icInfo);
    } else if (variant === "success") {
      setBaseColor("bg-green-700");
      setImage(icChecked);
    } else if (variant === "warning") {
      setBaseColor("bg-orange-700");
      setImage(icWarning);
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
    <div className="fixed top-4 left-1/2 -translate-x-1/2">
      {isShown ? (
        <Fade>
          <div
            className={`${baseColor} w-fit max-w-xl min-h-[65px] p-[19px_35px_10px_35px] rounded-[10px] flex gap-4 leading-[27px] text-black-100`}
          >
            <div>
              <Image layout="fixed" src={image} alt={`${variant} icon`} />
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
                  <Image src={icClose} alt="close icon" layout="fixed" />
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
