"use client"

import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { homeStatics } from "@/lib/Statics/home.static"
import { theme } from "@/lib/Statics/theme.static"
import type { BlogPost } from "@/types"
import { ArticleSkeletonList } from '@/app/components/ArticleSkeleton'
import { getArticles } from '@/app/api/insights/route'

const { articles } = homeStatics

export default function ArticlesSection() {
  const [insights, setInsights] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchInsights() {
    try {
      const response = await getArticles(new Request('/api/insights?limit=3'))
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setInsights(data)
    } catch (error) {
      console.error('Error fetching insights:', error)
      setError(error instanceof Error ? error.message : 'Failed to fetch insights')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInsights()
  }, [])

  const handleReadMore = (link: string): void => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="flex flex-col items-center gap-16 py-20 w-full bg-white">
      {/* Header Section */}
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 w-full">
        <div className="flex flex-wrap items-start justify-between gap-[32px_32px] w-full">
          <div className="flex flex-col items-start gap-3 flex-1">
            <div className="flex flex-col items-start gap-3 w-full">
              <h2 className="[font-family:'DM_Serif_Text',Helvetica] text-5xl tracking-[-0.96px]">
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
        {loading ? (
          <ArticleSkeletonList />
        ) : error ? (
          <div className="text-red-500 text-center w-full">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {insights.map((post: BlogPost) => (
              <Card
                key={post.id}
                className="flex flex-col w-full items-start gap-5 border-none shadow-none"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    fill
                    src={post.image_url}
                    alt={post.title}
                    className="object-cover"
                  />
                </div>

                <CardContent className="flex flex-col items-start gap-6 p-0">
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                    {post.is_external ? (
                      <a
                        className={`self-stretch [font-family:${theme.fonts.serif}] font-normal text-[${theme.colors.secondary}] text-xl sm:text-2xl`}
                        href={post.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {post.title}
                      </a>
                    ) : (
                      <h2 className={`self-stretch [font-family:${theme.fonts.serif}] font-normal text-[${theme.colors.secondary}] text-xl sm:text-2xl`}>
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
        )}
      </div>
    </section>
  )
}