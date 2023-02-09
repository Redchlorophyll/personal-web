import React, { useState, useEffect } from "react";
import { Modal, Input, Textarea, Button, Dropdown } from "ui";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import iluDelete from "assets/img/ilustrations/ilu_delete-linky.svg";
import iluUpdate from "assets/img/ilustrations/ilu_update-profile.svg";

type formDataProps = {
  id?: number | string;
  title: string;
  tag: string;
  url: string;
  color: string;
  description: string;
};

type ModalFormProps = {
  value?: formDataProps;
  type?: "edit" | "create";
  onSubmit?: (val: formDataProps) => void;
  onCancel?: () => void;
};

type ModalInfoProps = {
  type?: "delete" | "update-profile";
  onSubmit?: () => void;
  onCancel?: () => void;
};

const linkySchema = yup.object({
  title: yup.string().required(),
  tag: yup.string().required(),
  url: yup.string().url().required(),
  color: yup.string(),
  description: yup.string().required(),
});

export function ModalForm({
  value,
  type = "create",
  onSubmit,
  onCancel,
}: ModalFormProps) {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const options = [
    { label: "Red", value: "red hex" },
    { label: "Blue", value: "blue hex" },
    { label: "Green", value: "green hex" },
    { label: "Yellow", value: "yellow hex" },
  ];

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      ...value,
    },
    resolver: yupResolver(linkySchema),
  });

  const onSubmitLinky = (formVal: formDataProps) => {
    if (isBtnDisabled) return;

    if (!isLoading) setIsLoading(true);
    // TODO: HIT API CREATE
    setTimeout(() => {
      onSubmit(formVal);
    }, 3000);
  };

  useEffect(() => {
    if (type === "edit") {
      const objList = Object.keys(value);
      objList.forEach(
        (data: "title" | "tag" | "url" | "color" | "description") => {
          setValue(data, value[data]);
        }
      );
    }
  }, [value]);

  useEffect(() => {
    if (
      value.title.length === 0 ||
      value.url.length === 0 ||
      value.tag.length === 0 ||
      // data.color.length === 0 ||
      value.description.length === 0
    )
      setIsBtnDisabled(true);
    else setIsBtnDisabled(false);
  }, []);

  useEffect(() => {
    const subscription = watch((data) => {
      if (
        data.title.length === 0 ||
        data.url.length === 0 ||
        data.tag.length === 0 ||
        // data.color.length === 0 ||
        data.description.length === 0
      )
        setIsBtnDisabled(true);
      else setIsBtnDisabled(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <Modal
      style={{ minHeight: "150px" }}
      title={type === "create" ? "Create Linky" : "Edit Linky"}
    >
      <form onSubmit={handleSubmit(onSubmitLinky)}>
        <div>
          <div className="w-[300px] mb-4">
            <Input
              label="Name*"
              register={register("title")}
              placeholder="Input Name Here..."
            />
          </div>
          <div className="w-[300px] mb-4">
            <Input
              label="Link*"
              register={register("url")}
              errorMessage={errors.url?.message as string}
              isError={errors.url ? true : false}
              placeholder="Input Link Here..."
            />
          </div>
          <div className="flex gap-5 mb-4">
            <div className="w-[300px]">
              <Input
                label="Tag*"
                register={register("tag")}
                placeholder="Input Tag Name Here..."
              />
            </div>
            <div className="w-[240px]">
              <Dropdown
                options={options}
                label="color"
                placeholder="Select..."
              />
            </div>
          </div>
        </div>
        <Textarea
          label="Description"
          register={register("description")}
          placeholder="Describe link here..."
        />
        <div className="pt-7 flex gap-5">
          <Button
            btnType="submit"
            variant={isBtnDisabled ? "muted" : "primary"}
          >
            {isLoading ? (
              <div className="translate-y-[2px] inline-block pr-1">
                <div className="bg-[url('../img/icons/ic_loading.svg')] w-[15px] h-[15px] bg-contain animate-spin" />
              </div>
            ) : (
              ""
            )}
            {type === "create" ? "Create" : "Edit"}
          </Button>
          <Button variant="error" type="outline" onClick={() => onCancel()}>
            cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export function ModalInfo({
  type = "delete",
  onSubmit,
  onCancel,
}: ModalInfoProps) {
  const [isLoading, setIsLoading] = useState(false);
  const onModalSubmit = () => {
    if (!isLoading) setIsLoading(true);
    // TODO: HIT Respective API
    setTimeout(() => {
      onSubmit();
    }, 3000);
  };
  return (
    <Modal style={{ minHeight: "150px", width: "450px" }}>
      <div className="flex justify-center flex-col">
        <span className="w-full text-center font-bold text-base">
          {type === "delete"
            ? "Are You Sure Want to Delete this Linky?"
            : "Are You Sure Want to Change Your Profile Picture"}
        </span>
        <div className="flex justify-center pt-7">
          <Image
            width={220}
            src={type === "delete" ? iluDelete : iluUpdate}
            alt={
              type === "delete"
                ? "Delete Linky Illustration"
                : "Update Profile Illustration"
            }
          />
        </div>
        <p className="w-full text-center pt-5">
          {type === "delete"
            ? "deleted linky would not be able to Recover."
            : "Are You Sure Want to update profile picture?"}
        </p>
        <div className="pt-7 flex gap-5 justify-center">
          <Button
            variant={type === "update-profile" ? "primary" : "error"}
            type={type === "update-profile" ? "solid" : "outline"}
            onClick={onModalSubmit}
          >
            {isLoading ? (
              <div className="translate-y-[2px] inline-block pr-1">
                <div className="bg-[url('../img/icons/ic_loading.svg')] w-[15px] h-[15px] bg-contain animate-spin" />
              </div>
            ) : (
              ""
            )}
            {type === "delete" ? "Delete" : "Yes"}
          </Button>
          <Button
            variant={type === "update-profile" ? "error" : "primary"}
            type={type === "update-profile" ? "outline" : "solid"}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}
