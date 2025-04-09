"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ColorPicker } from "@/components/ui/color-picker"

export default function WealthManagementAdmin() {
  const [content, setContent] = useState({
    heroTitle: "Strategic Wealth Management",
    heroDescription: "Grow, protect, and transfer your wealth effectively with our personalized wealth management services.",
    backgroundColor: "#0c111d",
    accentColor: "#00359e",
    services: [
      {
        title: "Portfolio Management",
        description: "Strategic asset allocation and investment management..."
      }
    ]
  })

  const handleSave = () => {
    localStorage.setItem('wealthManagementSettings', JSON.stringify(content))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif">Wealth Management Settings</h2>
      
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="heroTitle">Hero Title</Label>
          <Input
            id="heroTitle"
            value={content.heroTitle}
            onChange={(e) => setContent({...content, heroTitle: e.target.value})}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="heroDescription">Hero Description</Label>
          <Textarea
            id="heroDescription"
            value={content.heroDescription}
            onChange={(e) => setContent({...content, heroDescription: e.target.value})}
            rows={4}
          />
        </div>

        <div className="grid gap-2">
          <Label>Background Color</Label>
          <ColorPicker
            color={content.backgroundColor}
            onChange={(color) => setContent({...content, backgroundColor: color})}
          />
        </div>

        <div className="grid gap-2">
          <Label>Accent Color</Label>
          <ColorPicker
            color={content.accentColor}
            onChange={(color) => setContent({...content, accentColor: color})}
          />
        </div>

        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  )
}