export const SubtitleSection = () => {
  return (
    <section className="flex flex-col items-center gap-16 pt-20 pb-8 px-4 md:px-0 relative self-stretch w-full bg-white">
        <div className="flex flex-col items-start gap-24 max-w-screen-xl px-4 md:px-8 py-0 relative w-full">
          <div className="gap-3 self-stretch w-full flex flex-col items-start relative">
            <div className="flex flex-col w-full items-start gap-3 relative">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[32px] md:text-5xl tracking-[-0.96px] leading-[1.2] md:leading-[48px]">
                <span className="text-[#101828] tracking-[-0.46px]">
                  Helping families{" "}
                </span>
                <span className="text-[#00359e] tracking-[-0.46px]">
                  protect, grow, and manage their wealth
                </span>
              </h2>
            </div>
            <p className="w-full md:w-[800px] text-[#475467] text-[18px] md:text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] font-text-xl-regular tracking-[var(--text-xl-regular-letter-spacing)]">
              Our close-knit team excels in providing meticulous financial
              planning, disciplined investing, and daily guidance — all with a
              personal touch.
            </p>
          </div>
        </div>
      </section>
  );
};
