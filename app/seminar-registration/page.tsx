import {
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

// What you'll learn items
const learningPoints = [
  "Advanced portfolio management techniques",
  "Market insights and investment opportunities",
  "Risk mitigation strategies tailored for you",
];

// Event details
const eventDetails = [
  {
    icon: <CalendarIcon className="w-6 h-6" />,
    title: "Wednesday, April 17, 2025",
  },
  {
    icon: <ClockIcon className="w-6 h-6" />,
    title: "6:00 PM - 7:30 PM EST",
  },
  {
    icon: <MapPinIcon className="w-6 h-6" />,
    title: "161 Bay St Toronto, Ontario, M5J 2S1 Canada",
  },
];

export default function SeminarRegistration() {

  return (
    <div className="flex flex-col items-start relative w-full">

      <div className="flex flex-col items-center gap-16 px-4 sm:px-0 py-12 sm:py-20 relative self-stretch w-full bg-white">
        <div className="flex-col items-center gap-8 flex max-w-screen-xl px-4 sm:px-8 py-0 relative w-full">
          <div className="flex-col items-center gap-12 self-stretch w-full flex relative">
            <div className="flex flex-col items-center gap-6 relative self-stretch w-full">
              <h1 className="relative w-full sm:w-[900px] mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[#101828] text-3xl sm:text-5xl lg:text-[64px] text-center tracking-[-1.28px] leading-tight sm:leading-[72px]">
                Register for our exclusive wealth management seminar
              </h1> 

              <p className="w-full sm:w-[900px] font-text-xl-regular text-[#475467] text-center text-base sm:text-xl">
                Take control of your financial future with expert-led
                discussions on investment management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-16 px-4 sm:px-0 py-12 sm:py-20 relative self-stretch w-full bg-white">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 max-w-screen-xl px-4 sm:px-8 py-0 relative w-full">
          <div className="flex flex-col items-start gap-8 relative flex-1 grow">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-4xl sm:text-5xl tracking-[-0.96px] leading-[52px]">
                <span className="text-[#101828] tracking-[-0.46px]">
                  What you&apos;ll{" "}
                </span>
                <span className="text-[#00359e] tracking-[-0.46px]">learn</span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
              {learningPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 relative self-stretch w-full"
                >
                  <CheckCircleIcon className="w-6 h-6 text-[#00359e] flex-shrink-0" />
                  <div className="relative flex-1 mt-[-1.00px] font-text-xl-regular text-[#475467] text-base sm:text-xl">
                    {point}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="bg-[#eaecf0]" />

            <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-4xl sm:text-5xl tracking-[-0.96px] leading-[52px]">
                <span className="text-[#00359e] tracking-[-0.46px]">Date</span>
                <span className="text-[#101828] tracking-[-0.46px]">
                  {" "}
                  and time
                </span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="flex flex-col sm:flex-row items-start gap-6 relative self-stretch w-full">
                {eventDetails.slice(0, 2).map((detail, index) => (
                  <Card key={index} className="flex-1 w-full bg-gray-50 rounded-2xl">
                    <CardContent className="flex flex-col items-start justify-center gap-3 p-4">
                      <div className="relative w-12 h-12 bg-white rounded-[171.43px] shadow-[0px_1px_2px_#1018280d] flex items-center justify-center">
                        {detail.icon}
                      </div>
                      <div className="self-stretch font-semibold text-[#101828] text-lg sm:text-xl leading-7 [font-family:'Inter',Helvetica]">
                        {detail.title}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-start gap-6 relative self-stretch w-full">
                <Card className="flex-1 bg-gray-50 rounded-2xl">
                  <CardContent className="flex flex-col items-start justify-center gap-3 p-4">
                    <div className="relative w-12 h-12 bg-white rounded-[171.43px] shadow-[0px_1px_2px_#1018280d] flex items-center justify-center">
                      {eventDetails[2].icon}
                    </div>
                    <div className="self-stretch font-semibold text-[#101828] text-lg sm:text-xl leading-7 [font-family:'Inter',Helvetica]">
                      {eventDetails[2].title}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="flex-col items-start gap-12 flex-1 grow flex relative w-full lg:w-auto">
            <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                <div className="flex flex-col sm:flex-row items-start gap-8 relative self-stretch w-full">
                  <div className="flex-col items-start gap-1.5 flex-1 grow flex relative w-full">
                    <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                      <label className="font-text-sm-medium text-[#344054]">
                        First name
                      </label>
                      <Input
                        className="px-3.5 py-2.5 bg-white rounded-lg border border-[#d0d5dd] shadow-shadows-shadow-xs w-full"
                        placeholder="First name"
                      />
                    </div>
                  </div>

                  <div className="flex-col items-start gap-1.5 flex-1 grow flex relative w-full">
                    <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                      <label className="font-text-sm-medium text-[#344054]">
                        Last name
                      </label>
                      <Input
                        className="px-3.5 py-2.5 bg-white rounded-lg border border-[#d0d5dd] shadow-shadows-shadow-xs w-full"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                  <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                    <label className="font-text-sm-medium text-[#344054]">
                      Email
                    </label>
                    <Input
                      className="px-3.5 py-2.5 bg-white rounded-lg border border-[#d0d5dd] shadow-shadows-shadow-xs w-full"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                  <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                    <label className="font-text-sm-medium text-[#344054]">
                      Phone number
                    </label>
                    <Input
                      className="px-3.5 py-2.5 bg-white rounded-lg border border-[#d0d5dd] shadow-shadows-shadow-xs w-full"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                <Button className="w-full bg-[#00359e] text-white rounded-lg py-3">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};