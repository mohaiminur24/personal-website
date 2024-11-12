import { ReactNode } from "react";

interface propsTypes{
    children:ReactNode,
    subtitle?:string,
}

export default function SectionTitle({children, subtitle}:propsTypes) {
  return (
    <div className="mt-20 mb-10 flex justify-center flex-col items-center">
      <h1 className="text-3xl text-center font-mono font-bold tracking-tighter">{children}</h1>
      <h2 className="mt-1 text-center text-xs w-[70%] text-gray-400">{subtitle}</h2>
    </div>
  );
}
