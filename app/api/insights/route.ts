import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

const dataDirectory = path.join(process.cwd(), 'data')

export async function GET() {
  try {
    // Create data directory if it doesn't exist
    await fs.mkdir(dataDirectory, { recursive: true })
    
    const filePath = path.join(dataDirectory, 'insights.json')
    
    // Create file with initial data if it doesn't exist
    try {
      await fs.access(filePath)
    } catch {
      const initialData = {
        insights: [
          {
            id: "1",
            title: "Why a Balanced Portfolio Strategy is Important",
            content: "In the past a balanced portfolio typically meant...",
            category: "Investment Strategy",
            date: new Date().toISOString().split('T')[0]
          }
        ]
      }
      await fs.writeFile(filePath, JSON.stringify(initialData, null, 2))
    }
    
    // Read and return the data
    const jsonData = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(jsonData)
    return NextResponse.json(data.insights)
  } catch (error) {
    console.error('GET /api/insights error:', error)
    return NextResponse.json({ error: 'Failed to fetch insights' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const filePath = path.join(dataDirectory, 'insights.json')
    
    let data = { insights: [] }
    
    try {
      const jsonData = await fs.readFile(filePath, 'utf8')
      data = JSON.parse(jsonData)
    } catch {
      // File doesn't exist, use empty data
    }
    
    const newInsight = {
      id: Date.now().toString(),
      ...body,
      date: new Date().toISOString().split('T')[0]
    }
    
    data.insights.push(newInsight)
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
    
    return NextResponse.json(newInsight)
  } catch (error) {
    console.error('POST /api/insights error:', error)
    return NextResponse.json({ error: 'Failed to create insight' }, { status: 500 })
  }
}