import { HeroText } from './HeroText'
import { PixelRoom } from './PixelRoom'

export function Hero() {
  return (
    <div
      className="flex flex-col items-center justify-center xl:flex-row"
      style={{
        minHeight: 'calc(100vh - 120px)',
        padding: '0 clamp(16px, 5vw, 80px)',
        gap: 'clamp(24px, 6vw, 80px)',
        maxWidth: 1400,
        margin: '0 auto',
        width: '100%',
      }}
    >
      <HeroText />
      <PixelRoom />
    </div>
  )
}
