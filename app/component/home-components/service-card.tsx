import Image, { StaticImageData } from "next/image";

interface propsTypes{
    image: StaticImageData,
    title:string,
    subTitle:string,
    description:string,
}

export default function ServiceCard({image,title,subTitle,description}:propsTypes){
    return(
        <div className="p-5 bg-gray-50 rounded-md shadow-sm">
            <div className="w-10 h-10 m-5">
                <Image alt={title} src={image}/>
            </div>
            <div>
                <h1 className="text-lg font-mono text-gray-600 font-bold tracking-tighter">{title}</h1>
                <h2 className="text-sm font-sans text-gray-400 tracking-tight">{subTitle}</h2>
                <h3 className="text-xs text-gray-500 mt-3">{description}</h3>
            </div>
        </div>
    )
}