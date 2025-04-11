import { Button } from "../../ui/button";
import Link from "next/link";
import { Card, CardContent } from "../../ui/card";

export default function CallToActionSection() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <section className="w-full bg-white">
        <div className="flex flex-col max-w-screen-xl items-start gap-8 px-4 sm:px-8 py-0 relative w-full flex-[0_0_auto]">
          <Card className="flex-col lg:flex-row items-center gap-8 p-8 lg:p-16 self-stretch w-full flex-[0_0_auto] bg-[#002266] rounded-2xl flex relative border-none">
            <CardContent className="flex flex-col lg:flex-row items-center justify-between w-full p-0 gap-8">
              <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-white text-3xl md:text-[40px] tracking-[0] leading-[normal] text-center lg:text-left">
                  We are Committed to Your Success
                </h2>
                <p className="self-stretch opacity-80 text-white text-lg md:text-xl text-center lg:text-left">
                  Our personalized approach and comprehensive services ensure
                  that you receive the highest level of care and expertise, set
                  the stage for a prosperous future.
                </p>
              </div>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full lg:w-auto gap-1.5 px-[18px] py-3 bg-white rounded-lg overflow-hidden border border-solid border-[#d0d5dd] shadow-shadows-shadow-xs"
                >
                  Contact Us
                </Button>
              </Link>

            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
