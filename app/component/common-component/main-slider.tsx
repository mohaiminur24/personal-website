"use client";
import Image from "next/image";
import ownerPicture from "@/public/home-picture/about-me.png";
import { HiOutlineDownload } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function MainSlider() {
  const engineerText = [
    "Software Engineer",
    "Website Developer",
    "ASP.NET(MVC) Developer",
  ];
  const [textToShow, setTextToShow] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const typingSpeed = 300;
  const pauseDuration = 2000;

  const DownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1IRBjw68MtXnUnxPAtaWjmc10TMSReaFV/view?usp=drive_link",
      "_blank"
    );
  };

  const handleWritingText = () => {
    const currentText = engineerText[currentTextIndex];
    setTextToShow(currentText.split("")[0]);
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setTextToShow((prev) => prev + currentText.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTextToShow("");
          setCurrentTextIndex((prev) => (prev + 1) % engineerText.length);
        }, pauseDuration);
      }
    }, typingSpeed);
  };

  useEffect(() => {
    handleWritingText();
  }, [currentTextIndex]);

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center main-slider-bg flex-col px-2">
      <Image
        className="rounded-full border-4 mt-16 md:mt-0"
        src={ownerPicture}
        width={180}
        alt="MohaiMinur Rahman Mukta"
      />
      <h1 className="mt-5 font-bold text-center text-white text-3xl font-mono tracking-widest">
        Here I'am MohaiMinur Rahman
      </h1>
      <h1 className="text-white font-semibold font-sans text-center">
        I'am Passionate{" "}
        <span className="text-yellow-300 typing-effect">{textToShow}</span>
      </h1>
      <div className="mt-8 flex flex-col md:flex-row gap-3 mb-10">
        <button className="btn-secondary">Contact with me</button>
        <button
          onClick={DownloadResume}
          className="btn-primary flex flex-row gap-2 justify-center items-center"
        >
          <span>Download Resume</span>
          <HiOutlineDownload className="animate-bounce" />
        </button>
      </div>
    </div>
  );
}
