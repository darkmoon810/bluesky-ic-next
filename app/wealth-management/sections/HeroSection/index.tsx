export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-16 px-4 md:px-0 py-20 relative self-stretch w-full bg-white">
        <div className="flex flex-col items-center gap-8 max-w-screen-xl px-4 md:px-8 py-0 relative w-full">
          <div className="flex flex-col items-center gap-12 w-full">
            <div className="flex flex-col items-center gap-6 relative w-full">
              <h1 className="w-full md:w-[900px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#101828] text-[40px] md:text-[64px] text-center tracking-[-1.28px] leading-[1.1] md:leading-[72px]">
                Personalized wealth management built for You
              </h1>
              <p className="w-full md:w-[900px] text-[#475467] text-[18px] md:text-[length:var(--text-xl-regular-font-size)] text-center leading-[var(--text-xl-regular-line-height)] font-text-xl-regular tracking-[var(--text-xl-regular-letter-spacing)]">
                Helping families protect, grow, and manage Their wealth.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};
