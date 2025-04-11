import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesWrapperSection() {
  return (
    <section className="flex flex-col w-full bg-white">
      <div className="bg-gray-50 pt-20 pb-40 w-full">
        <div className="max-w-screen-xl mx-auto px-8 flex flex-col md:flex-row gap-24">
          <div className="flex flex-col gap-3 flex-1">
            <h2 className="font-['DM_Serif_Text',Helvetica] text-5xl tracking-[-0.96px]">
              <span className="text-[#101828] tracking-[-0.46px]">Why </span>
              <span className="text-[#00359e] tracking-[-0.46px]">
                choose Us?
              </span>
            </h2>
            <p className="text-[#475467] text-xl leading-[30px] font-normal">
              BlueSky Investment Counsel Tailored Financial Strategies for Each Client
            </p>
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-[#475467] text-md leading-6">
              Banks and other financial institutions may offer generic solutions
              that may not fully align with your unique financial situation. At
              BlueSky Investment Counsel, we take the time to understand your
              individual needs, goals, and risk tolerance.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-24 -mt-24 w-full">
        <div className="max-w-screen-xl mx-auto px-8">
          <Card className="w-full h-[420px] rounded-2xl overflow-hidden border-0 shadow-none">
            <CardContent className="p-0 h-full relative">
              <Image
                src="/image-2.png"
                alt="Scenic landscape with mountains and lake"
                fill
                className="object-cover"
                priority
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
