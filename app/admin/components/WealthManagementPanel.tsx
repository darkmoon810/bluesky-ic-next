"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Strategy {
  title: string
  description: string
  benefits: string[]
}

export function WealthManagementPanel() {
  const [wealthData, setWealthData] = useState({
    hero: {
      title: "Wealth Management Solutions",
      description: "Comprehensive wealth management strategies for high-net-worth individuals"
    },
    strategies: [] as Strategy[]
  })

  const addStrategy = () => {
    setWealthData(prev => ({
      ...prev,
      strategies: [...prev.strategies, { title: "", description: "", benefits: [] }]
    }))
  }

  const removeStrategy = (index: number) => {
    setWealthData(prev => ({
      ...prev,
      strategies: prev.strategies.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Wealth Management</h2>
        <Button onClick={() => console.log('Saving wealth data:', wealthData)}>
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="content">
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="strategies">Investment Strategies</TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <label className="block mb-2">Page Title</label>
                <Input
                  value={wealthData.hero.title}
                  onChange={(e) => setWealthData(prev => ({
                    ...prev,
                    hero: { ...prev.hero, title: e.target.value }
                  }))}
                />
              </div>
              <div>
                <label className="block mb-2">Description</label>
                <Textarea
                  value={wealthData.hero.description}
                  onChange={(e) => setWealthData(prev => ({
                    ...prev,
                    hero: { ...prev.hero, description: e.target.value }
                  }))}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategies">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Investment Strategies</h3>
              <Button onClick={addStrategy} variant="outline">
                Add Strategy
              </Button>
            </div>

            {wealthData.strategies.map((strategy, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-end">
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => removeStrategy(index)}
                    >
                      Remove
                    </Button>
                  </div>
                  <div>
                    <label className="block mb-2">Strategy Title</label>
                    <Input
                      value={strategy.title}
                      onChange={(e) => {
                        const newStrategies = [...wealthData.strategies]
                        newStrategies[index] = { ...strategy, title: e.target.value }
                        setWealthData(prev => ({ ...prev, strategies: newStrategies }))
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Description</label>
                    <Textarea
                      value={strategy.description}
                      onChange={(e) => {
                        const newStrategies = [...wealthData.strategies]
                        newStrategies[index] = { ...strategy, description: e.target.value }
                        setWealthData(prev => ({ ...prev, strategies: newStrategies }))
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}