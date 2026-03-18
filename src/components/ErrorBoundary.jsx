import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    console.error('RevisionFlow caught error:', error, info)
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          background: 'var(--bg, #0f0f0f)', color: 'var(--text-primary, #fff)',
          padding: '2rem', textAlign: 'center',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
          <h2 style={{ marginBottom: '0.5rem' }}>Something went wrong</h2>
          <p style={{ color: '#aaa', marginBottom: '1.5rem', maxWidth: 400 }}>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            onClick={() => { this.setState({ error: null }); window.location.reload() }}
            style={{
              background: '#6c63ff', color: 'white', border: 'none',
              borderRadius: 8, padding: '0.65rem 1.5rem', cursor: 'pointer',
              fontWeight: 700, fontSize: '0.95rem',
            }}
          >
            Reload app
          </button>
          <button
            onClick={() => this.setState({ error: null })}
            style={{
              marginTop: '0.75rem', background: 'transparent',
              color: '#aaa', border: 'none', cursor: 'pointer', fontSize: '0.85rem',
            }}
          >
            Try without reloading
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
