"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function SeminarAdmin() {
  const [founderName, setFounderName] = useState("Jean-Pierre Berger")
  const [founderBio, setFounderBio] = useState("...")
  
  const handleSave = () => {
    console.log({ founderName, founderBio })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-serif">About Page Settings</h2>
      
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="founderName">Founder Name</Label>
          <Input
            id="founderName"
            value={founderName}
            onChange={(e) => setFounderName(e.target.value)} 
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="founderBio">Founder Bio</Label>
          <Textarea
            id="founderBio"
            value={founderBio}
            onChange={(e) => setFounderBio(e.target.value)}
            rows={6}
          />
        </div>

        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  )
}