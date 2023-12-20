"use client"
import Header from "@/ui/components/header";
import Navigation from "@/ui/components/navigation";
import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiAccountCircleFill, RiUser2Fill,RiArrowRightDoubleLine } from "react-icons/ri";

export default function About() {
    return (
      <>
        <Header/>
        <Seo title='ANCREATIVE' description=''></Seo>
        <Navigation/>

      <Typography variant="display"> Hello World</Typography>
      <div className=''>
        <Button  size='small' icon={{icon:RiArrowRightDoubleLine}} iconPosition="right" >Text</Button>
        <Button  size='small'>Boutton2</Button>
        <Button variant='secondary' size='small'>Boutton2</Button>
        <Button variant="disabled" disabled size='small'>Boutton2</Button>
      </div>
      <div className=''>
        <Button  size='medium'  >Text</Button>
        <Button  size='medium' >Boutton2</Button>
        <Button variant='secondary' size='medium'>Boutton2</Button>
        <Button variant="disabled" disabled size='medium'>Boutton2</Button>
      </div>
      <div className=''>
        <Button  size='large'  >Text</Button>
        <Button  size='large'>Boutton2</Button>
        <Button variant="ico" iconTheme="dark" size='small' icon={{icon:RiAccountCircleFill}}/>
        <Button variant="ico" iconTheme="light" size='medium' icon={{icon:RiAccountCircleFill}}/>
        <Button variant="ico" iconTheme="grey" size='large' icon={{icon:RiAccountCircleFill}}/>

        <Button variant='secondary' size='large'>Boutton2</Button>
        <Button variant="disabled" disabled size='large'>Boutton2</Button>
      </div>
      </>
    )
  }
  