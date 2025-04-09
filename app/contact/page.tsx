"use client"
import { ContactForm } from "./ContactForm"

export default function Contact() {
  return (
    
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl [font-family:'DM_Serif_Text',Helvetica]">
                Get <span className="text-[#00359e] [font-family:'DM_Serif_Text',Helvetica]">in touch</span>
              </h1>
              <p className="text-lg text-[#475467]">Our friendly team would love to hear from you.</p>
              <ContactForm />
            </div>
            <div className="relative w-full h-auto overflow-hidden rounded-lg md:block">
              <img
                src="/image-10.png"
                alt="Person meditating on rocks at sunset"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>
  )
};

