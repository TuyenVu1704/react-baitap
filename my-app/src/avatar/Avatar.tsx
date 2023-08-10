import { IconUser } from "@/components/icons";
import React from "react";

type TAvatarProps = {
    title?: string;
    image?: string;
};

function Avatar(props: TAvatarProps) {
    const { title, image } = props;

    return (
        <div
            className={`w-20 h-60 bg-purple-500 flex  items-center justify-center rounded-full`}
        >
            <IconUser></IconUser>

            {/* {image && (
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                />
            )} */}
            {/* {title?.slice(0, 2)} */}
        </div>
    );
}

export default Avatar;
