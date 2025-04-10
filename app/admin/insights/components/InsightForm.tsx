"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

export function InsightForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image_url: "",
    link: "",
    is_external: false
  })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/insights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to create insight')

      setFormData({
        title: "",
        content: "",
        image_url: "",
        link: "",
        is_external: false
      })
      
      alert('Insight created successfully!')
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to create insight')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title">Title</label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="content">Content</label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image_url">Image URL</label>
            <Input
              id="image_url"
              value={formData.image_url}
              onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="link">Link</label>
            <Input
              id="link"
              value={formData.link}
              onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="is_external"
              checked={formData.is_external}
              onCheckedChange={(checked) => 
                setFormData(prev => ({ ...prev, is_external: checked as boolean }))
              }
            />
            <label htmlFor="is_external">External Link</label>
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? 'Creating...' : 'Create Insight'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}