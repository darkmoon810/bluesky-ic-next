import CallToActionSection from "@/components/common/CallToActionSection"
import HeroSection from "./sections/HeroSection";
import ContactInfoSection from "./sections/ContactInfoSection";
import ProfileSection from "./sections/ProfileSection";


export default function About() {

  return (
    <div className="flex flex-col items-start relative w-full">

      {/* Hero Section */}
      <HeroSection />

      {/* Contact Info Cards */}
      <ContactInfoSection />

      {/* Profile Section */}
      <ProfileSection />

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center pt-0 pb-20 px-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <CallToActionSection />
      </div>
      
    </div>
  );
};