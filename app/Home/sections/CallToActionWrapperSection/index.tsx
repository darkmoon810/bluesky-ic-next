import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CallToActionWrapperSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-screen-xl px-8">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="flex flex-wrap items-start justify-between gap-8">
              <div className="flex flex-col gap-3 flex-1">
                <h2 className="font-normal text-[40px] tracking-[-0.80px] font-['DM_Serif_Text',Helvetica]">
                  <span className="text-[#101828] tracking-[-0.32px]">
                    Join our exclusive{" "}
                  </span>
                  <span className="text-[#00359e] tracking-[-0.32px]">
                    wealth management seminar
                  </span>
                </h2>
                <p className="text-[#475467] text-xl font-text-xl-regular">
                  Learn how to optimize your portfolio, manage risks, and make
                  informed financial decisions with guidance from our seasoned
                  professionals.
                </p>
              </div>
              <Link href="/seminar-registration" className="flex items-center">
                <Button className="bg-[#00359e] text-white font-text-md-semibold rounded-lg px-[18px] py-3 shadow-shadows-shadow-xs">
                  Register Now
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
