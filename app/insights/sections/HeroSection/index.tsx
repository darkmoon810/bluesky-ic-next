
export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-8 sm:gap-16 px-4 sm:px-0 py-12 sm:py-20 relative self-stretch w-full bg-white">
        <div className="flex-col items-center gap-8 flex max-w-screen-xl px-4 sm:px-8 py-0 relative w-full">
          <div className="flex-col items-center gap-8 sm:gap-12 self-stretch w-full flex relative">
            <div className="flex flex-col items-center gap-4 sm:gap-6 relative self-stretch w-full">
              <h1 className="w-full sm:w-[600px] lg:w-[900px] mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#101828] text-3xl sm:text-5xl lg:text-[64px] text-center tracking-[-1.28px] leading-tight sm:leading-[72px]">
                The latest writings from our team
              </h1>
              <p className="w-full sm:w-[600px] lg:w-[900px] text-[#475467] text-base sm:text-xl text-center leading-relaxed">
                The latest news and resources from the expert
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};
