"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import { homeStatics } from "@/lib/Statics/home.static"
import { theme } from "@/lib/Statics/theme.static"

const blogPosts = [
  {
    id: 1,
    image: "/image-3-1.png",
    title:
      "Why a Balanced Portfolio Strategy in the current economic environment is no longer appropriate?",
    content:
      "In the past a balanced portfolio typically meant to have roughly half of your holdings to be equity (stocks) and the other half to be fixed income (bonds). Some people use a 60/40 weighting, respectively.",
    link: "https://blueskyic.com/why-a-balanced-portfolio-strategy-in-the-current-economic-environment-is-no-longer-appropriate/",
    isExternal: true,
  },
  {
    id: 2,
    image: "/image-4-1.png",
    title:
      "Efficient investing for employees of the big four accounting firms",
    content:
      "Managing the accounting firm independence constraints: All the large accounting firms have stringent procedures when it comes to investing. This is mostly due tovarious scandals that happened in the past where audit clients' information",
    link: "https://blueskyic.com/efficient-investing-for-employees-of-the-big-four-accounting-firms/",
    isExternal: false,
  },
  {
    id: 3,
    image: "/image-8.png",
    title:
      "Learn how your multiple structures of savings accounts really work",
    content:
      "The government has created multiple structures to help Canadians save efficiently and have a retirement that relies less on full government programs such as the CPP",
    link: "https://blueskyic.com/how-your-savings-accounts-really-work/",
    isExternal: false,
  },
] as const

export function ArticlesSection() {
  const handleReadMore = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  const { articles } = homeStatics

  return (
    <section className="flex flex-col items-center gap-16 py-20 w-full bg-white">
      {/* Header Section */}
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 w-full">
        <div className="flex flex-wrap items-start justify-between gap-[32px_32px] w-full">
          <div className="flex flex-col items-start gap-3 flex-1">
            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="font-['DM_Serif_Text',Helvetica] text-5xl tracking-[-0.96px]">
                <span className={`text-[${theme.colors.secondary}]`}>{articles.title.main} </span>
                <span className={`text-[${theme.colors.primary}]`}>{articles.title.highlight}</span>
              </h2>
            </div>
            <p className={`self-stretch text-[${theme.colors.text}] text-xl leading-[30px]`}>
              {articles.subtitle}
            </p>
          </div>

          <Link href={articles.viewAllButton.link}>
            <Button className={`bg-[${theme.colors.primary}] text-white rounded-lg shadow-shadows-shadow-xs`}>
              {articles.viewAllButton.text}
            </Button>
          </Link>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col w-full items-start gap-5 border-none shadow-none"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  fill
                  src={post.image}
                  alt="Blog post image"
                  className="object-cover"
                />
              </div>

              <CardContent className="flex flex-col items-start gap-6 p-0">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                  {post.isExternal ? (
                    <a className={`self-stretch [font-family:'DM_Serif_Text',Helvetica] font-normal text-[${theme.colors.secondary}] text-xl sm:text-2xl`}
                      href={post.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {post.title}
                    </a>
                  ) : (
                    <h2 className={`self-stretch [font-family:'DM_Serif_Text',Helvetica] font-normal text-[${theme.colors.secondary}] text-xl sm:text-2xl`}>
                      {post.title}
                    </h2>
                  )}
                  <p className={`self-stretch text-sm sm:text-base text-[${theme.colors.text}] line-clamp-3`}>
                    {post.content}
                  </p>
                </div>

                <Button
                  variant="link"
                  onClick={() => handleReadMore(post.link)}
                  className={`p-0 h-auto flex items-center gap-2 text-[${theme.colors.primary}] font-semibold hover:text-[${theme.colors.hover}] transition-colors`}
                >
                  Read more
                  <ArrowUpRightIcon className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}