import Animator from "@/components/Animator";
import Header from "@/components/Header";
import JourneyRail from "@/components/JourneyRail";
import Footer from "@/components/Footer";
import CinematicJourney from "@/components/sections/CinematicJourney";
import ImagineDay from "@/components/sections/ImagineDay";
import DailyLife from "@/components/sections/DailyLife";
import Amenities from "@/components/sections/Amenities";
import Trust from "@/components/sections/Trust";
import MasterPlan from "@/components/sections/MasterPlan";
import Units from "@/components/sections/Units";
import WhyAseel from "@/components/sections/WhyAseel";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <JourneyRail />
      <main>
        {/* الرحلة السينمائية: البوابة → التحليق → العائلة (hero + entrance + life مدموجين) */}
        <CinematicJourney />
        <ImagineDay />
        <DailyLife />
        <Amenities />
        <Trust />
        <MasterPlan />
        <Units />
        <WhyAseel />
        <Contact />
      </main>
      <Footer />
      <Animator />
    </>
  );
}
