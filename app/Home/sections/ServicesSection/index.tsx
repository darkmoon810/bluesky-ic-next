import { Coins, LineChart, UserCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: <UserCheck className="h-8 w-8" />,
    titleBlue: "Your needs",
    titleDark: " first",
    description:
      "We take the time to get to know our clients and develop a personal relationship built on trust, expertise and a thorough understanding of goals and objectives.",
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    titleBlue: "Performance",
    titleDark: " matters",
    description:
      "We run well-constructed, disciplined, strategic portfolios that generate strong risk adjusted performance for our clients.",
  },
  {
    icon: <Coins className="h-8 w-8" />,
    titleDark: "Investing",
    titleBlue: "Responsible ",
    description:
      "We invest in ethically and socially responsible companies, balancing performance, risk management, and positive impact on the environment and community.",
  },
] as const

export default function ServicesSection() {
  return (
    <section className="flex flex-col items-center gap-16 px-0 py-20 relative self-stretch w-full flex-[0_0_auto] bg-gray-50">
      <div className="flex-col items-start gap-16 flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-wrap items-start gap-[64px_32px] self-stretch w-full flex-[0_0_auto] relative">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col min-w-80 items-center gap-4 relative flex-1 grow"
            >
              <div className="relative w-16 h-16 bg-white rounded-[228.57px] shadow-[0px_1.33px_2.67px_#1018280d] flex items-center justify-center">
                {service.icon}
              </div>
              <Card className="border-none shadow-none bg-transparent w-full">
                <CardContent className="flex flex-col items-center gap-2 p-0">
                  <h3 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[28px] text-center tracking-[0] leading-[normal]">
                    <span className="text-[#00359e]">{service.titleBlue}</span>
                    <span className="text-[#101828]">{service.titleDark}</span>
                  </h3>
                  <p className="relative self-stretch font-text-md-regular text-[#475467] text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
