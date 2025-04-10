"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { aboutStatics } from "@/lib/Statics/about.static"

export function AboutPanel() {
  const [aboutData, setAboutData] = useState(aboutStatics)

  const handleSave = async () => {
    try {
      // Save logic here
      console.log('Saving about data:', aboutData)
    } catch (error) {
      console.error('Error saving about data:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">About Page Management</h2>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Hero Section</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Title</label>
            <Input
              value={aboutData.hero.title}
              onChange={(e) => setAboutData(prev => ({
                ...prev,
                hero: { ...prev.hero, title: e.target.value }
              }))}
            />
          </div>
          <div>
            <label className="block mb-2">Description</label>
            <Textarea
              value={aboutData.hero.description}
              onChange={(e) => setAboutData(prev => ({
                ...prev,
                hero: { ...prev.hero, description: e.target.value }
              }))}
            />
          </div>
        </div>
      </Card>

      {/* Add more sections for profile and contact info */}
    </div>
  )
}