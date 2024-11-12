import Image from "next/image";
import aboutMePicture from "@/public/home-picture/about-me.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import SectionWrapper from "../common-component/section-wrapper";

export default function AboutMeSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col lg:flex-row h-auto overflow-hidden gap-5 md:gap-20">
        <div className="flex justify-center lg:justify-end flex-1">
          <Image
            width={350}
            className="rounded-md shadow-sm animate-pulse shadow-yellow-300"
            alt="about me"
            src={aboutMePicture}
          />
        </div>
        <div className="flex-1 justify-center flex flex-col font-thin">
          <h1 className="section-title">About me</h1>
          <h2>Software Engineer at {personalDetails.office}</h2>
          <h2 className="text-xs mt-2 w-[100%] lg:w-[70%] xl:w-[50%] text-gray-500">
            {personalDetails.description}
          </h2>
          <h2 className="text-xs mt-5 w-[100%] lg:w-[70%] xl:w-[50%] text-gray-500">
            {personalDetails.subDescription}
          </h2>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 text-2xl transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

const personalDetails = {
  office: "Trillionbits.ltd",
  description:
    "As a MERN stack enthusiast at Trillion Bits Limited, I specialize in crafting seamless web applications and diving into React Native for mobile experiences. Whether it's front-end magic with React or back-end expertise with ASP.NET MVC, I'm dedicated to delivering top-notch solutions. Continuous learning is my commitment, ensuring I stay at the forefront of industry trends to tackle challenges and contribute creatively to our projects.",
  subDescription:
    "I specialize in crafting seamless web applications and diving into React Native for mobile experiences. Whether it's front-end magic with React or back-end expertise with ASP.NET MVC, I'm dedicated to delivering top-notch solutions. Continuous learning is my commitment, ensuring I stay at the forefront of industry trends to tackle challenges and contribute creatively to our projects.",
};

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
];
