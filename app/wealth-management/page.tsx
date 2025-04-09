import CallToActionSection from "@/components/common/CallToActionSection";
import { ContentSection } from "./sections/ContentSection";
import { HeroSection } from "./sections/HeroSection";
import { SubtitleSection } from "./sections/SubtitleSection";

export default function WealthManagement() {

  return (
    <div className="flex flex-col items-start relative">

      {/* Hero Section */}
      <HeroSection />

      {/* Subtitle Section */}
      <SubtitleSection />

      {/* Content Section with Image */}
      <ContentSection />

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center pt-0 pb-20 px-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <CallToActionSection />
      </section>
    </div>
  );
};