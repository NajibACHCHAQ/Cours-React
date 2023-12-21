import Header from '@/ui/components/header'
import { PartenairBar } from '@/ui/components/navigation/partenair-bar'
import Navigation from '@/ui/components/navigation/navigation'
import { Seo } from '@/ui/components/seo'
import { Button } from '@/ui/design-system/button/button'
import { Typography } from '@/ui/design-system/typography/typography'
import { Section } from '@/ui/components/section'


export default function Home() {
  return (
    <>
      <Header/>
      <Navigation/>
      <Section><div className="video-container"><iframe src="https://www.youtube.com/embed/7xIF9blpcGY" ></iframe></div>
</Section>
      <PartenairBar/>
    </>
  )
}
