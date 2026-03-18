// src/context/PriorityContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { collection, getDocs, doc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './AuthContext'

const PriorityContext = createContext(null)

export function PriorityProvider({ children }) {
  const { user } = useAuth()
  const [priorities, setPriorities] = useState([]) // [{ topicId, subjectId, topicName, rating, order }]
  const [loading, setLoading] = useState(false)

  const load = useCallback(async () => {
    if (!user) return
    setLoading(true)
    try {
      const snap = await getDocs(collection(db, 'users', user.uid, 'priorities'))
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      data.sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
      setPriorities(data)
    } catch (e) {
      console.error('Priority load error:', e)
    }
    setLoading(false)
  }, [user])

  useEffect(() => { load() }, [load])

  const setPriority = useCallback(async (topicId, subjectId, topicName, rating) => {
    if (!user) return
    const ref = doc(db, 'users', user.uid, 'priorities', topicId)
    const existing = priorities.find(p => p.id === topicId)
    const data = {
      topicId, subjectId, topicName,
      rating: rating ?? existing?.rating ?? 3,
      order: existing?.order ?? priorities.length,
      updatedAt: serverTimestamp(),
    }
    await setDoc(ref, data, { merge: true })
    setPriorities(prev => {
      const filtered = prev.filter(p => p.id !== topicId)
      return [...filtered, { id: topicId, ...data }].sort((a,b) => (a.order??999)-(b.order??999))
    })
  }, [user, priorities])

  const reorder = useCallback(async (newOrder) => {
    if (!user) return
    setPriorities(newOrder)
    for (let i = 0; i < newOrder.length; i++) {
      const ref = doc(db, 'users', user.uid, 'priorities', newOrder[i].id)
      await setDoc(ref, { order: i }, { merge: true })
    }
  }, [user])

  const getPriority = useCallback((topicId) => {
    return priorities.find(p => p.id === topicId) || null
  }, [priorities])

  // Get top N priorities for AI context
  const getTopPriorities = useCallback((n = 10) => {
    return priorities
      .filter(p => p.rating >= 4)
      .sort((a, b) => (b.rating - a.rating) || (a.order - b.order))
      .slice(0, n)
  }, [priorities])

  return (
    <PriorityContext.Provider value={{ priorities, loading, setPriority, reorder, getPriority, getTopPriorities, reload: load }}>
      {children}
    </PriorityContext.Provider>
  )
}

export function usePriority() {
  return useContext(PriorityContext)
}
