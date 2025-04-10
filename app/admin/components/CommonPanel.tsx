"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { theme } from "@/lib/Statics/theme.static"

export function CommonPanel() {
  const [settings, setSettings] = useState({
    logo: "/logo.svg",
    favicon: "/favicon.ico",
    socialLinks: {
      linkedin: "",
      twitter: "",
    },
    footerText: "",
  })

  const handleSave = async () => {
    try {
      // Save logic here
      console.log('Saving common settings:', settings)
    } catch (error) {
      console.error('Error saving settings:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Common Settings</h2>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Logo & Branding</h3>
            <div className="space-y-2">
              <label>Logo URL</label>
              <Input
                value={settings.logo}
                onChange={(e) => setSettings(prev => ({ ...prev, logo: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social Links</h3>
            <div className="space-y-2">
              <label>LinkedIn</label>
              <Input
                value={settings.socialLinks.linkedin}
                onChange={(e) => setSettings(prev => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, linkedin: e.target.value }
                }))}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}