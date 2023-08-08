import React from "react";
import { twMerge } from "tailwind-merge";

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
    title: string;
    variants: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
};

function Buttona(props: ButtonProps) {
    if (!props) return null;
    const { title, variants, size } = props;
    return (
        <button
            className={twMerge(
                "inline-flex items-center justify-center p-5 text-white rounded-lg ",
                buttonVariants[variants],
                buttonSizes[size || "sm"]
            )}
        >
            {title}
        </button>
    );
}

export default Buttona;
