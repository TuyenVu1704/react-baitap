import React from "react";

type TSpinnerProps = "xs" | "sm" | "lg";

const spinnerSize = {
    xs: "w-5 h-5 border-2",
    sm: "w-8 h-8 border-2",
    lg: "w-10 h-10 border-4",
};

function Spinner({ size }: { size: TSpinnerProps }) {
    return (
        <div
            className={`w-10 h-10 border-white rounded-full border-t-transparent animate-spin ${spinnerSize[size]}`}
        ></div>
    );
}

export default Spinner;
