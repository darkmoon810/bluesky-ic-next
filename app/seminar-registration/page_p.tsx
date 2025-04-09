"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export default function SeminarRegistration() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    session: "morning",
    dietaryRestrictions: "",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, session: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Registration submitted:", formData)

    // Show success toast
    toast({
      title: "Registration Successful",
      description: "Thank you for registering for our seminar. We look forward to seeing you!",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      session: "morning",
      dietaryRestrictions: "",
      agreeToTerms: false,
    })
  }

  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold">Seminar Registration</h1>
            <p className="text-lg text-gray-600">
              Join our upcoming financial planning seminar to learn strategies for building and preserving wealth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Event Details</h2>
              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Financial Freedom: Building Wealth That Lasts</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="mr-3 h-5 w-5 text-gray-700" />
                    <div>
                      <h4 className="font-medium">Date</h4>
                      <p className="text-gray-600">June 15, 2023</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-3 h-5 w-5 text-gray-700" />
                    <div>
                      <h4 className="font-medium">Time</h4>
                      <p className="text-gray-600">Morning Session: 9:00 AM - 12:00 PM</p>
                      <p className="text-gray-600">Afternoon Session: 2:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-gray-700" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">Financial Services Conference Center</p>
                      <p className="text-gray-600">123 Financial Street, New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="mr-3 h-5 w-5 text-gray-700" />
                    <div>
                      <h4 className="font-medium">Capacity</h4>
                      <p className="text-gray-600">Limited to 50 attendees per session</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="mb-4 mt-8 text-xl font-semibold">What You'll Learn</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-gray-700" />
                  <p className="text-gray-600">Effective retirement planning strategies</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-gray-700" />
                  <p className="text-gray-600">Investment approaches for different life stages</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-gray-700" />
                  <p className="text-gray-600">Tax-efficient wealth building techniques</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-gray-700" />
                  <p className="text-gray-600">Estate planning fundamentals</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-5 w-5 text-gray-700" />
                  <p className="text-gray-600">Risk management strategies</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold">Register Now</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-medium">Select Session</h3>
                  <RadioGroup value={formData.session} onValueChange={handleRadioChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="morning" id="morning" />
                      <Label htmlFor="morning">Morning Session (9:00 AM - 12:00 PM)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="afternoon" id="afternoon" />
                      <Label htmlFor="afternoon">Afternoon Session (2:00 PM - 5:00 PM)</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <label htmlFor="dietaryRestrictions" className="mb-1 block text-sm font-medium">
                    Dietary Restrictions (if any)
                  </label>
                  <Textarea
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="Please let us know if you have any dietary restrictions"
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: checked === true }))}
                    required
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="agreeToTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                    <p className="text-sm text-gray-500">
                      By registering, you agree to receive communications about the seminar and related financial
                      topics.
                    </p>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Register for Seminar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
