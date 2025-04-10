"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function FinancialPlanningPanel() {
  const [planningData, setPlanningData] = useState({
    title: "",
    description: "",
    services: []
  })

  const handleSave = async () => {
    try {
      // Save logic here
      console.log('Saving financial planning data:', planningData)
    } catch (error) {
      console.error('Error saving data:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Financial Planning</h2>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Page Title</label>
              <Input
                value={planningData.title}
                onChange={(e) => setPlanningData(prev => ({
                  ...prev,
                  title: e.target.value
                }))}
              />
            </div>
            <div>
              <label className="block mb-2">Description</label>
              <Textarea
                value={planningData.description}
                onChange={(e) => setPlanningData(prev => ({
                  ...prev,
                  description: e.target.value
                }))}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}