import { Metadata } from "next"

export const metadata = {
  title: {
    absolute:"",
    default:"Next.js by Najib",
    template:"ANCreative %s "
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body  style={{
            backgroundColor:"white",
            padding:"0px",
            margin:"0px"
          }}>   
        <header  
          style={{
            backgroundColor:"lightblue",
            padding:"1rem",
          }}>     
          <p>header</p>   
        </header>
        
        {children}

        <footer  
          style={{
            backgroundColor:"lightblue",
            padding:"1rem",
          }}>     
          <p>footer</p>   
        </footer>
      </body>
      
    </html>
  )
}
