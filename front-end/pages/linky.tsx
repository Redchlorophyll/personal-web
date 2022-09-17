import React, { useEffect, useState } from "react";
import Button from "@/components/common/Button/Index";
import ToggleMode from "@/components/common/ToggleMode/Index";
import { localStorageTheme } from "@/stores/theme";
import { useDispatch } from "react-redux";
import Tooltip from "@/components/common/Tooltip/Index";
import Snackbar from "@/components/common/Snackbar/Index";
import Dropdown from "@/components/common/Dropdown/Index";
import DefaultLayout from "@/components/layout/DefaultLayout";

type snackbarVariant = "error" | "info" | "success" | "warning";

export default function Linky() {
  const [snackbarVariant, setSnackbarVariant] =
    useState<snackbarVariant>("error");
  const [isShown, setIsShown] = useState<boolean>(false);
  const dispatch = useDispatch();

  function onSnackbarClose(state: boolean) {
    setIsShown(state);
  }

  useEffect((): void => {
    dispatch(localStorageTheme());
  }, []);

  return (
    <DefaultLayout>
      <div>
        <h1 className="card">Hello</h1>
        <Button />
        <ToggleMode />
        <div className="flex justify-center">
          <Tooltip tooltipContent={"ini adalah tooltip"} direction={"bottom"}>
            <span>Hover me here please!</span>
          </Tooltip>
        </div>
        <div className="flex p-4 gap-2 flex-col">
          {isShown || (
            <>
              <button
                onClick={() => {
                  setSnackbarVariant("error");
                  setIsShown(true);
                }}
              >
                Show Snackbar Error
              </button>
              <button
                onClick={() => {
                  setSnackbarVariant("info");
                  setIsShown(true);
                }}
              >
                Show Snackbar Info
              </button>
              <button
                onClick={() => {
                  setSnackbarVariant("warning");
                  setIsShown(true);
                }}
              >
                Show Snackbar Warning
              </button>
              <button
                onClick={() => {
                  setSnackbarVariant("success");
                  setIsShown(true);
                }}
              >
                Show Snackbar Success
              </button>
            </>
          )}
        </div>
        <Snackbar
          variant={snackbarVariant}
          timer={5000}
          isShown={isShown}
          onClose={onSnackbarClose}
        >
          test
        </Snackbar>
        <div className="w-[180px]">
          <Dropdown />
        </div>
      </div>
    </DefaultLayout>
  );
}
