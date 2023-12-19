import Header from "@/ui/components/header";
import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

export default function About() {
    return (
      <>
        <Header/>
        <Seo title='ANCREATIVE' description=''></Seo>
      <Typography components="h1" variant="display">
       Brigitte 
      </Typography>
      <div className='entete'>
        <Button  size='small'  >Text</Button>
        <Button  size='small'>Boutton2</Button>
        <Button variant='secondary' size='small'>Boutton2</Button>
        <Button variant="disabled" disabled size='small'>Boutton2</Button>
      </div>
      <div className='entete'>
        <Button  size='medium'  >Text</Button>
        <Button  size='medium'>Boutton2</Button>
        <Button variant='secondary' size='medium'>Boutton2</Button>
        <Button variant="disabled" disabled size='medium'>Boutton2</Button>
      </div>
      <div className='entete'>
        <Button  size='large'  >Text</Button>
        <Button  size='large'>Boutton2</Button>
        <Button variant='secondary' size='large'>Boutton2</Button>
        <Button variant="disabled" disabled size='large'>Boutton2</Button>
      </div>
      </>
    )
  }
  