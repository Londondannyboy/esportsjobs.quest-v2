"use client";

import { useState, useEffect, useCallback } from "react";
import { authClient } from "@/app/lib/auth/client";
import { UserButton, SignedIn, SignedOut } from "@neondatabase/auth/react/ui";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic import for 3D graph (SSR issues)
const EditableGraph3D = dynamic(
  () => import("@/app/components/EditableGraph3D").then(mod => mod.EditableGraph3D),
  { ssr: false, loading: () => <div className="h-[500px] bg-gray-900 rounded-xl animate-pulse" /> }
);

// Types
interface Message {
  id: number;
  from_user_id: string;
  to_user_id: string;
  content: string;
  created_at: string;
  read_at: string | null;
  sender_name: string;
  sender_company: string;
  sender_title: string;
  sender_type: string;
  sender_avatar?: string;
}

interface Connection {
  id: number;
  from_user_id: string;
  to_user_id: string;
  status: string;
  message: string;
  created_at: string;
  from_name: string;
  from_company: string;
  from_title: string;
  from_type: string;
  to_name: string;
  to_company: string;
  to_title: string;
  to_type: string;
}

interface ProfileItem {
  id: number;
  item_type: string;
  value: string;
  metadata: Record<string, unknown>;
  confirmed: boolean;
}

interface UserType {
  user_id: string;
  type: string;
  display_name: string;
  company: string;
  title: string;
  verified: boolean;
}

// Tab types
type TabType = "messages" | "connections" | "people" | "profile";

