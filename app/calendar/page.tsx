
import React from 'react'

export default function ComingSoon() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0,
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      color: '#f8fafc',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        letterSpacing: '0.05em',
        padding: '1.5rem 2.5rem',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
        Page Coming Soon
      </h1>
    </div>
  )
}