import Link from "next/link"
import { ArrowRight, BarChart, PiggyBank, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Secure Your Financial Future
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Expert financial planning and wealth management services tailored to your goals and aspirations.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
              <PiggyBank className="mb-4 h-12 w-12 text-gray-700" />
              <h3 className="mb-3 text-xl font-semibold">Financial Planning</h3>
              <p className="mb-4 text-gray-600">
                Comprehensive financial planning to help you achieve your short and long-term goals.
              </p>
              <Link
                href="/services#financial-planning"
                className="inline-flex items-center text-gray-700 hover:text-gray-900"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
              <TrendingUp className="mb-4 h-12 w-12 text-gray-700" />
              <h3 className="mb-3 text-xl font-semibold">Wealth Management</h3>
              <p className="mb-4 text-gray-600">
                Strategic wealth management services to grow and protect your assets over time.
              </p>
              <Link
                href="/services#wealth-management"
                className="inline-flex items-center text-gray-700 hover:text-gray-900"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
              <BarChart className="mb-4 h-12 w-12 text-gray-700" />
              <h3 className="mb-3 text-xl font-semibold">Investment Strategies</h3>
              <p className="mb-4 text-gray-600">
                Customized investment strategies aligned with your risk tolerance and financial objectives.
              </p>
              <Link
                href="/services#investment-strategies"
                className="inline-flex items-center text-gray-700 hover:text-gray-900"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Take Control of Your Finances?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Join our upcoming financial planning seminar to learn strategies for building and preserving wealth.
          </p>
          <Button asChild size="lg">
            <Link href="/seminar-registration">Register for Seminar</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
