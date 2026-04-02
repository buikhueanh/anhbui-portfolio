import { HeroText } from './HeroText'
import { PixelRoom } from './PixelRoom'

export function Hero() {
  return (
    <div style={{
      display: 'flex',
      height: 'calc(100vh - 120px)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 60px',
      gap: 60,
      maxWidth: 1000,
      margin: '0 auto',
      width: '100%',
    }}>
      <HeroText />
      <PixelRoom />
    </div>
  )
}
