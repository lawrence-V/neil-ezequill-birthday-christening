import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Little Boss Birthday & Christening Celebration'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E0F2FE',
          backgroundImage: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 50%, #DDD6FE 100%)',
          fontFamily: 'system-ui',
        }}
      >
        {/* Background decorations */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50px',
            fontSize: '48px',
          }}
        >
          🎈
        </div>
        <div
          style={{
            position: 'absolute',
            top: '60px',
            right: '80px',
            fontSize: '40px',
          }}
        >
          🎉
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '80px',
            fontSize: '36px',
          }}
        >
          ⭐
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '60px',
            fontSize: '44px',
          }}
        >
          🎂
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '900px',
            padding: '40px',
          }}
        >
          {/* Baby icon */}
          <div
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '50%',
              width: '120px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
              border: '4px solid rgba(59, 130, 246, 0.3)',
            }}
          >
            <span style={{ fontSize: '64px' }}>👶</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #1E40AF 0%, #7C3AED 50%, #1E40AF 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: '0 0 20px 0',
              lineHeight: '1.1',
            }}
          >
            Little Boss
          </h1>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '36px',
              color: '#1E40AF',
              fontWeight: '600',
              marginBottom: '20px',
            }}
          >
            Birthday & Christening Celebration
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: '#374151',
              margin: '0',
              lineHeight: '1.4',
            }}
          >
            Join us as our little CEO turns one! 🎂✨
          </p>

          {/* Date info */}
          <div
            style={{
              marginTop: '30px',
              display: 'flex',
              gap: '40px',
              fontSize: '20px',
              color: '#1E40AF',
              fontWeight: '500',
            }}
          >
            <div>📅 Dec 15-16, 2024</div>
            <div>🎉 Birthday & Blessing</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