export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [activeTab, setActiveTab] = useState<TabType>("profile");

  if (isPending) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center max-w-md border border-gray-700">
          <h1 className="text-2xl font-bold text-white mb-4">Sign in to access your dashboard</h1>
          <p className="text-gray-400 mb-6">Track your esports career, view messages, and manage your profile.</p>
          <a
            href="/auth/sign-in"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-cyan-400">EsportsJobs.quest</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <Link href="/dashboard" className="text-cyan-400 font-medium">Dashboard</Link>
            <UserButton />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">
            Welcome back, {user.name?.split(' ')[0]}!
          </h1>
          <p className="text-gray-400">Manage your esports career profile and connections</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-gray-800 p-1 rounded-lg w-fit">
          {[
            { id: "profile" as TabType, label: "My Profile", icon: "👤" },
            { id: "messages" as TabType, label: "Messages", icon: "💬" },
            { id: "connections" as TabType, label: "Connections", icon: "🤝" },
            { id: "people" as TabType, label: "Find People", icon: "🔍" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-gray-700 text-cyan-400 shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700">
          {activeTab === "messages" && <MessagesTab userId={user.id} />}
          {activeTab === "connections" && <ConnectionsTab userId={user.id} />}
          {activeTab === "people" && <PeopleTab userId={user.id} />}
          {activeTab === "profile" && <ProfileTab userId={user.id} userName={user.name} />}
        </div>
      </main>
    </div>
  );
}

// Messages Tab
function MessagesTab({ userId }: { userId: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [replyContent, setReplyContent] = useState("");

  useEffect(() => {
    fetchMessages();
  }, [userId]);

  const fetchMessages = async () => {
    try {
      const res = await fetch(`/api/messages?userId=${userId}`);
      const data = await res.json();
      setMessages(data.messages || []);
    } catch (e) {
      console.error("Failed to fetch messages:", e);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId: number) => {
    try {
      await fetch("/api/messages", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, messageIds: [messageId] }),
      });
      fetchMessages();
    } catch (e) {
      console.error("Failed to mark as read:", e);
    }
  };

  const sendReply = async () => {
    if (!selectedMessage || !replyContent.trim()) return;

    try {
      await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fromUserId: userId,
          toUserId: selectedMessage.from_user_id,
          content: replyContent,
        }),
      });
      setReplyContent("");
      alert("Reply sent!");
    } catch (e) {
      console.error("Failed to send reply:", e);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-400">Loading messages...</div>;
  }

  return (
    <div className="flex h-[600px]">
      {/* Message List */}
      <div className="w-1/3 border-r border-gray-700 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="p-8 text-center text-gray-400">No messages yet</div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => {
                setSelectedMessage(msg);
                if (!msg.read_at) markAsRead(msg.id);
              }}
              className={`p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-700/50 transition-colors ${
                selectedMessage?.id === msg.id ? "bg-gray-700" : ""
              } ${!msg.read_at ? "bg-cyan-900/20" : ""}`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold">
                  {msg.sender_name?.[0] || "?"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white truncate">{msg.sender_name}</span>
                    {!msg.read_at && (
                      <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-gray-400 truncate">{msg.sender_company}</p>
                  <p className="text-sm text-gray-500 truncate mt-1">{msg.content}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Message Detail */}
      <div className="flex-1 flex flex-col">
        {selectedMessage ? (
          <>
            {/* Header */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {selectedMessage.sender_name?.[0] || "?"}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{selectedMessage.sender_name}</h3>
                  <p className="text-sm text-gray-400">
                    {selectedMessage.sender_title} at {selectedMessage.sender_company}
                  </p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedMessage.sender_type === "recruiter"
                      ? "bg-cyan-900 text-cyan-300"
                      : selectedMessage.sender_type === "coach"
                      ? "bg-green-900 text-green-300"
                      : "bg-gray-700 text-gray-300"
                  }`}>
                    {selectedMessage.sender_type}
                  </span>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <p className="text-gray-200 whitespace-pre-wrap">{selectedMessage.content}</p>
              <p className="text-xs text-gray-500 mt-4">
                {new Date(selectedMessage.created_at).toLocaleString()}
              </p>
            </div>

            {/* Reply */}
            <div className="p-4 border-t border-gray-700">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="Write a reply..."
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
                rows={3}
              />
              <div className="flex justify-end mt-2">
                <button
                  onClick={sendReply}
                  disabled={!replyContent.trim()}
                  className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Send Reply
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a message to read
          </div>
        )}
      </div>
    </div>
  );
}

// Connections Tab
function ConnectionsTab({ userId }: { userId: string }) {
  const [connections, setConnections] = useState<Connection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConnections();
  }, [userId]);

  const fetchConnections = async () => {
    try {
      const res = await fetch(`/api/connections?userId=${userId}`);
      const data = await res.json();
      setConnections(data.connections || []);
    } catch (e) {
      console.error("Failed to fetch connections:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleConnection = async (connectionId: number, status: "accepted" | "rejected") => {
    try {
      await fetch("/api/connections", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ connectionId, status }),
      });
      fetchConnections();
    } catch (e) {
      console.error("Failed to update connection:", e);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-400">Loading connections...</div>;
  }

  const pending = connections.filter((c) => c.status === "pending" && c.to_user_id === userId);
  const accepted = connections.filter((c) => c.status === "accepted");

  return (
    <div className="p-6">
      {/* Pending Requests */}
      {pending.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">
            Pending Requests ({pending.length})
          </h3>
          <div className="grid gap-4">
            {pending.map((conn) => (
              <div key={conn.id} className="flex items-center justify-between p-4 bg-yellow-900/20 rounded-lg border border-yellow-800/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold">
                    {conn.from_name?.[0] || "?"}
                  </div>
                  <div>
                    <p className="font-medium text-white">{conn.from_name}</p>
                    <p className="text-sm text-gray-400">{conn.from_title} at {conn.from_company}</p>
                    {conn.message && (
                      <p className="text-sm text-gray-500 mt-1 italic">"{conn.message}"</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleConnection(conn.id, "accepted")}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleConnection(conn.id, "rejected")}
                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Connected */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Your Connections ({accepted.length})
        </h3>
        {accepted.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No connections yet. Find people to connect with!
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {accepted.map((conn) => {
              const isFromMe = conn.from_user_id === userId;
              const name = isFromMe ? conn.to_name : conn.from_name;
              const company = isFromMe ? conn.to_company : conn.from_company;
              const title = isFromMe ? conn.to_title : conn.from_title;
              const type = isFromMe ? conn.to_type : conn.from_type;

              return (
                <div key={conn.id} className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold">
                      {name?.[0] || "?"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white truncate">{name}</p>
                      <p className="text-sm text-gray-400 truncate">{title}</p>
                      <p className="text-xs text-gray-500 truncate">{company}</p>
                    </div>
                  </div>
                  <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                    type === "recruiter"
                      ? "bg-cyan-900 text-cyan-300"
                      : type === "coach"
                      ? "bg-green-900 text-green-300"
                      : "bg-gray-600 text-gray-300"
                  }`}>
                    {type}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// People Tab (Find & Connect)
function PeopleTab({ userId }: { userId: string }) {
  const [people, setPeople] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      const res = await fetch(`/api/people`);
      const data = await res.json();
      setPeople(data.people || []);
    } catch (e) {
      console.error("Failed to fetch people:", e);
    } finally {
      setLoading(false);
    }
  };

  const sendConnectionRequest = async (toUserId: string, message: string) => {
    try {
      await fetch("/api/connections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fromUserId: userId, toUserId, message }),
      });
      alert("Connection request sent!");
    } catch (e) {
      console.error("Failed to send connection:", e);
    }
  };

  const filtered = people.filter((p) => {
    if (p.user_id === userId) return false; // Don't show self
    if (filter !== "all" && p.type !== filter) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        p.display_name?.toLowerCase().includes(s) ||
        p.company?.toLowerCase().includes(s) ||
        p.title?.toLowerCase().includes(s)
      );
    }
    return true;
  });

  if (loading) {
    return <div className="p-8 text-center text-gray-400">Loading people...</div>;
  }

  return (
    <div className="p-6">
      {/* Search & Filter */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, company, or title..."
          className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
        >
          <option value="all">All Types</option>
          <option value="recruiter">Recruiters</option>
          <option value="coach">Coaches</option>
          <option value="candidate">Candidates</option>
          <option value="admin">Admins</option>
        </select>
      </div>

      {/* People Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No people found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((person) => (
            <div key={person.user_id} className="p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                  person.type === "recruiter"
                    ? "bg-gradient-to-br from-cyan-400 to-cyan-600"
                    : person.type === "coach"
                    ? "bg-gradient-to-br from-green-400 to-green-600"
                    : "bg-gradient-to-br from-gray-400 to-gray-600"
                }`}>
                  {person.display_name?.[0] || "?"}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-white">{person.display_name}</p>
                    {person.verified && (
                      <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{person.title}</p>
                  <p className="text-sm text-gray-500">{person.company}</p>
                  <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                    person.type === "recruiter"
                      ? "bg-cyan-900 text-cyan-300"
                      : person.type === "coach"
                      ? "bg-green-900 text-green-300"
                      : "bg-gray-600 text-gray-300"
                  }`}>
                    {person.type}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  const msg = prompt("Add a message to your connection request:");
                  if (msg !== null) sendConnectionRequest(person.user_id, msg);
                }}
                className="w-full mt-4 bg-cyan-900/50 hover:bg-cyan-900 text-cyan-300 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Profile Tab with full CRUD + 3D Graph View
function ProfileTab({ userId, userName }: { userId: string; userName?: string | null }) {
  const [items, setItems] = useState<ProfileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState<string | null>(null);
  const [newValue, setNewValue] = useState("");
  const [newCompanyUrl, setNewCompanyUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "graph">("graph"); // Default to graph view
  const [editingItem, setEditingItem] = useState<ProfileItem | null>(null);

  useEffect(() => {
    fetchProfile();
  }, [userId]);

  const fetchProfile = async () => {
    try {
      const res = await fetch(`/api/user-profile?userId=${userId}`);
      const data = await res.json();
      setItems(data.items || []);
    } catch (e) {
      console.error("Failed to fetch profile:", e);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (itemId: number) => {
    if (!confirm("Delete this item?")) return;
    try {
      const res = await fetch(`/api/user-profile?id=${itemId}&userId=${userId}`, { method: "DELETE" });
      if (res.ok) {
        setItems(items.filter(i => i.id !== itemId));
      }
    } catch (e) {
      console.error("Failed to delete:", e);
    }
  };

  const addItem = async (type: string) => {
    if (!newValue.trim()) return;

    try {
      const metadata: Record<string, unknown> = { source: "dashboard" };
      if (type === "company" && newCompanyUrl) {
        metadata.company_url = newCompanyUrl.startsWith('http') ? newCompanyUrl : `https://${newCompanyUrl}`;
      }

      const res = await fetch("/api/user-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          itemType: type,
          value: newValue.trim(),
          metadata,
          confirmed: type === "company" ? true : false,
        }),
      });

      if (res.ok) {
        fetchProfile();
        setShowAddModal(null);
        setNewValue("");
        setNewCompanyUrl("");
        setUrlError("");
      }
    } catch (e) {
      console.error("Failed to add:", e);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-400">Loading profile...</div>;
  }

  // Group by type
  const grouped = items.reduce((acc, item) => {
    const type = item.item_type;
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  }, {} as Record<string, ProfileItem[]>);

  const typeLabels: Record<string, string> = {
    location: "📍 Location",
    role_preference: "🎯 Target Role",
    skill: "💡 Skills",
    company: "🏢 Companies",
  };

  const typeDescriptions: Record<string, string> = {
    location: "Where are you based?",
    role_preference: "What esports role are you targeting?",
    skill: "What skills do you have?",
    company: "Companies you've worked at",
  };

  const roleOptions = ["Player", "Coach", "Analyst", "Manager", "Producer", "Caster", "Content Creator", "Marketing", "Operations", "Developer"];
  const locationOptions = ["London", "Los Angeles", "Berlin", "Seoul", "Remote", "New York", "Shanghai", "Stockholm"];

  const typeColors: Record<string, string> = {
    location: "bg-green-900/50 text-green-300 border-green-800",
    role_preference: "bg-blue-900/50 text-blue-300 border-blue-800",
    skill: "bg-purple-900/50 text-purple-300 border-purple-800",
    company: "bg-orange-900/50 text-orange-300 border-orange-800",
  };

  // Handle edit from graph
  const handleGraphEdit = (item: ProfileItem) => {
    setEditingItem(item);
    setShowAddModal(item.item_type);
    setNewValue(item.value);
    if (item.metadata?.company_url) {
      setNewCompanyUrl(item.metadata.company_url as string);
    }
  };

  // Handle delete from graph
  const handleGraphDelete = async (item: ProfileItem) => {
    if (!confirm(`Delete "${item.value}"?`)) return;
    await deleteItem(item.id);
  };

  // Handle add from graph
  const handleGraphAdd = (type: string) => {
    setEditingItem(null);
    setShowAddModal(type);
    setNewValue("");
    setNewCompanyUrl("");
    setUrlError("");
  };

  // Update item (for edit mode)
  const updateItem = async (type: string) => {
    if (!newValue.trim() || !editingItem) return;

    try {
      // Delete old and create new (simpler than PATCH)
      await fetch(`/api/user-profile?id=${editingItem.id}&userId=${userId}`, { method: "DELETE" });

      const metadata: Record<string, unknown> = { source: "dashboard_edit" };
      if (type === "company" && newCompanyUrl) {
        metadata.company_url = newCompanyUrl.startsWith('http') ? newCompanyUrl : `https://${newCompanyUrl}`;
      }

      await fetch("/api/user-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          itemType: type,
          value: newValue.trim(),
          metadata,
          confirmed: type === "company" ? true : false,
        }),
      });

      fetchProfile();
      setShowAddModal(null);
      setNewValue("");
      setNewCompanyUrl("");
      setUrlError("");
      setEditingItem(null);
    } catch (e) {
      console.error("Failed to update:", e);
    }
  };

  return (
    <div className="p-6">
      {/* Header with View Toggle */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
            {userName?.[0] || "?"}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{userName || "User"}</h2>
            <p className="text-gray-400">{items.length} items in your profile</p>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => setViewMode("graph")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === "graph"
                ? "bg-gray-600 shadow text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            🌐 Graph View
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              viewMode === "list"
                ? "bg-gray-600 shadow text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            📋 List View
          </button>
        </div>
      </div>

      {/* Graph View */}
      {viewMode === "graph" && (
        <EditableGraph3D
          userId={userId}
          userName={userName || "You"}
          items={items}
          onEdit={handleGraphEdit}
          onDelete={handleGraphDelete}
          onAdd={handleGraphAdd}
          height={500}
        />
      )}

      {/* List View - Profile Sections */}
      {viewMode === "list" && (
      <div className="space-y-8">
        {Object.entries(typeLabels).map(([type, label]) => {
          const typeItems = grouped[type] || [];
          const isSingleValue = type === "location" || type === "role_preference";

          return (
            <div key={type} className="border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-white">{label}</h3>
                  <p className="text-sm text-gray-400">{typeDescriptions[type]}</p>
                </div>
                {/* Only show add button if multi-value OR no value exists */}
                {(!isSingleValue || typeItems.length === 0) && (
                  <button
                    onClick={() => {
                      setShowAddModal(type);
                      setNewValue("");
                      setNewCompanyUrl("");
                      setUrlError("");
                    }}
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add {type === "skill" ? "Skill" : type === "company" ? "Company" : ""}
                  </button>
                )}
              </div>

              {typeItems.length === 0 ? (
                <p className="text-gray-500 text-sm italic">Not set</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {typeItems.map((item) => (
                    <div
                      key={item.id}
                      className={`group flex items-center gap-2 px-3 py-2 rounded-lg border ${typeColors[type] || "bg-gray-700 text-gray-300 border-gray-600"}`}
                    >
                      <span className="font-medium">{item.value}</span>
                      {item.confirmed && (
                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                      {item.metadata && (item.metadata as Record<string, string>).company_url && (
                        <a
                          href={(item.metadata as Record<string, string>).company_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-200"
                          title="Visit website"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-opacity"
                        title="Delete"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-xl border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              {editingItem ? "Edit" : "Add"} {typeLabels[showAddModal]}
            </h3>

            {/* Value input - dropdown for location/role, text for others */}
            {showAddModal === "location" ? (
              <select
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              >
                <option value="">Select location...</option>
                {locationOptions.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            ) : showAddModal === "role_preference" ? (
              <select
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
              >
                <option value="">Select role...</option>
                {roleOptions.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder={showAddModal === "skill" ? "e.g., Game Analysis, Social Media, Casting" : "Company name"}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
              />
            )}

            {/* Company URL field */}
            {showAddModal === "company" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Company Website URL (optional)
                </label>
                <input
                  type="text"
                  value={newCompanyUrl}
                  onChange={(e) => {
                    setNewCompanyUrl(e.target.value);
                    setUrlError("");
                  }}
                  placeholder="e.g., fnatic.com or https://www.fnatic.com"
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-700 text-white placeholder-gray-400 ${
                    urlError ? "border-red-500" : "border-gray-600"
                  }`}
                />
                {urlError && (
                  <p className="mt-1 text-sm text-red-400">{urlError}</p>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowAddModal(null);
                  setNewValue("");
                  setNewCompanyUrl("");
                  setUrlError("");
                  setEditingItem(null);
                }}
                className="flex-1 px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => editingItem ? updateItem(showAddModal) : addItem(showAddModal)}
                disabled={!newValue.trim()}
                className="flex-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                {editingItem ? "Save Changes" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
