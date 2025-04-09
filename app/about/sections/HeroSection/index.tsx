

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-white">

      {/* Hero Content */}
      <div className="flex flex-col items-center gap-16 px-0 py-20 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="flex-col items-center gap-8 flex max-w-screen-xl px-4 sm:px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex-col items-center gap-12 self-stretch w-full flex-[0_0_auto] flex relative">
            <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative w-full lg:w-[900px] mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#101828] text-4xl md:text-5xl lg:text-[64px] text-center tracking-[-1.28px] leading-tight lg:leading-[72px]">
                BlueSky Investment Counsel is a private wealth management
                company
              </h1>
              <p className="w-full lg:w-[900px] text-[#475467] text-lg md:text-xl text-center">
                We believes that high-net-worth individuals and entrepreneurs
                deserve a level of service and expertise that goes beyond what
                traditional banks can offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
