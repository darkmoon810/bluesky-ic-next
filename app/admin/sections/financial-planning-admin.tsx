"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ColorPicker } from "@/components/ui/color-picker"

export default function FinancialPlanningAdmin() {
  const [content, setContent] = useState({
    pageTitle: "Comprehensive Financial Planning",
    mainDescription: "Create a roadmap for your financial future with our expert guidance.",
    primaryColor: "#00359e",
    secondaryColor: "#101828",
    planningSteps: [
      {
        title: "Initial Consultation",
        description: "Understanding your financial goals and current situation..."
      }
    ]
  })

  const handleSave = () => {
    localStorage.setItem('financialPlanningSettings', JSON.stringify(content))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif">Financial Planning Settings</h2>
      
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="pageTitle">Page Title</Label>
          <Input
            id="pageTitle"
            value={content.pageTitle}
            onChange={(e) => setContent({...content, pageTitle: e.target.value})}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="mainDescription">Main Description</Label>
          <Textarea
            id="mainDescription"
            value={content.mainDescription}
            onChange={(e) => setContent({...content, mainDescription: e.target.value})}
            rows={4}
          />
        </div>

        <div className="grid gap-2">
          <Label>Primary Color</Label>
          <ColorPicker
            color={content.primaryColor}
            onChange={(color) => setContent({...content, primaryColor: color})}
          />
        </div>

        <div className="grid gap-2">
          <Label>Secondary Color</Label>
          <ColorPicker
            color={content.secondaryColor}
            onChange={(color) => setContent({...content, secondaryColor: color})}
          />
        </div>

        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  )
}