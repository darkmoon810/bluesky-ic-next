import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, TrendingUp, BarChart, LineChart, PieChart, DollarSign, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WealthManagement() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span>/</span>
            <span>Wealth Management</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Strategic Wealth Management</h1>
            <p className="mb-8 text-xl text-gray-300">
              Grow, protect, and transfer your wealth effectively with our personalized wealth management services.
            </p>
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">What is Wealth Management?</h2>
              <p className="mb-4 text-gray-600">
                Wealth management is a comprehensive approach to managing your financial assets and investments. It
                combines financial planning, investment management, tax strategies, and estate planning to help you grow
                and preserve your wealth over time.
              </p>
              <p className="mb-4 text-gray-600">
                Our wealth management services are designed for individuals and families with significant assets who
                require sophisticated strategies to address their complex financial needs. We take a holistic approach
                to understand your unique circumstances, goals, and risk tolerance to develop a personalized wealth
                management strategy.
              </p>
              <p className="text-gray-600">
                Whether you're looking to grow your wealth, protect your assets, or create a legacy for future
                generations, our experienced wealth managers can help you navigate the complexities of wealth management
                and make informed decisions.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Wealth Management"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Wealth Management Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Investment Management</CardTitle>
                <CardDescription>Optimize your investment portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Develop and implement investment strategies aligned with your financial goals and risk tolerance. We
                  create diversified portfolios designed to maximize returns while managing risk appropriately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Portfolio Analysis & Optimization</CardTitle>
                <CardDescription>Enhance portfolio performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Regular review and adjustment of your investment portfolio to ensure it remains aligned with your
                  goals. We analyze performance, risk, and asset allocation to optimize your portfolio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <DollarSign className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Tax-Efficient Investing</CardTitle>
                <CardDescription>Minimize tax impact on investments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implement tax-efficient investment strategies to minimize the impact of taxes on your investment
                  returns. We consider tax implications in all investment decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <LineChart className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Retirement Income Planning</CardTitle>
                <CardDescription>Secure your retirement lifestyle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Develop strategies to generate sustainable income during retirement. We help you create a plan that
                  ensures your assets last throughout your retirement years.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <PieChart className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Asset Allocation</CardTitle>
                <CardDescription>Optimize your investment mix</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Determine the optimal mix of asset classes based on your financial goals, time horizon, and risk
                  tolerance. We create a strategic asset allocation designed to achieve your objectives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Legacy Planning</CardTitle>
                <CardDescription>Preserve your wealth for generations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Develop strategies to efficiently transfer wealth to future generations or charitable organizations.
                  We help you create a lasting legacy that reflects your values and wishes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Wealth Management Approach</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-semibold">Personalized Strategy</h3>
              <p className="text-gray-600">
                We recognize that each client has unique financial circumstances, goals, and risk tolerance. Our wealth
                management approach begins with a thorough understanding of your specific situation and objectives. We
                then develop a personalized strategy tailored to your needs.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-semibold">Comprehensive Planning</h3>
              <p className="text-gray-600">
                Our wealth management services address all aspects of your financial life, including investment
                management, retirement planning, tax strategies, estate planning, and risk management. This holistic
                approach ensures that all elements of your financial plan work together cohesively.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-semibold">Disciplined Investment Process</h3>
              <p className="text-gray-600">
                We follow a disciplined investment process based on sound financial principles and academic research.
                Our approach emphasizes diversification, asset allocation, and long-term investing while avoiding market
                timing and emotional decision-making.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="mb-4 text-xl font-semibold">Ongoing Monitoring & Adjustment</h3>
              <p className="text-gray-600">
                We continuously monitor your portfolio and financial plan, making adjustments as needed to reflect
                changes in your circumstances, goals, or market conditions. Regular reviews ensure your wealth
                management strategy remains aligned with your objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Profile Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Who We Serve</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">High-Net-Worth Individuals</h3>
              <p className="text-gray-600">
                We work with successful professionals, executives, and entrepreneurs who have accumulated significant
                wealth and require sophisticated strategies to manage and grow their assets.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Business Owners</h3>
              <p className="text-gray-600">
                We help business owners manage their personal wealth alongside their business interests, developing
                strategies for business succession, exit planning, and wealth transfer.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Retirees & Pre-Retirees</h3>
              <p className="text-gray-600">
                We assist individuals approaching or in retirement who need to convert their accumulated assets into
                sustainable income while preserving their wealth for future needs and legacy goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 shadow-sm">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-gray-600">
                "The wealth management team has transformed how I think about my investments. Their strategic approach
                has helped me grow my portfolio while managing risk effectively."
              </p>
              <div>
                <p className="font-semibold">Robert Wilson</p>
                <p className="text-sm text-gray-500">Client Since 2015</p>
              </div>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-gray-600">
                "As a business owner, I needed a wealth management strategy that considered both my personal and
                business finances. This team delivered exactly what I needed with exceptional service."
              </p>
              <div>
                <p className="font-semibold">Jennifer Chen</p>
                <p className="text-sm text-gray-500">Business Owner</p>
              </div>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-gray-600">
                "The tax-efficient investing strategies they implemented have made a significant difference in my
                portfolio's after-tax returns. Their attention to detail is impressive."
              </p>
              <div>
                <p className="font-semibold">David Thompson</p>
                <p className="text-sm text-gray-500">Retired Executive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">
                What is the minimum asset requirement for wealth management services?
              </h3>
              <p className="mt-2 text-gray-600">
                Our wealth management services are typically designed for clients with investable assets of $500,000 or
                more. However, we evaluate each situation individually and may make exceptions based on your specific
                circumstances.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">How are wealth management fees structured?</h3>
              <p className="mt-2 text-gray-600">
                Our wealth management fees are typically based on a percentage of assets under management. This fee
                structure aligns our interests with yours, as we both benefit when your portfolio grows. We provide
                complete transparency regarding all fees and costs.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">How often will we review my wealth management strategy?</h3>
              <p className="mt-2 text-gray-600">
                We conduct formal portfolio reviews quarterly and comprehensive financial plan reviews annually.
                However, we continuously monitor your investments and will contact you if adjustments are needed between
                scheduled reviews. You can also request a review at any time.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Can you coordinate with my other advisors?</h3>
              <p className="mt-2 text-gray-600">
                Yes, we regularly collaborate with clients' attorneys, accountants, and other advisors to ensure a
                coordinated approach to wealth management. This collaboration helps ensure that all aspects of your
                financial life are working together effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Optimize Your Wealth Strategy?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Our team of wealth management experts is ready to help you develop a personalized strategy to grow, protect,
            and transfer your wealth effectively.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/services">Explore Other Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Related Services</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-3 text-xl font-semibold">Financial Planning</h3>
              <p className="mb-4 text-gray-600">
                Comprehensive financial planning to help you create a roadmap to achieve your short and long-term
                financial goals. Our personalized approach addresses all aspects of your financial life.
              </p>
              <Link
                href="/services/financial-planning"
                className="inline-flex items-center text-gray-700 hover:text-gray-900"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-3 text-xl font-semibold">Retirement Planning</h3>
              <p className="mb-4 text-gray-600">
                Develop a comprehensive retirement plan to ensure financial security in your golden years. We help you
                determine how much you need to save and the best strategies to achieve your retirement goals.
              </p>
              <Link
                href="/services#retirement-planning"
                className="inline-flex items-center text-gray-700 hover:text-gray-900"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="border-t py-8">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-gray-700 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Services
          </Link>
        </div>
      </section>
    </div>
  )
}
