import { BuildingIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { aboutStatics } from "@/lib/Statics/about.static";

const { contact } = aboutStatics

export default function ContactInfoSection() {

  // Contact information data
  const contactInfo = [
    {
      icon: <BuildingIcon className="w-8 h-8" />,
      title: "Our Office",
      titleHighlight: "Office",
      content: "161 Bay St Toronto, Ontario, M5J 2S1 Canada",
      iconSrc: "/building-05.svg",
    },
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      title: "Call Us",
      titleHighlight: "Call",
      content: "416-930-5550",
      iconSrc: "/phone.svg",
    },
    {
      icon: <MailIcon className="w-8 h-8" />,
      title: "Email Us",
      titleHighlight: "Email",
      content: "contact@blueskyic.com",
      iconSrc: "/mail-01.svg",
    },
  ];


  return (
    <div className="flex flex-col items-center gap-16 pt-0 pb-20 px-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex-col items-start gap-16 flex max-w-screen-xl px-4 sm:px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="flex flex-col items-center gap-4 relative border-none shadow-none"
            >
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <div className="relative w-16 h-16 bg-[#00359e] rounded-[228.57px] shadow-[0px_1.33px_2.67px_#1018280d] flex items-center justify-center">
                  <img
                    className="w-8 h-8"
                    alt={info.title}
                    src={info.iconSrc}
                  />
                </div>
                <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-transparent text-[28px] text-center tracking-[0] leading-[normal]">
                    {info.titleHighlight === "Office" && <span className="text-[#101828]">Our </span>}
                    <span className="text-[#00359e]">
                      {info.titleHighlight}
                    </span>
                    {info.titleHighlight === "Office" ? (
                      ""
                    ) : (
                      <span className="text-[#101828]"> Us</span>
                    )}
                  </h3>
                  <p className="relative self-stretch text-[#475467] text-center">
                    {info.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
