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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'left',
            maxWidth: '1100px',
            padding: '40px',
            gap: '60px',
          }}
        >
          {/* Baby photo */}
          <div
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '20px',
              width: '300px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '6px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
          >
            {/* Note: In a real implementation, you would use the actual image */}
            {/* For now, we'll use a placeholder that represents your image */}
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #BFDBFE 0%, #DDD6FE 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '14px',
              }}
            >
              <span style={{ fontSize: '120px' }}>👶</span>
            </div>
          </div>
          
          {/* Text content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              maxWidth: '500px',
            }}
          >

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
              flexDirection: 'column',
              gap: '10px',
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
      </div>
    ),
    {
      ...size,
    }
  )
}
