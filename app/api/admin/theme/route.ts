import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  try {
    const themeSettings = await request.json()
    
    // Create the theme content
    const themeContent = `export const theme = ${JSON.stringify(themeSettings, null, 2)}`
    
    // Write to theme.static.ts
    const themePath = path.join(process.cwd(), 'lib', 'Statics', 'theme.static.ts')
    await fs.writeFile(themePath, themeContent, 'utf-8')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating theme:', error)
    return NextResponse.json(
      { error: 'Failed to update theme' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const themePath = path.join(process.cwd(), 'lib', 'Statics', 'theme.static.ts')
    const themeContent = await fs.readFile(themePath, 'utf-8')
    
    return NextResponse.json({ themeContent })
  } catch (error) {
    console.error('Error reading theme:', error)
    return NextResponse.json(
      { error: 'Failed to read theme' },
      { status: 500 }
    )
  }
}