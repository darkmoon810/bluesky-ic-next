import { Card, CardContent } from "@/components/ui/card"

export function ArticleSkeleton() {
  return (
    <Card className="flex flex-col w-full items-start gap-5 border-none shadow-none animate-pulse">
      {/* Image skeleton */}
      <div className="relative w-full aspect-[4/3] rounded-2xl bg-gray-200" />

      <CardContent className="flex flex-col items-start gap-6 p-0 w-full">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
          {/* Title skeleton */}
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          
          {/* Content skeleton */}
          <div className="space-y-2 w-full">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>
        </div>

        {/* Button skeleton */}
        <div className="h-6 bg-gray-200 rounded w-24" />
      </CardContent>
    </Card>
  )
}

export function ArticleSkeletonList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {[1, 2, 3].map((index) => (
        <ArticleSkeleton key={index} />
      ))}
    </div>
  )
}

export function ArticleSkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <ArticleSkeleton key={index} />
      ))}
    </div>
  )
}