import { theme } from '@/lib/Statics/theme.static'
import { aboutStatics } from '@/lib/Statics/about.static'

const { profile } = aboutStatics

export default function ProfileSection() {
  return (
    <div className={`flex-col items-center justify-center gap-16 px-0 py-20 self-stretch w-full flex-[0_0_auto] bg-${theme.colors.background} flex relative`}>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-screen-xl px-4 sm:px-8 py-0 relative w-full">
        <div className="flex-col items-start gap-8 w-full lg:w-1/2 flex relative">
          <div className="flex flex-col items-start relative self-stretch w-full">
            <h2 className={`relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-[${theme.colors.secondary}] text-4xl md:text-5xl tracking-[-0.96px] leading-[normal]`}>
              {profile.name}
            </h2>
            <h3 className="relative self-stretch [font-family:'DM_Serif_Text',Helvetica] font-normal text-transparent text-2xl md:text-[28px] tracking-[0] leading-[normal]">
              <span className={`text-[${theme.colors.primary}]`}>{profile.title.main}</span>
              <span className={`text-[${theme.colors.secondary}]`}>{profile.title.secondary}</span>
            </h3>
          </div>
          <div className="flex flex-col items-start gap-4 relative self-stretch">
            {/* Bio paragraphs */}
            {profile.bio.map((content, index) => (
              <p key={index} className={`relative self-stretch text-[${theme.colors.text}] text-lg`}>
                {content}
              </p>
            ))}
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