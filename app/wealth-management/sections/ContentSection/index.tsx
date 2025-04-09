export const ContentSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 pt-0 pb-20 px-4 md:px-0 self-stretch w-full bg-white">
        <div className="flex flex-col md:flex-wrap md:flex-row items-center justify-center gap-[32px_64px] max-w-screen-xl px-4 md:px-8 py-0 relative w-full">
          {/* Text Content */}
          <div className="flex flex-col w-full md:min-w-[480px] md:max-w-[720px] md:flex-1 md:grow items-start gap-8">
            <div className="flex flex-col items-start gap-2 pt-1 pb-0 px-0 relative self-stretch w-full">
              <div className="flex flex-col h-auto md:h-[552px] items-start gap-4">
                {[
                  "Are you looking for a highly experienced and personalised wealth management company? Do you need help simplifying your intricate financial life and managing significant wealth?",
                  "At BlueSky Investment Counsel, we invest the time and effort to truly understand you, your goals, and your aspirations. We don't just develop a customized investment strategy that fits your unique needs; we guide you toward the future you envision for yourself and your family. We value the personal connection we establish with our clients, making you feel valued and important in our wealth management process.",
                  "Our approach is rooted in essential investment principles: asset protection, income generation, and portfolio growth. These principles are tailored to each client and evolve. We aim to deeply understand your goals, financial situation, and risk tolerance, allowing us to craft an appropriate investment strategy with diversified asset allocations. BlueSky Investment Counsel is committed to building long-term relationships with our clients, helping them achieve their evolving goals today and in the future.",
                  "Our ideal clients are families and household with at least $400,000 of liquid assets which include RRSP, TFSA, Investment accounts. That amount is the minimum for us to build a well diversified portfolio and to have our other services complimentary (Financial Plan, Estate Planning and account tax optimization).",
                ].map((paragraph, index) => (
                  <p
                    key={index}
                    className="relative self-stretch font-text-md-regular text-[#475467] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full md:w-[576px] h-[400px] md:h-[654px]">
            <img
              className="absolute w-full md:w-[576px] h-[400px] md:h-[576px] top-0 md:top-[39px] left-0 object-cover rounded-2xl"
              alt="Image"
              src="/image.png"
            />
          </div>
        </div>
      </section>
  );
};
