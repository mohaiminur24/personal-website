import { ReactNode } from "react";

interface propsTypes{
    children: ReactNode
}

export default function SectionWrapper({ children }: propsTypes) {
  return <div className="pt-10 lg:pt-28 mx-2 lg:mx-20 sm:mx-5 pb-10">{children}</div>;
}
