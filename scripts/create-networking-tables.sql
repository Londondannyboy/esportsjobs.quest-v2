-- Create networking tables for MVP Actor (Reach character)
-- Run this in your Neon SQL console

-- =====================================================
-- CONNECTIONS TABLE
-- Tracks user-to-user connections (like LinkedIn connections)
-- =====================================================
CREATE TABLE IF NOT EXISTS connections (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,           -- The user who initiated or received the connection
  connected_user_id TEXT NOT NULL, -- The other user
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'accepted', 'rejected', 'blocked'
  initiated_by TEXT NOT NULL,      -- Who sent the request
  connection_type TEXT DEFAULT 'network', -- 'network', 'coach', 'recruiter'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, connected_user_id)
);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_connections_user_id ON connections(user_id);
CREATE INDEX IF NOT EXISTS idx_connections_connected_user_id ON connections(connected_user_id);
CREATE INDEX IF NOT EXISTS idx_connections_status ON connections(status);

-- =====================================================
-- MESSAGES TABLE
-- Direct messages between connected users
-- =====================================================
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  conversation_id TEXT NOT NULL,   -- Unique ID for the conversation thread
  sender_id TEXT NOT NULL,
  recipient_id TEXT NOT NULL,
  content TEXT NOT NULL,
  read_at TIMESTAMPTZ DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for fast message retrieval
CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_messages_recipient_id ON messages(recipient_id);
CREATE INDEX IF NOT EXISTS idx_messages_sender_id ON messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at DESC);

-- =====================================================
-- USER_TYPES TABLE
-- Track user types: seeker (default), coach, recruiter
-- =====================================================
CREATE TABLE IF NOT EXISTS user_types (
  user_id TEXT PRIMARY KEY,
  user_type TEXT NOT NULL DEFAULT 'seeker', -- 'seeker', 'coach', 'recruiter'
  verified BOOLEAN DEFAULT false,
  verification_date TIMESTAMPTZ,
  bio TEXT,
  specializations TEXT[], -- For coaches: areas of expertise
  company TEXT,           -- For recruiters: company they represent
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =====================================================
-- HELPER FUNCTION: Generate conversation ID
-- Ensures consistent conversation ID regardless of who initiates
-- =====================================================
CREATE OR REPLACE FUNCTION generate_conversation_id(user1_id TEXT, user2_id TEXT)
RETURNS TEXT AS $$
BEGIN
  IF user1_id < user2_id THEN
    RETURN user1_id || '_' || user2_id;
  ELSE
    RETURN user2_id || '_' || user1_id;
  END IF;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- =====================================================
-- AUTO-CONNECT NEW USERS TO FOUNDER (Dan)
-- This trigger auto-creates a connection to Dan for new users
-- =====================================================
-- Note: Replace 'DAN_USER_ID' with actual founder user ID
-- CREATE OR REPLACE FUNCTION auto_connect_new_user()
-- RETURNS TRIGGER AS $$
-- BEGIN
--   INSERT INTO connections (user_id, connected_user_id, status, initiated_by, connection_type)
--   VALUES (NEW.id, 'DAN_USER_ID', 'accepted', 'DAN_USER_ID', 'network')
--   ON CONFLICT DO NOTHING;
--   RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;
