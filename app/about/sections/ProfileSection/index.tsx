import Image from 'next/image'
import { aboutStatics } from '@/lib/Statics/about.static'

const { profile } = aboutStatics

export default function ProfileSection() {
  return (
    <div className="flex flex-col items-center bg-background py-20 m-auto">
      <div className="flex flex-col lg:flex-row items-center max-w-screen-xl px-4 sm:px-8 gap-8 lg:gap-16">
        <div className="flex flex-col items-start gap-8 w-full lg:w-1/2">
          <div className="space-y-2">
            <h2 className="font-serif text-secondary text-4xl md:text-5xl tracking-tight">
              {profile.name}
            </h2>
            <h3 className="font-serif text-2xl md:text-[28px]">
              <span className="text-primary">{profile.title.main}</span>
              <span className="text-secondary">{profile.title.secondary}</span>
            </h3>
          </div>
          <div className="flex flex-col items-start gap-4">
            {profile.bio.map((content, index) => (
              <p key={index} className="text-text text-lg">
                {content}
              </p>
            ))}
          </div>
        </div>
        <div className="relative w-full lg:w-[576px] h-auto lg:h-[654px]">
          <Image
            src={profile.image.src}
            alt={profile.image.alt}
            width={576}
            height={576}
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}