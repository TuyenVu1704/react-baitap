import { Fragment } from "react";

type TLoading = "fetching" | "successful" | "error";

const loading: TLoading = "fetching";

const number = [1, 2, 3, 4, 5];

export default function Home() {
    // if (!isRendered) return <div>the page not false</div>;

    // const renderLoadingValue = {
    //     fetching: <div>Loading</div>,
    //     successful: <div>Successfully</div>,
    //     error: <div>Error</div>,
    // };
    //
    //

    // Cách render 1 phần tử
    const renderLoadingValue: Record<TLoading, React.ReactNode> = {
        fetching: <div>Loading</div>,
        successful: <div>Successfully</div>,
        error: <div>Error</div>,
    };

    return (
        // <Fragment>
        //     {isRendered ? (
        //         <h3>True</h3>
        //     ) : (
        //         <div>
        //             <h1>Welcome to ReactJS course</h1>
        //         </div>
        //     )}
        // </Fragment>
        //  <Fragment> renderLoadingValue[loading]</Fragment>;

        // Cách render mảng

        <Fragment>
            {number.map((value, index) => {
                return <div key={index}>{value}</div>; // Khi render mảng key index là bắt buộc, vì key không được trùng nhau
            })}
        </Fragment>
    );
}

function Button() {}

const AnotherButton = () => {};
