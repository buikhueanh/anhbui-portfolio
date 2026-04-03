import { HeroText } from './HeroText'
import { PixelRoom } from './PixelRoom'

export function Hero() {
  return (
    <div style={{
      display: 'flex',
      height: 'calc(100vh - 120px)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 clamp(24px, 5vw, 80px)',
      gap: 'clamp(32px, 5vw, 80px)',
      maxWidth: 1400,
      margin: '0 auto',
      width: '100%',
    }}>
      <HeroText />
      <PixelRoom />
    </div>
  )
}
