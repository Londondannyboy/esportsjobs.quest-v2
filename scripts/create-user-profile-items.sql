-- Create user_profile_items table for storing user preferences
-- Run this in your Neon SQL console

CREATE TABLE IF NOT EXISTS user_profile_items (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  item_type TEXT NOT NULL,  -- 'location', 'role_preference', 'company', 'skill'
  value TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  confirmed BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, item_type, value)
);

-- Create index for faster lookups by user
CREATE INDEX IF NOT EXISTS idx_user_profile_items_user_id ON user_profile_items(user_id);

-- Create index for type filtering
CREATE INDEX IF NOT EXISTS idx_user_profile_items_type ON user_profile_items(item_type);
