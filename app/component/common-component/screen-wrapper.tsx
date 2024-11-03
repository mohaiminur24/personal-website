import { ReactNode } from "react";

interface PropsTypes {
    screenSpace?: number;
    children: ReactNode;
}

export default function ScreenWrapper({ screenSpace=20, children }: PropsTypes) {
    return (
        <div className={`ms-${screenSpace} flex item-center w-[90%]`}>{children}</div>
    );
}