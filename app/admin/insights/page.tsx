"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { InsightsList } from "./components/InsightsList"
import { InsightForm } from "./components/InsightForm"
import { InsightCategories } from "./components/InsightCategories"

export default function InsightsManagement() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Insights Management</h1>
      
      <Tabs defaultValue="list">
        <TabsList>
          <TabsTrigger value="list">All Insights</TabsTrigger>
          <TabsTrigger value="create">Create New</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <InsightsList />
        </TabsContent>

        <TabsContent value="create">
          <InsightForm />
        </TabsContent>

        <TabsContent value="categories">
          <InsightCategories />
        </TabsContent>
      </Tabs>
    </div>
  )
}