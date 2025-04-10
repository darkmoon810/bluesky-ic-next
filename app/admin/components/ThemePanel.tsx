"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { theme } from "@/lib/Statics/theme.static"

export function ThemePanel() {
  const [themeSettings, setThemeSettings] = useState(theme)

  const handleColorChange = (colorKey: keyof typeof theme.colors, value: string) => {
    setThemeSettings(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorKey]: value
      }
    }))
  }

  const handleFontChange = (fontKey: keyof typeof theme.fonts, value: string) => {
    setThemeSettings(prev => ({
      ...prev,
      fonts: {
        ...prev.fonts,
        [fontKey]: value
      }
    }))
  }

  const handleSave = async () => {
    try {
      const response = await fetch('/api/admin/theme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(themeSettings),
      })

      if (!response.ok) {
        throw new Error('Failed to save theme settings')
      }

      alert('Theme settings saved successfully!')
    } catch (error) {
      console.error('Error saving theme:', error)
      alert('Failed to save theme settings')
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Theme Management</h1>

      <Tabs defaultValue="colors">
        <TabsList>
          <TabsTrigger value="colors">Colors</TabsTrigger>
          <TabsTrigger value="typography">Typography</TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              {Object.entries(themeSettings.colors).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 gap-4 items-center">
                  <label className="capitalize">{key}</label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={value}
                      onChange={(e) => handleColorChange(key as keyof typeof theme.colors, e.target.value)}
                    />
                    <Input
                      type="color"
                      value={value}
                      className="w-12"
                      onChange={(e) => handleColorChange(key as keyof typeof theme.colors, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="typography" className="space-y-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              {Object.entries(themeSettings.fonts).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 gap-4 items-center">
                  <label className="capitalize">{key}</label>
                  <Input
                    type="text"
                    value={value}
                    onChange={(e) => handleFontChange(key as keyof typeof theme.fonts, e.target.value)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Button onClick={handleSave} className="mt-6">
        Save Theme Settings
      </Button>
    </div>
  )
}