import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function About() {
  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold">About Us</h1>
            <p className="text-lg text-gray-600">
              We are a dedicated team of financial professionals committed to helping our clients achieve financial
              security and success.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2005, Financial Services has grown from a small advisory firm to a comprehensive financial
                services company serving clients across the country.
              </p>
              <p className="mb-4 text-gray-600">
                Our mission is to provide personalized financial guidance that empowers our clients to make informed
                decisions about their financial future. We believe in building long-term relationships based on trust,
                transparency, and results.
              </p>
              <p className="text-gray-600">
                With over 15 years of experience in the industry, we have helped hundreds of clients navigate complex
                financial situations and achieve their goals.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our team meeting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Integrity</h3>
              <p className="text-gray-600">
                We adhere to the highest ethical standards and always put our clients' interests first.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the advice we provide to the service we deliver.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek innovative solutions to help our clients navigate the ever-changing financial
                landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Us</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start">
              <CheckCircle className="mr-3 h-6 w-6 text-gray-700" />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Personalized Approach</h3>
                <p className="text-gray-600">
                  We take the time to understand your unique financial situation and goals before providing
                  recommendations.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="mr-3 h-6 w-6 text-gray-700" />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Experienced Team</h3>
                <p className="text-gray-600">
                  Our team of certified financial planners has decades of combined experience in the industry.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="mr-3 h-6 w-6 text-gray-700" />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Comprehensive Services</h3>
                <p className="text-gray-600">
                  We offer a wide range of financial services to address all aspects of your financial life.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="mr-3 h-6 w-6 text-gray-700" />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Client Education</h3>
                <p className="text-gray-600">
                  We believe in empowering our clients through education, helping them understand their financial
                  options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
