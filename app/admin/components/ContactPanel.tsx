"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { aboutStatics } from "@/lib/Statics/about.static"
import { BuildingIcon, PhoneIcon, MailIcon } from "lucide-react"

export function ContactPanel() {
  const [contactData, setContactData] = useState(aboutStatics.contact)

  const handleSave = async () => {
    try {
      // Save logic here
      console.log('Saving contact data:', contactData)
    } catch (error) {
      console.error('Error saving contact data:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {contactData.items.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                {item.icon.includes('building') && <BuildingIcon className="w-6 h-6" />}
                {item.icon.includes('phone') && <PhoneIcon className="w-6 h-6" />}
                {item.icon.includes('mail') && <MailIcon className="w-6 h-6" />}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Content</label>
                  <Input
                    value={item.content}
                    onChange={(e) => {
                      const newItems = [...contactData.items]
                      newItems[index] = { ...item, content: e.target.value }
                      setContactData({ ...contactData, items: newItems })
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}