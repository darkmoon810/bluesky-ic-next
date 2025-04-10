import { theme } from '@/lib/Statics/theme.static'
import { aboutStatics } from '@/lib/Statics/about.static'

const { hero } = aboutStatics

export default function HeroSection() {
  return (
    <section className={`flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-${theme.colors.background}`}>
      <div className={`flex flex-col items-center gap-16 px-0 py-20 relative self-stretch w-full flex-[0_0_auto] bg-${theme.colors.background}`}>
        <div className="flex-col items-center gap-8 flex max-w-screen-xl px-4 sm:px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex-col items-center gap-12 self-stretch w-full flex-[0_0_auto] flex relative">
            <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className={`relative w-full lg:w-[900px] mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[${theme.colors.secondary}] text-4xl md:text-5xl lg:text-[64px] text-center tracking-[-1.28px] leading-tight lg:leading-[72px]`}>
                {hero.title}
              </h1>
              <p className={`w-full lg:w-[900px] text-[${theme.colors.text}] text-lg md:text-xl text-center`}>
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
