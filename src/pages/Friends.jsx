// src/pages/Friends.jsx
import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { sendFriendRequest, acceptFriendRequest, declineFriendRequest, removeFriend, getFriendProfiles, getUserByUsername } from '../utils/firestore'
import { LEVELS } from '../data/subjects'
import toast from 'react-hot-toast'
import { UserPlus, UserCheck, UserX, Users, Search } from 'lucide-react'

export default function Friends() {
  const { user, profile, refreshProfile } = useAuth()
  const [friends, setFriends] = useState([])
  const [requests, setRequests] = useState([])
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const [searching, setSearching] = useState(false)
  const [tab, setTab] = useState('friends')

  useEffect(() => {
    if (!profile) return
    if (profile.friends?.length) getFriendProfiles(profile.friends).then(setFriends)
    if (profile.friendRequests?.length) getFriendProfiles(profile.friendRequests).then(setRequests)
  }, [profile])

  async function handleSearch(e) {
    e.preventDefault()
    if (!search.trim()) return
    setSearching(true)
    const res = await getUserByUsername(search.trim().toLowerCase())
    setSearchResult(res || null)
    if (!res) toast.error('User not found')
    setSearching(false)
  }

  async function handleSendRequest(toUid) {
    await sendFriendRequest(user.uid, toUid)
    toast.success('Friend request sent!')
    setSearchResult(null)
    setSearch('')
  }

  async function handleAccept(fromUid) {
    await acceptFriendRequest(user.uid, fromUid)
    await refreshProfile()
    setRequests(r=>r.filter(u=>u.id!==fromUid))
    toast.success('Friend added!')
  }

  async function handleDecline(fromUid) {
    await declineFriendRequest(user.uid, fromUid)
    setRequests(r=>r.filter(u=>u.id!==fromUid))
  }

  async function handleRemove(friendUid) {
    if (!confirm('Remove this friend?')) return
    await removeFriend(user.uid, friendUid)
    setFriends(f=>f.filter(u=>u.id!==friendUid))
    await refreshProfile()
  }

  const FriendCard = ({f, actions}) => {
    const lvl = LEVELS[Math.min((f.level||1)-1,LEVELS.length-1)]
    return (
      <div className="card" style={{display:'flex',alignItems:'center',gap:12}}>
        <div style={{width:44,height:44,borderRadius:'50%',background:'linear-gradient(135deg,var(--purple-700),var(--purple-400))',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:'1.1rem',flexShrink:0}}>
          {(f.displayName||'U')[0].toUpperCase()}
        </div>
        <div style={{flex:1,overflow:'hidden'}}>
          <div style={{fontWeight:600}}>{f.displayName}</div>
          <div style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>Level {f.level||1} · {lvl?.title} · 🔥 {f.streak||0} streak</div>
          <div style={{fontSize:'0.75rem',color:'var(--text-muted)'}}>{(f.xp||0).toLocaleString()} XP</div>
        </div>
        {actions}
      </div>
    )
  }

  return (
    <div className="fade-in">
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24}}>
        <h2>Friends</h2>
        <span className="badge badge-purple"><Users size={12}/> {friends.length} friends</span>
      </div>

      {/* Search */}
      <div className="card" style={{marginBottom:20}}>
        <h4 style={{marginBottom:12}}>Find a friend</h4>
        <form onSubmit={handleSearch} style={{display:'flex',gap:10}}>
          <input className="input" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by username…"/>
          <button className="btn btn-primary" type="submit" disabled={searching}><Search size={16}/></button>
        </form>
        {searchResult && (
          <div style={{marginTop:12,padding:12,background:'var(--bg-surface)',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div>
              <div style={{fontWeight:600}}>{searchResult.displayName}</div>
              <div style={{fontSize:'0.78rem',color:'var(--text-muted)'}}>@{searchResult.username||searchResult.id} · Level {searchResult.level||1}</div>
            </div>
            <button className="btn btn-primary btn-sm" onClick={()=>handleSendRequest(searchResult.id)} disabled={profile?.friends?.includes(searchResult.id)}>
              {profile?.friends?.includes(searchResult.id)?'Already friends':<><UserPlus size={14}/> Add friend</>}
            </button>
          </div>
        )}
      </div>

      <div className="tabs" style={{marginBottom:20}}>
        <button className={`tab${tab==='friends'?' active':''}`} onClick={()=>setTab('friends')}>Friends ({friends.length})</button>
        <button className={`tab${tab==='requests'?' active':''}`} onClick={()=>setTab('requests')}>
          Requests {requests.length>0&&<span className="badge badge-red" style={{marginLeft:4,padding:'1px 6px'}}>{requests.length}</span>}
        </button>
      </div>

      {tab==='friends' && (
        friends.length===0 ? (
          <div className="empty-state"><Users size={48} style={{opacity:0.3}}/><h4>No friends yet</h4><p>Search for friends by username to add them</p></div>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {friends.map(f=>(
              <FriendCard key={f.id} f={f} actions={
                <button className="btn btn-ghost btn-sm" style={{color:'var(--danger)'}} onClick={()=>handleRemove(f.id)}><UserX size={15}/></button>
              }/>
            ))}
          </div>
        )
      )}

      {tab==='requests' && (
        requests.length===0 ? (
          <div className="empty-state"><UserPlus size={48} style={{opacity:0.3}}/><p>No pending friend requests</p></div>
        ) : (
          <div style={{display:'flex',flexDirection:'column',gap:10}}>
            {requests.map(f=>(
              <FriendCard key={f.id} f={f} actions={
                <div style={{display:'flex',gap:6}}>
                  <button className="btn btn-primary btn-sm" onClick={()=>handleAccept(f.id)}><UserCheck size={14}/> Accept</button>
                  <button className="btn btn-secondary btn-sm" onClick={()=>handleDecline(f.id)}><UserX size={14}/></button>
                </div>
              }/>
            ))}
          </div>
        )
      )}
    </div>
  )
}
