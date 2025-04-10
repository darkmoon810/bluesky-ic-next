"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { homeStatics } from "@/lib/Statics/home.static"

export function HomePanel() {
  const [homeData, setHomeData] = useState(homeStatics)

  const handleSave = async () => {
    try {
      // Save logic here
      console.log('Saving home data:', homeData)
    } catch (error) {
      console.error('Error saving home data:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Home Page Management</h2>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Hero Section</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Title</label>
            <Input
              value={homeData.hero.title}
              onChange={(e) => setHomeData(prev => ({
                ...prev,
                hero: { ...prev.hero, title: e.target.value }
              }))}
            />
          </div>
          <div>
            <label className="block mb-2">Description</label>
            <Textarea
              value={homeData.hero.description}
              onChange={(e) => setHomeData(prev => ({
                ...prev,
                hero: { ...prev.hero, description: e.target.value }
              }))}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}