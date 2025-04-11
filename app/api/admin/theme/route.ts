import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  try {
    const themePath = path.join(process.cwd(), 'lib', 'Statics', 'theme.static.ts')
    const themeContent = await fs.readFile(themePath, 'utf-8')
    
    return NextResponse.json({ themeContent })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read theme' },
      { status: 500 }
    )
  }
}