import ArticlesSection from "./sections/ArticlesSection"
import CallToActionSection from "@/components/common/CallToActionSection"
import CallToActionWrapperSection from "./sections/CallToActionWrapperSection"
import HeroSection from "./sections/HeroSection/HeroSection"
import MainContentSection from "./sections/MainContentSection"
import ServicesSection from "./sections/ServicesSection"
import ServicesWrapperSection from "./sections/ServicesWrapperSection"
export default function HomePage() {
  return (
    <main className="flex flex-col w-full items-center min-h-screen">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </div>
      <div className="w-full bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesSection />
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesWrapperSection />
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <MainContentSection />
        </div>
      </div>
      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center pt-0 pb-20 px-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <CallToActionSection />
      </div>
      <div className="w-full bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ArticlesSection />
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <CallToActionWrapperSection />
        </div>
      </div>
    </main>
  )
}
