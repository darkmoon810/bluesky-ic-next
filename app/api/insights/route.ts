import { NextResponse } from 'next/server'
import { readFromDb, writeToDb } from '@/lib/db'

export async function GET() {
  try {
    const data = await readFromDb<{ insights: any[] }>('insights')
    return NextResponse.json(data.insights)
  } catch (error) {
    console.error('GET /api/insights error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch insights' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = await readFromDb<{ insights: any[] }>('insights')
    
    const newInsight = {
      id: Date.now().toString(),
      ...body,
      author: "Jean-Pierre Berger",
      date: new Date().toISOString().split('T')[0]
    }
    
    await writeToDb('insights', { 
      insights: [...data.insights, newInsight] 
    })
    
    return NextResponse.json(newInsight)
  } catch (error) {
    console.error('POST /api/insights error:', error)
    return NextResponse.json(
      { error: 'Failed to create insight' },
      { status: 500 }
    )
  }
}