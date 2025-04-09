import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: "/users-01.svg",
    iconAlt: "Users",
    titleBlue: "A team of experts",
    titleBlack: " working with you",
    description:
      "Unlike banks, where you may be just another account number, we provide each client with a dedicated financial advisor who is always available to offer guidance and answer your questions. This personalized approach ensures that you receive the attention and expertise necessary to navigate complex financial landscapes.",
  },
  {
    icon: "/coins-stacked-03.svg",
    iconAlt: "Coins stacked",
    titleBlue: "Comprehensive",
    titleBlack: " wealth management services",
    description:
      "Our services extend beyond simple investment advice. We offer a holistic approach to wealth management, including estate planning, tax optimization, philanthropy, and succession planning. Our goal is to ensure that every aspect of your financial life is seamlessly integrated and working towards your long-term success.",
  },
  {
    icon: "/bank.svg",
    iconAlt: "Bank",
    titleBlue: "Exclusive",
    titleBlack: " investment opportunities",
    description:
      "Our clients have unique access to exclusive investment opportunities that are not available to the public. We leverage our extensive network and industry expertise to bring you private equity, venture capital, and other alternative investments that can significantly enhance your portfolio.",
  },
  {
    icon: "/face-smile.svg",
    iconAlt: "Face smile",
    titleBlue: "client service",
    titleBlack: "Superior ",
    isReversed: true,
    description:
      "We pride ourselves on offering a level of client service that surpasses that of traditional banks. Our team is dedicated to providing prompt, transparent, and effective communication, ensuring that you are always informed and confident in your financial decisions.",
  },
];

export function MainContentSection () {
  return (
    <section className="flex flex-col items-center gap-16 py-20 w-full bg-white">
      <div className="flex flex-wrap justify-center gap-[40px_64px] max-w-screen-xl px-8 w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="w-[576px] border-none shadow-none bg-transparent"
          >
            <CardContent className="flex items-start gap-4 p-0">
              <div className="w-12 h-12 bg-[#f5f8ff] rounded-[171.43px] shadow-[0px_1px_2px_#1018280d] flex items-center justify-center flex-shrink-0">
                <img
                  className="w-6 h-6"
                  alt={feature.iconAlt}
                  src={feature.icon}
                />
              </div>

              <div className="flex flex-col items-start gap-2 pt-1">
                <h3 className="self-stretch [font-family:'DM_Serif_Text',Helvetica] font-normal text-2xl leading-normal">
                  {feature.isReversed ? (
                    <>
                      <span className="text-[#101828]">
                        {feature.titleBlack}
                      </span>
                      <span className="text-[#00359e]">
                        {feature.titleBlue}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-[#00359e]">
                        {feature.titleBlue}
                      </span>
                      <span className="text-[#101828]">
                        {feature.titleBlack}
                      </span>
                    </>
                  )}
                </h3>

                <p className="text-[#475467] text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
