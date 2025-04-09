import type { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

type ContactInfo = {
  icon: string
  text: string
  alt: string
}

type SocialIcon = {
  src: string
  alt: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: "/building-05.svg",
    text: "161 Bay St Toronto, Ontario, M5J 2S1 Canada",
    alt: "Office Location"
  },
  { 
    icon: "/phone.svg", 
    text: "416-930-5550",
    alt: "Phone"
  },
  { 
    icon: "/mail-01.svg", 
    text: "contact@blueskyic.com",
    alt: "Email"
  },
]

const socialIcons: SocialIcon[] = [
  { src: "/social-icon.svg", alt: "Social icon" },
  { src: "/social-icon-2.svg", alt: "Social icon" },
  { src: "/social-icon-1.svg", alt: "Social icon" },
]

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center gap-16 pt-16 pb-12 px-4 md:px-0 relative self-stretch w-full bg-[#0c111d]">
      <div className="flex flex-col items-start gap-12 max-w-screen-xl px-4 md:px-8 py-0 relative w-full">
        <div className="flex flex-col md:flex-row items-start gap-8 self-stretch w-full">
          {/* Company Info */}
          <div className="flex flex-col items-start gap-8 relative flex-1 grow">
            <div className="flex flex-col w-full md:w-[640px] items-start gap-8 relative">
              {/* Logo */}
              <div className="relative w-[156.97px] h-10">
                <Image
                  src="/frame-2.svg"
                  alt="BlueSky Logo"
                  width={39}
                  height={40}
                  className="absolute top-0 left-0"
                />
                <div className="absolute w-[100px] h-9 top-[3px] left-[49px]">
                  <div className="absolute top-0 left-0 font-serif font-normal text-white text-[28px] text-center tracking-[0] leading-7 whitespace-nowrap">
                    BlueSky
                  </div>
                  <div className="absolute top-[25px] left-0 font-medium text-white text-[9px] text-center tracking-[-0.18px] leading-[normal]">
                    Investment Counsel
                  </div>
                </div>
              </div>
              <p className="self-stretch text-white text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] font-text-md-regular tracking-[var(--text-md-regular-letter-spacing)]">
                BlueSky Investment Counsel Inc. is an independent,
                discretionary portfolio management firm based in Toronto,
                Ontario.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col w-full md:w-[300px] items-start gap-4 relative">
            <h3 className="relative self-stretch mt-[-1.00px] font-bold text-white text-base tracking-[0] leading-6">
              Contact Us
            </h3>

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 relative self-stretch w-full"
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={24}
                  height={24}
                  className="relative"
                />
                <p className="relative flex-1 mt-[-1.00px] font-text-md-regular text-white text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-4 md:px-8 py-0 relative w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[24px_32px] pt-8 pb-0 px-0 self-stretch w-full border-t border-[#5d6780]">
          <p className="relative w-fit mt-[-1.00px] font-text-md-regular text-white text-center md:text-left text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-normal md:whitespace-nowrap">
            © {new Date().getFullYear()} BlueSky Investment Counsel, Inc. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-4 md:gap-6">
              <Link href="/terms" passHref>
                <Button variant="link" className="text-white p-0 h-auto">
                  Terms of Use
                </Button>
              </Link>
              <Link href="/privacy" passHref>
                <Button variant="link" className="text-white p-0 h-auto">
                  Privacy Policy
                </Button>
              </Link>
            </div>
            <Separator className="hidden md:block h-6 bg-white" orientation="vertical" />
            <div className="flex items-center gap-6">
              {socialIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="relative"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Add a default export
export default Footer
