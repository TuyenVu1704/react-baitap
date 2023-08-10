import React from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "../loading/Spinner";
import classNames from "classnames";

type TButtonVariants = "primary" | "secondary" | "danger";
type TButtonSizes = "sm" | "md" | "lg";

const buttonVariants: Record<TButtonVariants, string> = {
    primary: "bg-purple-500",
    secondary: "bg-blue-500",
    danger: "bg-red-500",
};

const buttonSizes: Record<TButtonSizes, string> = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
};

type ButtonProps = {
    variants: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    className?: string;

    children?: React.ReactNode;
};

function Buttona(props: ButtonProps) {
    if (!props) return null;
    const { variants, size, isLoading, className, children } = props;
    const child = isLoading ? <Spinner size="sm"></Spinner> : children;
    const baseClassName = twMerge(
        "inline-flex items-center justify-center p-5 text-white rounded-lg disabled:opacity-50"
    );
    const allClasses = classNames(
        baseClassName,
        className,
        buttonVariants[variants],
        buttonVariants[variants]
    );
    return (
        <button className={allClasses} disabled={isLoading}>
            {child}
        </button>
    );
}

export default Buttona;
