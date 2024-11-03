import Image from "next/image";
import sliderImage from "@/public/home-picture/main-slider.png";

export default function MainSlider() {
  return (
    <div className="w-full h-[500] overflow-hidden flex justify-center mt-5">
      <div className="flex-1 flex justify-center flex-col">
        <h2 className="text-xs text-gray-400">{sliderData.toptext}</h2>
        <h1 className="text-3xl">{sliderData.title}</h1>
        <h2 className="text-xs mt-2">{sliderData.description}</h2>
        <div className="flex flex-row gap-5 mt-5">
            <button>Contact with me</button>
            <button>Download Resume</button>
        </div>
      </div>
      <div className="flex-1 items-center flex justify-end">
        <Image width={300} height={500} src={sliderImage} alt="Slider" />
      </div>
    </div>
  );
}

const sliderData = {
  toptext: "Developer here",
  title: "MohaiMinur Rahman Mukta",
  description:
    "As a MERN stack enthusiast at Trillion Bits Limited, I specialize in crafting seamless web applications and diving into React Native for mobile experiences. Whether it's front-end magic with React or back-end expertise with ASP.NET MVC, I'm dedicated to delivering top-notch solutions. Continuous learning is my commitment, ensuring I stay at the forefront of industry trends to tackle challenges and contribute creatively to our projects.",
};
