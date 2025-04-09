"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ColorPicker } from "@/components/ui/color-picker"

export default function HomeAdmin() {
  const [heroTitle, setHeroTitle] = useState("Welcome to BlueSky Investment")
  const [primaryColor, setPrimaryColor] = useState("#00359e")
  const [secondaryColor, setSecondaryColor] = useState("#101828")

  const handleSave = () => {
    // Save to backend/localStorage/file
    console.log({ heroTitle, primaryColor, secondaryColor })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif">Home Page Settings</h2>
      
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="heroTitle">Hero Title</Label>
          <Input
            id="heroTitle"
            value={heroTitle}
            onChange={(e) => setHeroTitle(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label>Primary Color</Label>
          <ColorPicker
            color={primaryColor}
            onChange={setPrimaryColor}
          />
        </div>

        <div className="grid gap-2">
          <Label>Secondary Color</Label>
          <ColorPicker
            color={secondaryColor}
            onChange={setSecondaryColor}
          />
        </div>

        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  )
}