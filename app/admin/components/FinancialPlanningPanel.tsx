"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface Service {
  title: string
  description: string
  icon: string
}

interface FinancialPlanningData {
  hero: {
    title: string
    description: string
  }
  services: Service[]
}

export function FinancialPlanningPanel() {
  const [planningData, setPlanningData] = useState<FinancialPlanningData>({
    hero: {
      title: "Financial Planning Services",
      description: "Comprehensive financial planning tailored to your needs"
    },
    services: []
  })

  const addService = () => {
    setPlanningData(prev => ({
      ...prev,
      services: [...prev.services, { title: "", description: "", icon: "" }]
    }))
  }

  const removeService = (index: number) => {
    setPlanningData(prev => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Financial Planning</h2>
        <Button onClick={() => console.log('Saving...')}>Save Changes</Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Hero Section</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Title</label>
              <Input
                value={planningData.hero.title}
                onChange={(e) => setPlanningData(prev => ({
                  ...prev,
                  hero: { ...prev.hero, title: e.target.value }
                }))}
              />
            </div>
            <div>
              <label className="block mb-2">Description</label>
              <Textarea
                value={planningData.hero.description}
                onChange={(e) => setPlanningData(prev => ({
                  ...prev,
                  hero: { ...prev.hero, description: e.target.value }
                }))}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Services</h3>
          <Button onClick={addService} variant="outline">Add Service</Button>
        </div>

        {planningData.services.map((service, index) => (
          <Card key={index}>
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-end">
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => removeService(index)}
                >
                  Remove
                </Button>
              </div>
              <div>
                <label className="block mb-2">Service Title</label>
                <Input
                  value={service.title}
                  onChange={(e) => {
                    const newServices = [...planningData.services]
                    newServices[index] = { ...service, title: e.target.value }
                    setPlanningData(prev => ({ ...prev, services: newServices }))
                  }}
                />
              </div>
              <div>
                <label className="block mb-2">Description</label>
                <Textarea
                  value={service.description}
                  onChange={(e) => {
                    const newServices = [...planningData.services]
                    newServices[index] = { ...service, description: e.target.value }
                    setPlanningData(prev => ({ ...prev, services: newServices }))
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}