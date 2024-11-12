import ScreenWrapper from "./component/common-component/screen-wrapper";
import MainSlider from "./component/common-component/main-slider";
import AboutMeSection from "./component/home-components/about-me-section";
import MyServiceSection from "./component/home-components/my-service-section";

export default function Home() {
  return (
    <>
      <MainSlider />
      <AboutMeSection />
      <MyServiceSection/>
    </>
  );
}
