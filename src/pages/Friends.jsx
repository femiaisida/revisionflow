// src/pages/Friends.jsx
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import {
  sendFriendRequest, acceptFriendRequest, declineFriendRequest,
  removeFriend, getFriendProfiles, getUserByUsername, searchUsersByName
} from '../utils/firestore'
import { LEVELS } from '../data/subjects'
import toast from 'react-hot-toast'
import { UserPlus, UserCheck, UserX, Users, Search } from 'lucide-react'

export default function Friends() {
  const { user, profile, refreshProfile } = useAuth()
  const [friends,  setFriends]  = useState([])
  const [requests, setRequests] = useState([])
  const [search,   setSearch]   = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [searching, setSearching] = useState(false)
  const [tab, setTab] = useState('friends')

  useEffect(() => {
    if (!profile) return
    if (profile.friends?.length)       getFriendProfiles(profile.friends).then(setFriends)
    if (profile.friendRequests?.length) getFriendProfiles(profile.friendRequests).then(setRequests)
  }, [profile])

  async function handleSearch(e) {
    e.preventDefault()
    const q = search.trim()
    if (!q) return
    setSearching(true)
    setSearchResults([])
    try {
      // Try username exact match first, then name search
      const byUsername = await getUserByUsername(q.toLowerCase())
      const byName     = await searchUsersByName(q)

      // Merge, deduplicate, exclude self
      const seen = new Set()
      const combined = [...(byUsername ? [byUsername] : []), ...byName]
        .filter(u => {
          if (u.id === user.uid) return false
          if (seen.has(u.id))   return false
          seen.add(u.id)
          return true
        })

      setSearchResults(combined)
      if (!combined.length) toast.error('No users found')
    } catch (err) {
      toast.error('Search failed: ' + err.message)
    } finally {
      setSearching(false)
    }
  }

  async function handleSendRequest(toUid) {
    await sendFriendRequest(user.uid, toUid)
    toast.success('Friend request sent!')
    setSearchResults([])
    setSearch('')
  }

  async function handleAccept(fromUid) {
    await acceptFriendRequest(user.uid, fromUid)
    await refreshProfile()
    setRequests(r => r.filter(u => u.id !== fromUid))
    toast.success('Friend added!')
  }

  async function handleDecline(fromUid) {
    await declineFriendRequest(user.uid, fromUid)
    setRequests(r => r.filter(u => u.id !== fromUid))
  }

  async function handleRemove(friendUid) {
    if (!confirm('Remove this friend?')) return
    await removeFriend(user.uid, friendUid)
    setFriends(f => f.filter(u => u.id !== friendUid))
    await refreshProfile()
  }

  const FriendCard = ({ f, actions }) => {
    const lvl = LEVELS[Math.min((f.level||1)-1, LEVELS.length-1)]
    return (
      <div className="card" style={{display:'flex',alignItems:'center',gap:12}}>
        <div style={{width:44,height:44,borderRadius:'50%',background:'linear-gradient(135deg,var(--purple-700),var(--purple-400))',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'1.1rem',flexShrink:0}}>
          {(f.displayName||'U')[0].toUpperCase()}
        </div>
        <div style={{flex:1,overflow:'hidden'}}>
          <div style={{fontWeight:600}}>{f.displayName}</div>
          <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>
            {f.username ? `@${f.username} · ` : ''}Level {f.level||1} · {lvl?.title} · 🔥 {f.streak||0}
          </div>
          <div style={{fontSize:'0.72rem',color:'var(--text-muted)'}}>{(f.xp||0).toLocaleString()} XP</div>
        </div>
        {actions}
      </div>
    )
  }

  const isAlreadyFriend   = (uid) => profile?.friends?.includes(uid)
  const hasIncomingRequest = (uid) => profile?.friendRequests?.includes(uid)
  const hasSentRequest     = (uid) => profile?.sentFriendRequests?.includes(uid)

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24,flexWrap:'wrap',gap:12}}>
        <h2>Friends</h2>
        <span className="badge badge-purple"><Users size={12}/> {friends.length} friends</span>
      </div>

      {/* Search */}
      <div className="card" style={{marginBottom:20}}>
        <h4 style={{marginBottom:4}}>Find a friend</h4>
        <p style={{fontSize:'0.82rem',marginBottom:12}}>Search by username or name</p>
        <form onSubmit={handleSearch} style={{display:'flex',gap:10,marginBottom:searchResults.length?12:0}}>
          <input className="input" value={search} onChange={e=>setSearch(e.target.value)}
            placeholder="Search by username or name…"/>
          <button className="btn btn-primary" type="submit" disabled={searching||!search.trim()}>
            {searching ? <div className="spinner" style={{width:16,height:16}}/> : <Search size={16}/>}
          </button>
        </form>

        {searchResults.length > 0 && (
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {searchResults.map(u => (
              <div key={u.id} style={{padding:'10px 12px',background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,flexWrap:'wrap'}}>
                <div>
                  <div style={{fontWeight:600}}>{u.displayName}</div>
                  <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>
                    {u.username?`@${u.username} · `:''}Level {u.level||1}
                  </div>
                </div>
                {isAlreadyFriend(u.id) ? (
                  <span className="badge badge-green"><UserCheck size={12}/> Friends</span>
                ) : hasSentRequest(u.id) ? (
                  <span className="badge badge-grey">Request sent</span>
                ) : hasIncomingRequest(u.id) ? (
                  <button className="btn btn-primary btn-sm" onClick={()=>handleAccept(u.id)}>Accept request</button>
                ) : (
                  <button className="btn btn-primary btn-sm" onClick={()=>handleSendRequest(u.id)}>
                    <UserPlus size={14}/> Add friend
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="tabs" style={{marginBottom:20}}>
        <button className={`tab${tab==='friends'?' active':''}`} onClick={()=>setTab('friends')}>
          Friends ({friends.length})
        </button>
        <button className={`tab${tab==='requests'?' active':''}`} onClick={()=>setTab('requests')}>
          Requests{requests.length>0&&<span className="badge badge-red" style={{marginLeft:4,padding:'1px 6px'}}>{requests.length}</span>}
        </button>
      </div>

      {tab==='friends' && (
        friends.length===0 ? (
          <div className="empty-state">
            <Users size={48} style={{opacity:0.3}}/>
            <h4>No friends yet</h4>
            <p>Search for friends by username or name above</p>
          </div>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {friends.map(f=>(
              <FriendCard key={f.id} f={f} actions={
                <button className="btn btn-ghost btn-sm" style={{color:'var(--danger)'}} onClick={()=>handleRemove(f.id)}>
                  <UserX size={15}/>
                </button>
              }/>
            ))}
          </div>
        )
      )}

      {tab==='requests' && (
        requests.length===0 ? (
          <div className="empty-state">
            <UserPlus size={48} style={{opacity:0.3}}/>
            <p>No pending friend requests</p>
          </div>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {requests.map(f=>(
              <FriendCard key={f.id} f={f} actions={
                <div style={{display:'flex',gap:6}}>
                  <button className="btn btn-primary btn-sm" onClick={()=>handleAccept(f.id)}>
                    <UserCheck size={14}/> Accept
                  </button>
                  <button className="btn btn-secondary btn-sm" onClick={()=>handleDecline(f.id)}>
                    <UserX size={14}/>
                  </button>
                </div>
              }/>
            ))}
          </div>
        )
      )}
    </div>
  )
}
