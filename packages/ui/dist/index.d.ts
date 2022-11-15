import { ReactNode } from 'react';

declare type optVal = {
    label: string;
    value: string;
};
declare type direction = "top" | "bottom" | "left" | "right";
declare type variantStyle$1 = "warning" | "success" | "primary" | "error" | "muted";
declare type variantType = "error" | "info" | "success" | "warning";
declare type typeStyle$1 = "solid" | "outline" | "translucent";

declare type variantStyle = "warning" | "success" | "primary" | "error" | "muted";
declare type typeStyle = "solid" | "outline" | "translucent";
declare type buttonProps = {
    variant?: variantStyle;
    children?: ReactNode;
    type?: typeStyle;
    onClick?: () => void;
};
declare function Button({ variant, children, type, onClick, }: buttonProps): JSX.Element;

declare type radioProps = {
    value?: string;
    valueGroup?: string;
    onChange?: (value: string) => void;
    label?: string;
};
declare function Radio({ value, valueGroup, onChange, label, }: radioProps): JSX.Element;

declare type inputProps = {
    onChange?: (event: string) => void;
    value?: string;
    placeholder?: string;
    isError?: boolean;
    errorMessage?: string;
    isDisabled?: boolean;
    label?: string;
};
declare function Input({ onChange, value, placeholder, isError, errorMessage, isDisabled, label, }: inputProps): JSX.Element;

export { Button, Input, Radio, direction, optVal, typeStyle$1 as typeStyle, variantStyle$1 as variantStyle, variantType };
