import { promises as fs } from 'fs'
import path from 'path'

const dbDirectory = path.join(process.cwd(), 'data/db')

export async function readFromDb<T>(filename: string): Promise<T> {
  try {
    const filePath = path.join(dbDirectory, `${filename}.json`)
    const data = await fs.readFile(filePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    // If file doesn't exist, create it with empty data
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      const initialData = { insights: [] }
      await writeToDb(filename, initialData)
      return initialData as T
    }
    throw error
  }
}

export async function writeToDb<T>(filename: string, data: T): Promise<void> {
  const filePath = path.join(dbDirectory, `${filename}.json`)
  await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}