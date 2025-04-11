"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { aboutStatics } from "@/lib/Statics/about.static"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ThemePanel() {
  const [themeData, setThemeData] = useState(aboutStatics.theme)

  const handleSave = async () => {
    try {
      // Save logic here
      console.log('Saving theme data:', themeData)
    } catch (error) {
      console.error('Error saving theme data:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Theme Settings</h2>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>

      <Tabs defaultValue="colors">
        <TabsList>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
          <TabsTrigger value="spacing">Spacing</TabsTrigger>
        </TabsList>

        <TabsContent value="colors">
          <Card>
            <CardContent className="p-6 space-y-4">
              {Object.entries(themeData.colors).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 gap-4 items-center">
                  <label className="capitalize">{key}</label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={value}
                      onChange={(e) => setThemeData(prev => ({
                        ...prev,
                        colors: { ...prev.colors, [key]: e.target.value }
                      }))}
                    />
                    <Input
                      type="color"
                      value={value}
                      className="w-12"
                      onChange={(e) => setThemeData(prev => ({
                        ...prev,
                        colors: { ...prev.colors, [key]: e.target.value }
                      }))}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="typography">
          <Card>
            <CardContent className="p-6 space-y-4">
              {Object.entries(themeData.fonts).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 gap-4 items-center">
                  <label className="capitalize">{key}</label>
                  <Input
                    value={value}
                    onChange={(e) => setThemeData(prev => ({
                      ...prev,
                      fonts: { ...prev.fonts, [key]: e.target.value }
                    }))}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="spacing">
          <Card>
            <CardContent className="p-6 space-y-4">
              {Object.entries(themeData.spacing).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 gap-4 items-center">
                  <label className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                  <Input
                    value={value}
                    onChange={(e) => setThemeData(prev => ({
                      ...prev,
                      spacing: { ...prev.spacing, [key]: e.target.value }
                    }))}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}