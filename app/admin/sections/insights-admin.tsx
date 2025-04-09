"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export default function InsightsAdmin() {
  const [insights, setInsights] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [newInsight, setNewInsight] = useState({
    title: '',
    content: '',
    category: ''
  })

  useEffect(() => {
    fetchInsights()
  }, [])

  const fetchInsights = async () => {
    try {
      setLoading(true)
      setError('')
      const response = await fetch('/api/insights')
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch insights')
      }
      
      const data = await response.json()
      setInsights(data)
    } catch (error) {
      console.error('Error fetching insights:', error)
      setError(error instanceof Error ? error.message : 'Failed to load insights')
      toast.error('Failed to load insights')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInsight)
      })
      
      if (!response.ok) {
        throw new Error('Failed to create insight')
      }
      
      toast.success('Insight created successfully')
      await fetchInsights()
      setNewInsight({ title: '', content: '', category: '' })
    } catch (error) {
      console.error('Error creating insight:', error)
      toast.error('Failed to create insight')
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        {error}
        <Button 
          onClick={fetchInsights}
          className="ml-4"
        >
          Retry
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-serif mb-4">Create New Insight</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={newInsight.title}
                onChange={(e) => setNewInsight({
                  ...newInsight,
                  title: e.target.value
                })}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <Textarea
                value={newInsight.content}
                onChange={(e) => setNewInsight({
                  ...newInsight,
                  content: e.target.value
                })}
                required
                rows={6}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Input
                value={newInsight.category}
                onChange={(e) => setNewInsight({
                  ...newInsight,
                  category: e.target.value
                })}
                required
              />
            </div>
            <Button type="submit">Create Insight</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-serif">Published Insights</h2>
        {insights.map((insight: any) => (
          <Card key={insight.id}>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-2">{insight.title}</h3>
              <p className="text-gray-600 mb-2">{insight.category}</p>
              <p className="text-sm text-gray-500">{insight.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}