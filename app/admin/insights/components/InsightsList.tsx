"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil, Trash2 } from "lucide-react"

interface Insight {
  id: string
  title: string
  content: string
  image_url: string
  is_external: boolean
  link: string
  created_at: string
}

export function InsightsList() {
  const [insights, setInsights] = useState<Insight[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchInsights()
  }, [])

  async function fetchInsights() {
    try {
      const response = await fetch('/api/insights')
      const data = await response.json()
      setInsights(data)
    } catch (error) {
      setError('Failed to fetch insights')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this insight?')) return

    try {
      const response = await fetch(`/api/insights/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) throw new Error('Failed to delete insight')

      setInsights(insights.filter(insight => insight.id !== id))
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to delete insight')
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="space-y-4">
      {insights.map((insight) => (
        <Card key={insight.id} className="hover:shadow-md transition-shadow">
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <h3 className="font-semibold mb-2">{insight.title}</h3>
              <p className="text-sm text-gray-500">{new Date(insight.created_at).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button 
                variant="destructive" 
                size="icon"
                onClick={() => handleDelete(insight.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}