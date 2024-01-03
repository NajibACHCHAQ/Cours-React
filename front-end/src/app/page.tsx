import Header from '@/ui/components/header'
import { PartenairBar } from '@/ui/components/navigation/partenair-bar'
import Navigation from '@/ui/components/navigation/navigation'
import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button/button'
import { Typography } from '@/ui/design-system/typography/typography'
import { Section } from '@/ui/components/section'
import { ScrollingText } from '@/ui/components/scrolling-text'
import { TitreSite } from '@/ui/components/titre-site'
import { Presentation } from '@/ui/components/presentation/presentation'


export default function Home() {
  return (
    <>
      <Header/>
      <TitreSite/>
      <Navigation/>
      <Section>
        <div className="video-container">
          <iframe src="https://www.youtube.com/embed/7xIF9blpcGY" >
          </iframe>
        </div>
      </Section>
      <ScrollingText/>
      <Presentation/>
      <ScrollingText/>
      <PartenairBar/>

    </>
  )
}
