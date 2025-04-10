import { createClient } from '@supabase/supabase-js'
import { promises as fs } from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

async function main() {
  // Load environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase credentials')
  }

  // Create Supabase client
  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    // Read and execute migrations first
    const migrationsFile = path.join(process.cwd(), 'db', 'migrations.sql')
    const migrations = await fs.readFile(migrationsFile, 'utf-8')
    
    const { error: migrationError } = await supabase.rpc('exec_sql', { 
      sql_query: migrations 
    })
    if (migrationError) throw migrationError

    console.log('✅ Migrations completed successfully')

    // Then read and execute seeds
    const seedsFile = path.join(process.cwd(), 'db', 'seeds.sql')
    const seeds = await fs.readFile(seedsFile, 'utf-8')

    const { error: seedError } = await supabase.rpc('exec_sql', { 
      sql_query: seeds 
    })
    if (seedError) throw seedError

    console.log('✅ Database seeded successfully')
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

main()