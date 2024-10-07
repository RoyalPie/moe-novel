import { Heading } from "./heading";
import React from "react";

interface Props {
    className?: string;
    headerText?: React.ReactNode;
}

export default function UserProfile({ headerText = '1', ...props }: Props){
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-end h-[466px] w-[32%] md:w-full md:h-auto bg-[url(/images/image_group_5.svg) bg-cover bg-no-repeat]`}
        >
            <Heading
                size="heading6x1"
                as="h2"
                className="rounded-[42px] text-[32px] mb-[380px] w-[86px] h-[86px] flex items-center justify-center bg-white-a700 text-center font-extrabold italic text-red-a700_b7"
            >
                {headerText}
            </Heading>
        </div>
    );
}