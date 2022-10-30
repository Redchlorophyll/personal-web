import { ReactNode } from 'react';

declare type optVal = {
    label: string;
    value: string;
};
declare type direction = "top" | "bottom" | "left" | "right";
declare type variantStyle = "warning" | "success" | "primary" | "error" | "muted";
declare type variantType = "error" | "info" | "success" | "warning";
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

export { Button, Radio, direction, optVal, typeStyle, variantStyle, variantType };
