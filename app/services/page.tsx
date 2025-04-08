import Image from "next/image"
import Link from "next/link"
import { BarChart, PiggyBank, TrendingUp, Shield, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold">Our Services</h1>
            <p className="text-lg text-gray-600">
              We offer comprehensive financial services tailored to your unique needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Planning Section */}
      <section id="financial-planning" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Financial Planning"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold">Financial Planning</h2>
              <p className="mb-4 text-gray-600">
                Our comprehensive financial planning services help you create a roadmap to achieve your short and
                long-term financial goals. We take a holistic approach to understand your current financial situation,
                identify your objectives, and develop strategies to help you reach them.
              </p>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <PiggyBank className="mr-3 h-6 w-6 text-gray-700" />
                  <div>
                    <h3 className="text-lg font-semibold">Budgeting and Cash Flow Management</h3>
                    <p className="text-gray-600">
                      Develop effective budgeting strategies to optimize your cash flow and savings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="mr-3 h-6 w-6 text-gray-700" />
                  <div>
                    <h3 className="text-lg font-semibold">Risk Management and Insurance Planning</h3>
                    <p className="text-gray-600">
                      Identify potential risks and implement strategies to protect your assets and income.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 h-6 w-6 text-gray-700" />
                  <div>
                    <h3 className="text-lg font-semibold">Retirement Planning</h3>
                    <p className="text-gray-600">
                      Create a comprehensive retirement plan to ensure financial security in your golden years.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wealth Management Section */}
      <section id="wealth-management" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 text-3xl font-bold">Wealth Management</h2>
              <p className="mb-4 text-gray-600">
                Our wealth management services are designed to help you grow, protect, and transfer your wealth
                effectively. We provide personalized investment strategies and ongoing portfolio management to help you
                achieve your financial objectives.
              </p>
              <div className="mb-6 space-y-4">
                <div className="flex items-start">
                  <TrendingUp className="mr-3 h-6 w-6 text-gray-700" />
                  <div>
                    <h3 className="text-lg font-semibold">Investment Management</h3>
                    <p className="text-gray-600">
                      Develop and implement investment strategies aligned with your goals and risk tolerance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart className="mr-3 h-6 w-6 text-gray-700" />
                  <div>
                    <h3 className="text-lg font-semibold">Portfolio Analysis and Optimization</h3>
                    <p className="text-gray-600">
                      Regular review and adjustment of your investment portfolio to maximize returns and minimize risk.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="mr-3 h-6 w-6 text-gray-700" />
                  <div>
                    <h3 className="text-lg font-semibold">Estate Planning</h3>
                    <p className="text-gray-600">
                      Develop strategies to efficiently transfer wealth to future generations or charitable
                      organizations.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="relative order-1 h-[400px] overflow-hidden rounded-lg md:order-2">
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Take Control of Your Financial Future?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Our team of financial experts is ready to help you achieve your financial goals. Contact us today to
            schedule a consultation.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/seminar-registration">Register for Seminar</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
