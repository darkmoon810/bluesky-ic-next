import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
  return (
    <section className="flex flex-col items-center gap-16 py-20 w-full bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 w-full">
        <div className="flex flex-wrap items-start justify-between gap-[32px_32px] w-full">
          {/* ...existing header content... */}
          <Link href="/insights">
            <Button className="bg-[#00359e] text-white rounded-lg shadow-shadows-shadow-xs">
              View all
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-screen-xl px-8">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="flex flex-col w-full items-start gap-5 border-none shadow-none"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt="Blog post image"
                fill
                className="object-cover"
              />
            </div>

            {/* ...rest of card content... */}
          </Card>
        ))}
      </div>
    </section>
  )
}