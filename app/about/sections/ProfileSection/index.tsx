export default function ProfileSection() {
    return (
        <div className="flex-col items-center justify-center gap-16 px-0 py-20 self-stretch w-full flex-[0_0_auto] bg-white flex relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-screen-xl px-4 sm:px-8 py-0 relative w-full">
          <div className="flex-col items-start gap-8 w-full lg:w-1/2 flex relative">
            <div className="flex flex-col items-start relative self-stretch w-full">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#101828] text-4xl md:text-5xl tracking-[-0.96px] leading-[normal]">
                Jean-Pierre Berger, CIM
              </h2>
              <h3 className="relative self-stretch [font-family:'DM_Serif_Text',Helvetica] font-normal text-transparent text-2xl md:text-[28px] tracking-[0] leading-[normal]">
                <span className="text-[#00359e]">President</span>
                <span className="text-[#101828]"> & Portfolio Manager</span>
              </h3>
            </div>
            <div className="flex flex-col items-start gap-4 relative self-stretch">
              <p className="relative self-stretch text-[#475467] text-lg">
                Jean-Pierre (JP) is a Portfolio Manager and the founder of
                BlueSky Investment Counsel. His experience encompasses
                managing investment portfolios for high net worth clients
                including senior executives at large corporations, business
                owners and not-for-profit organizations.
              </p>
              <p className="relative self-stretch text-[#475467] text-lg">
                He holds a bachelor of Finance at Bishop's University
                in Quebec. Jean-Pierre has extensive knowledge in financial
                management. He has worked in various companies across
                diverse sectors in France and Canada. He is also a Chartered
                Investment Manager (CIM) with the Canadian Securities
                Institute.
              </p>
              <p className="relative self-stretch text-[#475467] text-lg">
                Jean-Pierre also worked as Investment Advisor and Portfolio
                Manager at a large bank-owned wealth management firm before
                founding BlueSky Investment Counsel. Above anything else,
                Jean-Pierre likes to get to know every client and work with
                them closely to meet their portfolio objectives.
              </p>
            </div>
          </div>
          <div className="relative w-full lg:w-[576px] h-auto lg:h-[654px] rounded-2xl">
            <img
              className="w-full lg:w-[576px] h-auto lg:h-[576px] object-cover rounded-2xl"
              alt="Jean-Pierre Berger"
              src="/founder.png"
            />
          </div>
        </div>
      </div>
    )
}