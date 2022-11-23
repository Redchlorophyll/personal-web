import { ReactNode, CSSProperties } from 'react';

type variantStyle = "warning" | "success" | "primary" | "error" | "muted";
type typeStyle = "solid" | "outline" | "translucent";
type buttonProps = {
    variant?: variantStyle;
    children?: ReactNode;
    type?: typeStyle;
    onClick?: () => void;
};
declare function Button({ variant, children, type, onClick, }: buttonProps): JSX.Element;

type radioProps = {
    value?: string;
    valueGroup?: string;
    onChange?: (value: string) => void;
    label?: string;
};
declare function Radio({ value, valueGroup, onChange, label, }: radioProps): JSX.Element;

type inputProps = {
    onChange?: (event: string) => void;
    value?: string;
    placeholder?: string;
    isError?: boolean;
    errorMessage?: string;
    isDisabled?: boolean;
    label?: string;
};
declare function Input({ onChange, value, placeholder, isError, errorMessage, isDisabled, label, }: inputProps): JSX.Element;

type modalProps = {
    children?: ReactNode;
    title?: string;
    style?: CSSProperties;
};
declare function Modal({ children, title, style }: modalProps): JSX.Element;

type direction = "top" | "bottom" | "left" | "right";
type tooltipProps = {
    children?: ReactNode;
    tooltipContent?: ReactNode;
    direction?: direction;
};
declare function Tooltip({ direction, tooltipContent, children, }: tooltipProps): JSX.Element;

type variantType = "error" | "info" | "success" | "warning";
type SnackbarProps = {
    children?: ReactNode;
    variant?: variantType;
    timer?: number;
    isShown?: boolean;
    onClose?: (value: boolean) => void;
};
declare function Snackbar({ variant, isShown, timer, onClose, children, }: SnackbarProps): JSX.Element;

type optVal = {
    label: string;
    value: string;
};
type dropdownProps = {
    options?: Array<optVal>;
    placeholder?: string;
    value?: optVal | undefined;
    onChange?: (value: optVal | undefined) => void;
    type?: "dropdown" | "combobox";
    label?: string;
};
declare function Dropdown({ type, options, placeholder, onChange, value, label, }: dropdownProps): JSX.Element;

type checkboxProps = {
    value?: string;
    valueList?: Array<string>;
    onChange?: (value: Array<string>) => void;
    label?: string;
};
declare function Checkbox({ value, valueList, onChange, label, }: checkboxProps): JSX.Element;

type textareaProps = {
    onChange?: (event: string) => void;
    value?: string;
    placeholder?: string;
    limit?: number;
    isDisabled?: boolean;
    label?: string;
    style?: CSSProperties;
};
declare function Textarea({ placeholder, value, onChange, limit, isDisabled, style, label, }: textareaProps): JSX.Element;

export { Button, Checkbox, Dropdown, Input, Modal, Radio, Snackbar, Textarea, Tooltip, variantType };
