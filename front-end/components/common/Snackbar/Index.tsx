import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import icWarning from "@/assets/img/icons/ic_warning.svg";
import icInfo from "@/assets/img/icons/ic_info.svg";
import icError from "@/assets/img/icons/ic_error.svg";
import icClose from "@/assets/img/icons/ic_snackbar-close.svg";
import icChecked from "@/assets/img/icons/ic_checked.svg";
import { Fade } from "react-awesome-reveal";

type SnackbarProps = {
  children?: ReactNode;
  variant?: "error" | "info" | "success" | "warning";
  timer?: number;
  isShown?: Boolean;
  onClose?: Function;
};

const defaultProps: SnackbarProps = {
  variant: "error",
  isShown: false,
};

const Snackbar: React.FunctionComponent<SnackbarProps> = (props) => {
  const [baseColor, setBaseColor] = useState<String>("bg-red-700");
  const [image, setImage] = useState<string>(icError);

  useEffect(() => {
    if (props.variant === "error") {
      setBaseColor("bg-red-700");
      setImage(icError);
    } else if (props.variant === "info") {
      setBaseColor("bg-primary-700");
      setImage(icInfo);
    } else if (props.variant === "success") {
      setBaseColor("bg-green-700");
      setImage(icChecked);
    } else if (props.variant === "warning") {
      setBaseColor("bg-orange-700");
      setImage(icWarning);
    }
  }, [props.variant]);

  function onClose() {
    if (props.onClose) props.onClose(false);
  }

  useEffect(() => {
    if (props.timer && props.isShown) {
      setTimeout(() => {
        if (props.onClose) onClose();
      }, props.timer);
    }
  }, [props.timer, props.isShown]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2">
      {props.isShown ? (
        <Fade>
          <div
            className={`${baseColor} w-fit max-w-xl min-h-[65px] p-[19px_35px_10px_35px] rounded-[10px] flex gap-4 leading-[27px] text-black-100`}
          >
            <div>
              <Image layout="fixed" src={image} alt={`${props.variant} icon`} />
            </div>
            <div>
              <p className="text-base translate-y-[2px] min-w-[10rem]">
                {props.children
                  ? props.children
                  : "Snackbar Children Goes Here!"}
              </p>
            </div>
            {!props.timer ? (
              <div className="-translate-y-1 translate-x-4">
                <button onClick={() => onClose()} data-testid="close-snackbar">
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
};

Snackbar.defaultProps = defaultProps;

export default Snackbar;
