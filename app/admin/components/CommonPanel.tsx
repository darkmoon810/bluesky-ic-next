"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SocialLinks {
  linkedin: string
  twitter: string
  facebook: string
}

interface CommonSettings {
  logo: string
  favicon: string
  socialLinks: SocialLinks
  footerText: string
  companyInfo: {
    name: string
    address: string
    phone: string
    email: string
  }
}

export function CommonPanel() {
  const [settings, setSettings] = useState<CommonSettings>({
    logo: "/logo.svg",
    favicon: "/favicon.ico",
    socialLinks: {
      linkedin: "",
      twitter: "",
      facebook: ""
    },
    footerText: "",
    companyInfo: {
      name: "BlueSky Investment Counsel",
      address: "161 Bay St Toronto, Ontario, M5J 2S1 Canada",
      phone: "416-930-5550",
      email: "contact@blueskyic.com"
    }
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

      <Tabs defaultValue="branding">
        <TabsList>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="company">Company Info</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
        </TabsList>

        <TabsContent value="branding">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="block mb-2">Logo URL</label>
                <Input
                  value={settings.logo}
                  onChange={(e) => setSettings(prev => ({ ...prev, logo: e.target.value }))}
                />
              </div>
              <div>
                <label className="block mb-2">Favicon URL</label>
                <Input
                  value={settings.favicon}
                  onChange={(e) => setSettings(prev => ({ ...prev, favicon: e.target.value }))}
                />
              </div>
              <div>
                <label className="block mb-2">Footer Text</label>
                <Input
                  value={settings.footerText}
                  onChange={(e) => setSettings(prev => ({ ...prev, footerText: e.target.value }))}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="company">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="block mb-2">Company Name</label>
                <Input
                  value={settings.companyInfo.name}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    companyInfo: { ...prev.companyInfo, name: e.target.value }
                  }))}
                />
              </div>
              <div>
                <label className="block mb-2">Address</label>
                <Input
                  value={settings.companyInfo.address}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    companyInfo: { ...prev.companyInfo, address: e.target.value }
                  }))}
                />
              </div>
              <div>
                <label className="block mb-2">Phone</label>
                <Input
                  value={settings.companyInfo.phone}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    companyInfo: { ...prev.companyInfo, phone: e.target.value }
                  }))}
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <Input
                  value={settings.companyInfo.email}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    companyInfo: { ...prev.companyInfo, email: e.target.value }
                  }))}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="block mb-2">LinkedIn URL</label>
                <Input
                  value={settings.socialLinks.linkedin}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    socialLinks: { ...prev.socialLinks, linkedin: e.target.value }
                  }))}
                />
              </div>
              <div>
                <label className="block mb-2">Twitter URL</label>
                <Input
                  value={settings.socialLinks.twitter}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    socialLinks: { ...prev.socialLinks, twitter: e.target.value }
                  }))}
                />
              </div>
              <div>
                <label className="block mb-2">Facebook URL</label>
                <Input
                  value={settings.socialLinks.facebook}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    socialLinks: { ...prev.socialLinks, facebook: e.target.value }
                  }))}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}