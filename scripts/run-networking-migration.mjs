// Run networking tables migration
// Usage: node scripts/run-networking-migration.mjs

import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read .env.local file manually
function loadEnv() {
  try {
    const envPath = join(__dirname, '..', '.env.local');
    const envContent = readFileSync(envPath, 'utf-8');
    const lines = envContent.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        const value = valueParts.join('=').replace(/^["']|["']$/g, '');
        process.env[key] = value;
      }
    }
  } catch (e) {
    console.log('Could not load .env.local, using environment variables');
  }
}

loadEnv();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('DATABASE_URL not found in environment');
  process.exit(1);
}

const sql = neon(DATABASE_URL);

async function runMigration() {
  console.log('Creating networking tables...\n');

  try {
    // Create connections table
    console.log('1. Creating connections table...');
    await sql`
      CREATE TABLE IF NOT EXISTS connections (
        id SERIAL PRIMARY KEY,
        user_id TEXT NOT NULL,
        connected_user_id TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        initiated_by TEXT NOT NULL,
        connection_type TEXT DEFAULT 'network',
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        UNIQUE(user_id, connected_user_id)
      )
    `;
    console.log('   ✓ connections table created');

    // Create connections indexes
    console.log('2. Creating connections indexes...');
    await sql`CREATE INDEX IF NOT EXISTS idx_connections_user_id ON connections(user_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_connections_connected_user_id ON connections(connected_user_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_connections_status ON connections(status)`;
    console.log('   ✓ connections indexes created');

    // Create messages table
    console.log('3. Creating messages table...');
    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        conversation_id TEXT NOT NULL,
        sender_id TEXT NOT NULL,
        recipient_id TEXT NOT NULL,
        content TEXT NOT NULL,
        read_at TIMESTAMPTZ DEFAULT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;
    console.log('   ✓ messages table created');

    // Create messages indexes
    console.log('4. Creating messages indexes...');
    await sql`CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON messages(conversation_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_messages_recipient_id ON messages(recipient_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_messages_sender_id ON messages(sender_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC)`;
    console.log('   ✓ messages indexes created');

    // Create user_types table
    console.log('5. Creating user_types table...');
    await sql`
      CREATE TABLE IF NOT EXISTS user_types (
        user_id TEXT PRIMARY KEY,
        user_type TEXT NOT NULL DEFAULT 'seeker',
        verified BOOLEAN DEFAULT false,
        verification_date TIMESTAMPTZ,
        bio TEXT,
        specializations TEXT[],
        company TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;
    console.log('   ✓ user_types table created');

    // Create helper function
    console.log('6. Creating generate_conversation_id function...');
    await sql`
      CREATE OR REPLACE FUNCTION generate_conversation_id(user1_id TEXT, user2_id TEXT)
      RETURNS TEXT AS $$
      BEGIN
        IF user1_id < user2_id THEN
          RETURN user1_id || '_' || user2_id;
        ELSE
          RETURN user2_id || '_' || user1_id;
        END IF;
      END;
      $$ LANGUAGE plpgsql IMMUTABLE
    `;
    console.log('   ✓ generate_conversation_id function created');

    console.log('\n✅ All networking tables created successfully!');

    // Verify tables exist
    console.log('\nVerifying tables...');
    const tables = await sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_name IN ('connections', 'messages', 'user_types')
    `;
    console.log('Tables found:', tables.map(t => t.table_name).join(', '));

  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    process.exit(1);
  }
}

runMigration();
