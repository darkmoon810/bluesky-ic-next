import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Insights() {
  const articles = [
    {
      id: 1,
      title: "5 Retirement Planning Strategies You Should Consider",
      excerpt:
        "Discover effective retirement planning strategies that can help you secure your financial future and enjoy your golden years.",
      date: "April 15, 2023",
      author: "John Smith",
      category: "Retirement Planning",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 2,
      title: "Understanding Market Volatility: A Guide for Investors",
      excerpt:
        "Learn how to navigate market volatility and make informed investment decisions during uncertain economic times.",
      date: "March 22, 2023",
      author: "Sarah Johnson",
      category: "Investment Strategies",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 3,
      title: "Tax-Efficient Investment Strategies for High-Income Earners",
      excerpt:
        "Explore tax-efficient investment strategies that can help high-income earners minimize their tax burden and maximize returns.",
      date: "February 10, 2023",
      author: "Michael Brown",
      category: "Tax Planning",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 4,
      title: "The Importance of Estate Planning: Protecting Your Legacy",
      excerpt:
        "Understand why estate planning is crucial for protecting your assets and ensuring your wishes are carried out after you're gone.",
      date: "January 5, 2023",
      author: "Emily Davis",
      category: "Estate Planning",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 5,
      title: "Building a Diversified Investment Portfolio",
      excerpt:
        "Learn the principles of portfolio diversification and how to build a resilient investment portfolio that can weather market fluctuations.",
      date: "December 12, 2022",
      author: "Robert Wilson",
      category: "Investment Strategies",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      id: 6,
      title: "Financial Planning for Young Professionals",
      excerpt:
        "Discover financial planning tips and strategies specifically tailored for young professionals starting their careers.",
      date: "November 8, 2022",
      author: "Jennifer Lee",
      category: "Financial Planning",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold">Insights</h1>
            <p className="text-lg text-gray-600">
              Stay informed with our latest articles, guides, and market insights to help you make better financial
              decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div key={article.id} className="rounded-lg border shadow-sm transition-shadow hover:shadow-md">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-gray-500">{article.category}</div>
                  <h2 className="mb-3 text-xl font-bold">{article.title}</h2>
                  <p className="mb-4 text-gray-600">{article.excerpt}</p>
                  <div className="mb-4 flex items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="ml-4 flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/insights/${article.id}`}
                    className="inline-flex items-center text-gray-700 hover:text-gray-900"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Stay updated with our latest insights, market trends, and financial tips delivered directly to your inbox.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-md border border-gray-300 px-4 py-2 focus:border-gray-500 focus:outline-none"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
