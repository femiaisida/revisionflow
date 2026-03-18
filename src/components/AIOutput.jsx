// src/components/AIOutput.jsx
// Wraps all AI outputs with: markdown rendering, summarise button, collapse, copy
import { useState, useRef } from 'react'

// Simple markdown renderer: **bold**, *italic*, ## headings, - bullets, numbered lists
function renderMarkdown(text) {
  if (!text) return null
  const lines = text.split('\n')
  const elements = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Heading ##
    if (line.startsWith('## ')) {
      elements.push(<h3 key={i} style={{ color: 'var(--text-primary)', margin: '0.75rem 0 0.35rem', fontSize: '1rem', fontWeight: 700 }}>
        {inlineFormat(line.slice(3))}
      </h3>)
    } else if (line.startsWith('# ')) {
      elements.push(<h2 key={i} style={{ color: 'var(--text-primary)', margin: '0.75rem 0 0.35rem', fontSize: '1.1rem', fontWeight: 700 }}>
        {inlineFormat(line.slice(2))}
      </h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h4 key={i} style={{ color: 'var(--text-primary)', margin: '0.5rem 0 0.25rem', fontSize: '0.95rem', fontWeight: 700 }}>
        {inlineFormat(line.slice(4))}
      </h4>)
    // Bullet list
    } else if (line.startsWith('- ') || line.startsWith('• ')) {
      const items = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('• '))) {
        items.push(<li key={i} style={{ marginBottom: '0.2rem' }}>{inlineFormat(lines[i].slice(2))}</li>)
        i++
      }
      elements.push(<ul key={`ul-${i}`} style={{ margin: '0.35rem 0', paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>{items}</ul>)
      continue
    // Numbered list
    } else if (/^\d+\.\s/.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(<li key={i} style={{ marginBottom: '0.2rem' }}>{inlineFormat(lines[i].replace(/^\d+\.\s/, ''))}</li>)
        i++
      }
      elements.push(<ol key={`ol-${i}`} style={{ margin: '0.35rem 0', paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>{items}</ol>)
      continue
    // Empty line
    } else if (line.trim() === '') {
      elements.push(<br key={i} />)
    // Paragraph
    } else {
      elements.push(<p key={i} style={{ margin: '0.25rem 0', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
        {inlineFormat(line)}
      </p>)
    }
    i++
  }
  return elements
}

function inlineFormat(text) {
  // Split on **bold**, *italic*, `code`
  const parts = []
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g
  let last = 0
  let match
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    if (match[0].startsWith('**')) parts.push(<strong key={match.index} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{match[2]}</strong>)
    else if (match[0].startsWith('*')) parts.push(<em key={match.index}>{match[3]}</em>)
    else parts.push(<code key={match.index} style={{ background: 'var(--surface)', padding: '0 4px', borderRadius: 3, fontSize: '0.85em', fontFamily: 'monospace' }}>{match[4]}</code>)
    last = match.index + match[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts.length ? parts : text
}

export default function AIOutput({ text, onSummarise, loading = false, label = 'AI Response' }) {
  const [collapsed, setCollapsed] = useState(false)
  const [summary, setSummary] = useState('')
  const [summaryLoading, setSummaryLoading] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [copied, setCopied] = useState(false)

  async function handleSummarise() {
    if (summary) { setShowSummary(s => !s); return }
    setSummaryLoading(true)
    setShowSummary(true)
    try {
      const result = await onSummarise(text)
      setSummary(result)
    } catch (e) {
      setSummary('Could not generate summary.')
    }
    setSummaryLoading(false)
  }

  function handleCopy() {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!text && !loading) return null

  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 12, overflow: 'hidden',
    }}>
      {/* Header bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.6rem 0.9rem',
        background: 'var(--bg)', borderBottom: '1px solid var(--border)',
      }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', flex: 1, fontWeight: 600 }}>
          ✨ {label}
        </span>
        {text && !loading && (
          <>
            {onSummarise && (
              <button onClick={handleSummarise} style={iconBtn(showSummary ? 'var(--accent)' : undefined)} title="Summarise">
                📋 {showSummary ? 'Hide Summary' : 'Summarise'}
              </button>
            )}
            <button onClick={handleCopy} style={iconBtn()} title="Copy">
              {copied ? '✓ Copied' : '📋 Copy'}
            </button>
            <button onClick={() => setCollapsed(c => !c)} style={iconBtn()} title={collapsed ? 'Expand' : 'Minimise'}>
              {collapsed ? '⬇ Expand' : '⬆ Minimise'}
            </button>
          </>
        )}
      </div>

      {/* Summary panel */}
      {showSummary && (
        <div style={{
          padding: '0.75rem 1rem',
          background: 'var(--accent)10',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.4rem' }}>
            📋 Summary
          </div>
          {summaryLoading
            ? <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Summarising…</div>
            : <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                {renderMarkdown(summary)}
              </div>
          }
        </div>
      )}

      {/* Main content */}
      {!collapsed && (
        <div style={{ padding: '0.9rem 1rem' }}>
          {loading
            ? <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <span style={{ animation: 'pulse 1.5s infinite' }}>✨ Generating…</span>
              </div>
            : <div style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                {renderMarkdown(text)}
              </div>
          }
        </div>
      )}
    </div>
  )
}

function iconBtn(bg) {
  return {
    background: bg || 'transparent',
    color: bg ? 'white' : 'var(--text-muted)',
    border: bg ? 'none' : '1px solid var(--border)',
    borderRadius: 6,
    padding: '0.25rem 0.6rem',
    cursor: 'pointer',
    fontSize: '0.75rem',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  }
}
