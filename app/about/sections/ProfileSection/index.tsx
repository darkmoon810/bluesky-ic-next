"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/db'
import { Database } from '@/lib/database.types'

type Profile = Database['public']['Tables']['profiles']['Row']

export default function ProfileSection() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .single()

        if (error) throw error
        setProfile(data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading) return <div>Loading...</div>
  if (!profile) return <div>No profile data found</div>

  return (
    <div className="flex-col items-center justify-center gap-16 px-0 py-20 self-stretch w-full flex-[0_0_auto] bg-white flex relative">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-screen-xl px-4 sm:px-8 py-0 relative w-full">
        <div className="flex-col items-start gap-8 w-full lg:w-1/2 flex relative">
          <div className="flex flex-col items-start relative self-stretch w-full">
            <h2 className="relative self-stretch mt-[-1.00px] font-serif font-normal text-[#101828] text-4xl md:text-5xl tracking-[-0.96px] leading-[normal]">
              {profile.name}
            </h2>
            <h3 className="relative self-stretch font-serif font-normal text-transparent text-2xl md:text-[28px] tracking-[0] leading-[normal]">
              {profile.title}
            </h3>
          </div>
          <div className="flex flex-col items-start gap-4 relative self-stretch">
            {profile.bio.map((paragraph, index) => (
              <p key={index} className="relative self-stretch text-[#475467] text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="relative w-full lg:w-[576px] h-auto lg:h-[654px] rounded-2xl">
          <img
            className="w-full lg:w-[576px] h-auto lg:h-[576px] object-cover rounded-2xl"
            alt={profile.name}
            src={profile.image_url}
          />
        </div>
      </div>
    </div>
  )
}