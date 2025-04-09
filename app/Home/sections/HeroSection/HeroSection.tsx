"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const backgroundImages = [
  { src: "/image-1.png", alt: "City skyline" },
  { src: "/image-2.png", alt: "Office building" },
  { src: "/image-3.png", alt: "Financial district" },
] as const

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const slideInterval = 5000

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      )
    }, slideInterval)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col items-center gap-16 pt-8 pb-20 px-0 relative self-stretch w-full flex-[0_0_auto] z-0">
        <div className="flex-col items-center flex max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex-col items-center gap-12 pt-24 pb-48 px-4 md:px-8 self-stretch w-full flex-[0_0_auto] bg-[#52379e] rounded-2xl overflow-hidden flex relative">
            {/* Background Images Slider */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full top-0 left-0 object-cover"
                alt={backgroundImages[currentImageIndex].alt}
                src={backgroundImages[currentImageIndex].src}
              />
            </AnimatePresence>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 z-[1]" />

            {/* Content Container */}
            <div className="flex flex-col items-center gap-8 relative z-[2]">
              {/* Hero Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[1000px] items-center gap-6 flex-[0_0_auto] flex flex-col"
              >
                <h1 className="relative self-stretch mt-[-1.00px] [font-family:'DM_Serif_Text',Helvetica] font-normal text-white text-4xl md:text-[80px] text-center tracking-[-1.60px] leading-[1.1] md:leading-[90px]">
                  Your financial future deserves more than a bank
                </h1>
                <p className="text-white text-lg md:text-xl text-center leading-[1.6] md:leading-[30px] relative max-w-[800px]">
                  We believes that high-net-worth individuals and entrepreneurs
                  deserve a level of service and expertise that goes beyond what
                  traditional banks can offer.
                </p>
              </motion.div>

              {/* Learn More Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Link href="/wealth-management">
                  <Button
                    variant="outline"
                    className="px-8 py-3 bg-white hover:bg-gray-50 rounded-lg border border-solid border-[#d0d5dd] shadow-lg text-base font-semibold"
                  >
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Dynamic Pagination Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center justify-center gap-3 p-2 absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#ffffffb2] rounded-full backdrop-blur-sm z-[2]"
            >
              {backgroundImages.map((_, index) => (
                <motion.div
                  key={index}
                  className={`relative w-2 h-2 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-[#00359e]' : 'bg-[#eaecf0]'
                    }`}
                  onClick={() => setCurrentImageIndex(index)}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
