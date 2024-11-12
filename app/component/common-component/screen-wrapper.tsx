import { ReactNode } from "react";

interface PropsTypes {
  children: ReactNode;
}

export default function ScreenWrapper({ children }: PropsTypes) {
  return (
    <div className={`ms-2 md:ms-10 lg:ms-20 flex item-center w-[90%] flex-col`}>{children}</div>
  );
}
