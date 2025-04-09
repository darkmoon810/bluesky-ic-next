import {
  FileSearchIcon,
  StarIcon,
  TargetIcon,
} from "lucide-react";
import CallToActionSection from "@/components/common/CallToActionSection";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "./HeroSection";

export default function FinancialPlanning() {

  // Financial planning steps
  const planningSteps = [
    {
      icon: <TargetIcon className="w-6 h-6" />,
      title: "Set up Objectives",
      description:
        "This step requires for the client redefine their relationship with money and see it as a tool instead of just accumulating as much money as possible without knowing how to properly use it to reach their objectives. The objectives could be any of the following or a combination thereof:",
      bulletPoints: [
        "Reaching lifestyle goals at retirement",
        "Insuring children's future by saving for their education or leaving them a nest egg",
        "And, or paying off existing debt.",
      ],
    },
    {
      icon: <FileSearchIcon className="w-6 h-6" />,
      title: "Gathering information",
      description:
        "From your current expenses, to your savings, debt level, home values etc… we work with you to get all the relevant information to generate a Net worth Statement reflecting an accurate picture of your current financial situation.",
    },
    {
      icon: <StarIcon className="w-6 h-6" />,
      title: "Planning a Strategy",
      description:
        "At this point we rank your goals by degree of importance, we then match them with your various assets today and in the future to make sure your most important goals are achieved first. This will also include the level of risk to take in your investments, set up a realistic expected rate of return and drive your investment strategy.",
    },
    {
      icon: <StarIcon className="w-6 h-6" />,
      title: "Reviewing and readjusting",
      description:
        "At any material event in your life, income or assets values which could be for instance an unexpected inheritance, a marriage or a new job. We review how this affects your goals and if we are still on track and what needs to be done to make sure we are on track.",
    },
  ];


  return (
    <div className="flex flex-col items-start relative w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Goals Section */}
      <section className="flex flex-col items-center gap-16 px-4 md:px-0 py-12 md:py-20 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <div className="items-start gap-8 md:gap-24 flex flex-col md:flex-row max-w-screen-xl px-4 md:px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="gap-3 flex flex-col items-start relative flex-1 grow">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-3xl md:text-5xl tracking-[-0.96px] leading-[48px]">
                <span className="text-[#101828] tracking-[-0.46px] leading-[52px]">
                  We help You create a plan to{" "}
                </span>
                <span className="text-[#00359e] tracking-[-0.46px] leading-[52px]">
                  achieve Your goals
                </span>
              </h2>
            </div>
            <p className="self-stretch text-[#475467] text-base md:text-[length:var(--text-xl-regular-font-size)] leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
              We understand that every financial journey is unique
            </p>
          </div>

          <div className="flex-col items-start gap-12 flex-1 grow flex relative">
            <p className="self-stretch mt-[-1.00px] text-[#475467] text-base md:text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
              Whether you&apos;re looking for retirement planning and investment
              advice or a business owner needing financial management and
              employee benefit solutions, our skilled advisors will work closely
              to develop a personalized financial plan that matches your
              objectives. We are dedicated to helping individuals and families
              achieve financial goals and secure a prosperous future.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Steps Section 1 */}
      <section className="flex flex-col items-center justify-center gap-16 pt-0 pb-12 md:pb-20 px-4 md:px-0 self-stretch w-full flex-[0_0_auto] bg-white relative">
        <div className="flex flex-col md:flex-row max-w-screen-xl items-center justify-center gap-8 md:gap-[64px] px-4 md:px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex-col min-w-0 md:min-w-[480px] max-w-full md:max-w-[720px] items-start gap-8 flex-1 grow flex relative">
            {planningSteps.slice(0, 2).map((step, index) => (
              <Card
                key={index}
                className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] border-none shadow-none"
              >
                <div className="relative w-12 h-12 bg-[#f5f8ff] rounded-[171.43px] shadow-[0px_1px_2px_#1018280d] flex items-center justify-center">
                  {step.icon}
                </div>

                <CardContent className="flex flex-col items-start gap-2 pt-1 pb-0 px-0 relative self-stretch w-full p-0">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#101828] text-2xl md:text-[28px] tracking-[0] leading-[normal]">
                    {step.title}
                  </h3>

                  <div className="flex flex-col items-start gap-4">
                    <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#475467] text-base md:text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                      {step.description}
                    </p>

                    {step.bulletPoints &&
                      step.bulletPoints.map((point, idx) => (
                        <p
                          key={idx}
                          className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#475467] text-base md:text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                        >
                          {point}
                        </p>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative w-full md:w-[576px] h-[300px] md:h-[654px]">
            <img
              className="absolute w-full md:w-[576px] h-[300px] md:h-[576px] top-[39px] left-0 object-cover rounded-lg"
              alt="Person looking at mountains"
              src="/image.png"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Planning Steps Section 2 */}
      <section className="flex flex-col items-center justify-center gap-16 pt-0 pb-12 md:pb-20 px-4 md:px-0 self-stretch w-full flex-[0_0_auto] bg-white relative">
        <div className="flex flex-col-reverse md:flex-row max-w-screen-xl items-center justify-center gap-8 md:gap-[64px] px-4 md:px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="relative w-full md:w-[576px] h-[300px] md:h-[654px]">
            <img
              className="absolute w-full md:w-[576px] h-[300px] md:h-[576px] top-[39px] left-0 object-cover rounded-lg"
              alt="Person sitting by the ocean"
              src="/image-1.png"
              loading="lazy"
            />
          </div>

          <div className="flex-col min-w-0 md:min-w-[480px] max-w-full md:max-w-[720px] items-start gap-8 flex-1 grow flex relative">
            {planningSteps.slice(2, 4).map((step, index) => (
              <Card
                key={index}
                className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] border-none shadow-none"
              >
                <div className="relative w-12 h-12 bg-[#f5f8ff] rounded-[171.43px] shadow-[0px_1px_2px_#1018280d] flex items-center justify-center">
                  {step.icon}
                </div>

                <CardContent className="flex flex-col items-start gap-2 pt-1 pb-0 px-0 relative self-stretch w-full p-0">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#101828] text-2xl md:text-[28px] tracking-[0] leading-[normal]">
                    {step.title}
                  </h3>

                  <p className="self-stretch text-[#475467] text-base md:text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center justify-center pt-0 pb-20 px-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
        <CallToActionSection />
      </section>
    </div>
  );
};