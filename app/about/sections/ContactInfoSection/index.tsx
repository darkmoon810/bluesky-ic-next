"use client"

import { useEffect, useState } from 'react'
import { BuildingIcon, MailIcon, PhoneIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { supabase } from '@/lib/db'
import { Database } from '@/lib/database.types'

type ContactInfo = Database['public']['Tables']['contact_info']['Row']

export default function ContactInfoSection() {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchContactInfo() {
      try {
        const { data, error } = await supabase
          .from('contact_info')
          .select('*')

        if (error) throw error
        setContactInfo(data)
      } catch (error) {
        console.error('Error fetching contact info:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchContactInfo()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!contactInfo.length) return <div>No contact information found</div>

  return (
    <div className="flex flex-col items-center gap-16 pt-0 pb-20 px-0 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex-col items-start gap-16 flex max-w-screen-xl px-4 sm:px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {contactInfo.map((info) => (
            <Card
              key={info.id}
              className="flex flex-col items-center gap-4 relative border-none shadow-none"
            >
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <div className="relative w-16 h-16 bg-[#f5f8ff] rounded-[228.57px] shadow-[0px_1.33px_2.67px_#1018280d] flex items-center justify-center">
                  <img
                    className="w-8 h-8"
                    alt={info.title}
                    src={info.icon}
                  />
                </div>
                <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] font-serif font-normal text-[#00359e] text-[28px] text-center">
                    {info.title}
                  </h3>
                  <p className="relative self-stretch text-[#475467] text-center">
                    {info.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
