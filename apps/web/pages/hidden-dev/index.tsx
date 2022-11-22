import React, { useEffect, useState } from "react";
// import Button from "@/components/common/Button/Index";
import ToggleMode from "@/components/ToggleMode/index";
import { localStorageTheme } from "@/stores/theme";
import { useDispatch } from "react-redux";
// import Tooltip from "@/components/common/Tooltip/Index";
// import Snackbar from "@/components/common/Snackbar/Index";
// import Dropdown from "@/components/common/Dropdown/Index";
// import Checkbox from "@/components/common/Checkbox/Index";
import Layout from "@/components/Layouts/index";
// import Radio from "@/components/common/Radio/Index";
// import Modal from "@/components/common/Modal/Index";
// import Textarea from "~/components/common/Textarea/Index";
import { Button, Radio, Tooltip, Modal, Dropdown, Snackbar, Checkbox, Textarea } from "ui";

type snackbarVariant = "error" | "info" | "success" | "warning";
type optVal = {
  label: string;
  value: string;
};

export default function Linky() {
  const [snackbarVariant, setSnackbarVariant] =
    useState<snackbarVariant>("error");
  const [isShown, setIsShown] = useState<boolean>(false);
  const [checkboxVals, setCheckboxVal] = useState<Array<string>>([
    "test2",
    "test",
  ]);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([
    { label: "BCA", value: "bca" },
    { label: "BRI", value: "bri" },
    { label: "Mandiri", value: "mandiri" },
    { label: "SeaBank", value: "seabank" },
    { label: "myBank", value: "myBank" },
  ]);
  const [textareaValue, setTextAreaValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [activeBank, setActiveBank] = useState<optVal | undefined>({
    label: "BCA",
    value: "bca",
  });
  const [radio, setRadio] = useState("test");

  function onChangeRadio(value: string) {
    console.log(value);
    setRadio(value);
  }

  function onSnackbarClose(state: boolean) {
    setIsShown(state);
  }

  function onChangeCheckbox(val: Array<string>) {
    setCheckboxVal(val);
  }

  function onModalClose() {
    setModalVisible(false);
  }

  function onModalOpen() {
    setModalVisible(true);
  }

  return (
    <Layout>
      <div>
        {modalVisible ? (
        <Modal title="edit page">
            <Button onClick={onModalClose} variant="muted" type="outline">
              close
            </Button>
          </Modal>
        ) : (
          ""
        )}
        <h1 className="card">Hello</h1>
        <Button onClick={onModalOpen}>Open Modal</Button>
        <ToggleMode />
        <div className="flex justify-center">
          <Tooltip tooltipContent={"ini adalah tooltip"} direction={"bottom"}>
            <span>Hover me here please!</span>
          </Tooltip>
        </div>
        <div className="flex p-4 gap-2 flex-col bg-primary-500">
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
          isShown={isShown}
          onClose={onSnackbarClose}
        >
          test
        </Snackbar>
        <div className="w-[370px]">
          <Dropdown
            label="test"
            type="dropdown"
            options={options}
            placeholder="pilih bank"
            value={activeBank}
            onChange={(val: optVal | undefined) => {
              if (val) {
                setActiveBank(val);
              }
            }}
          />
        </div>
        {checkboxVals}
      <Checkbox
        valueList={checkboxVals}
        onChange={(val: Array<string>) => onChangeCheckbox(val)}
        value={"test"}
      />
      <Checkbox
        valueList={checkboxVals}
        onChange={(val: Array<string>) => onChangeCheckbox(val)}
        value={"test1"}
      />
      <Checkbox
        valueList={checkboxVals}
        onChange={(val: Array<string>) => onChangeCheckbox(val)}
        value={"test2"}
      />
      {radio}
      <Radio
        value="test"
        valueGroup={radio}
        onChange={(val: string) => onChangeRadio(val)}
      />
      <Radio
        value="test1"
        valueGroup={radio}
        onChange={(val: string) => onChangeRadio(val)}
      />
      <Radio
        value="test2"
        valueGroup={radio}
        onChange={(val: string) => onChangeRadio(val)}
      />
    <div className="w-[370px]">
      <Textarea
          label="Content"
          value={textareaValue}
          onChange={(e) => setTextAreaValue(e)}
          isDisabled={false}
          limit={100}
        />
        {textareaValue}
      </div>
    </div>
    </Layout>
  );
}
