"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function InsightsPanel() {
  const [insights, setInsights] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Insights Management</h2>
      </div>

      <Tabs defaultValue="list">
        <TabsList>
          <TabsTrigger value="list">All Insights</TabsTrigger>
          <TabsTrigger value="create">Create New</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <Card>
            <CardContent className="p-6">
              {/* Insights list will go here */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block mb-2">Title</label>
                  <Input />
                </div>
                <div>
                  <label className="block mb-2">Content</label>
                  <Textarea />
                </div>
                <Button>Create Insight</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}