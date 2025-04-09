import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, PiggyBank, Shield, Clock, BarChartIcon as ChartBar, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FinancialPlanning() {
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
            <span>Financial Planning</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">Comprehensive Financial Planning</h1>
            <p className="mb-8 text-xl text-gray-300">
              Create a roadmap to achieve your financial goals with our personalized financial planning services.
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
              <h2 className="mb-6 text-3xl font-bold">What is Financial Planning?</h2>
              <p className="mb-4 text-gray-600">
                Financial planning is a comprehensive process that helps you understand your current financial situation
                and develop strategies to achieve your short and long-term financial goals. It involves analyzing your
                income, expenses, assets, and liabilities to create a roadmap for your financial future.
              </p>
              <p className="mb-4 text-gray-600">
                Our financial planning services are designed to provide you with clarity and confidence in your
                financial decisions. We work closely with you to understand your unique circumstances, goals, and risk
                tolerance to develop a personalized financial plan.
              </p>
              <p className="text-gray-600">
                Whether you're planning for retirement, saving for a major purchase, or looking to optimize your current
                financial situation, our experienced financial planners can help you navigate the complexities of
                financial planning and make informed decisions.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Financial Planning"
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
          <h2 className="mb-12 text-center text-3xl font-bold">Our Financial Planning Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <PiggyBank className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Budgeting & Cash Flow Management</CardTitle>
                <CardDescription>Optimize your income and expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Develop effective budgeting strategies to manage your cash flow, reduce debt, and increase savings.
                  We'll help you create a realistic budget that aligns with your financial goals and lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Risk Management & Insurance</CardTitle>
                <CardDescription>Protect your assets and income</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Identify potential risks to your financial security and implement strategies to mitigate them. We'll
                  review your insurance coverage to ensure you have adequate protection for your assets and income.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Retirement Planning</CardTitle>
                <CardDescription>Secure your financial future</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Develop a comprehensive retirement plan that ensures financial security in your golden years. We'll
                  help you determine how much you need to save and the best strategies to achieve your retirement goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ChartBar className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Investment Planning</CardTitle>
                <CardDescription>Grow your wealth strategically</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Create an investment strategy aligned with your financial goals and risk tolerance. We'll help you
                  build a diversified portfolio that maximizes returns while managing risk appropriately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Estate Planning</CardTitle>
                <CardDescription>Preserve and transfer your wealth</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Develop strategies to efficiently transfer your wealth to future generations or charitable
                  organizations. We'll help you minimize estate taxes and ensure your assets are distributed according
                  to your wishes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <PiggyBank className="h-10 w-10 mb-2 text-gray-700" />
                <CardTitle>Education Funding</CardTitle>
                <CardDescription>Plan for educational expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Develop strategies to save for education expenses for children or grandchildren. We'll help you
                  navigate the various education savings options and choose the best approach for your situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Financial Planning Process</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold">
                1
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Initial Consultation</h3>
                <p className="mt-2 text-gray-600">
                  We begin with a comprehensive discussion about your current financial situation, goals, and concerns.
                </p>
              </div>
              <div className="absolute right-0 top-6 hidden h-0.5 w-full bg-gray-200 lg:block lg:w-1/2"></div>
            </div>

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold">
                2
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Data Analysis</h3>
                <p className="mt-2 text-gray-600">
                  We analyze your financial information to gain a clear understanding of your current position and
                  opportunities.
                </p>
              </div>
              <div className="absolute left-0 right-0 top-6 hidden h-0.5 w-full bg-gray-200 lg:block"></div>
            </div>

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold">
                3
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Plan Development</h3>
                <p className="mt-2 text-gray-600">
                  We create a personalized financial plan with specific recommendations to help you achieve your goals.
                </p>
              </div>
              <div className="absolute left-0 right-0 top-6 hidden h-0.5 w-full bg-gray-200 lg:block"></div>
            </div>

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-xl font-bold">
                4
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Implementation & Review</h3>
                <p className="mt-2 text-gray-600">
                  We help you implement the plan and conduct regular reviews to ensure you stay on track toward your
                  goals.
                </p>
              </div>
              <div className="absolute left-0 top-6 hidden h-0.5 w-1/2 bg-gray-200 lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
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
                "The financial planning services provided by this team have been transformative for my family's
                financial future. They took the time to understand our goals and created a plan that works for us."
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Retirement Planning Client</p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
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
                "I was overwhelmed by my financial situation until I started working with this team. They simplified the
                process and helped me create a clear path toward my financial goals."
              </p>
              <div>
                <p className="font-semibold">Michael Rodriguez</p>
                <p className="text-sm text-gray-500">Budgeting & Cash Flow Client</p>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
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
                "The estate planning guidance I received was exceptional. They helped me navigate complex issues and
                create a plan that gives me peace of mind about my family's future."
              </p>
              <div>
                <p className="font-semibold">Emily Thompson</p>
                <p className="text-sm text-gray-500">Estate Planning Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold">When should I start financial planning?</h3>
              <p className="mt-2 text-gray-600">
                The best time to start financial planning is now, regardless of your age or income level. The earlier
                you begin, the more time you have to work toward your goals and benefit from compound growth.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold">How often should I review my financial plan?</h3>
              <p className="mt-2 text-gray-600">
                We recommend reviewing your financial plan at least annually or whenever you experience significant life
                changes such as marriage, birth of a child, career change, or inheritance.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold">What information do I need to provide for financial planning?</h3>
              <p className="mt-2 text-gray-600">
                You'll need to provide information about your income, expenses, assets, liabilities, insurance policies,
                investment accounts, retirement accounts, and estate planning documents. We'll provide a detailed
                checklist during your initial consultation.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold">How is financial planning different from investment management?</h3>
              <p className="mt-2 text-gray-600">
                Financial planning is a comprehensive approach that addresses all aspects of your financial life,
                including budgeting, insurance, retirement, estate planning, and investments. Investment management
                focuses specifically on managing your investment portfolio to achieve your financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Take Control of Your Financial Future?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Our team of financial planning experts is ready to help you create a personalized roadmap to achieve your
            financial goals.
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
              <h3 className="mb-3 text-xl font-semibold">Wealth Management</h3>
              <p className="mb-4 text-gray-600">
                Strategic wealth management services to grow and protect your assets over time. Our personalized
                approach helps you build and preserve wealth for generations.
              </p>
              <Link
                href="/services/wealth-management"
                className="inline-flex items-center text-gray-700 hover:text-gray-900"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-3 text-xl font-semibold">Investment Strategies</h3>
              <p className="mb-4 text-gray-600">
                Customized investment strategies aligned with your risk tolerance and financial objectives. We help you
                navigate market complexities to achieve your investment goals.
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
