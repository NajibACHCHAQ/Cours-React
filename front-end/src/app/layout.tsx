import { Inter } from 'next/font/google'

import './globals.css'
import '../styles/styles-button.css'
import '../styles/styles-header.css'
import '../styles/styles-navigation.css'
import '../styles/style-quiz.css'
import '../styles/typography.css'




const inter = Inter({ subsets: ['latin'] })




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
    <head>
    <script async src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" href="../assets/boatgreta2.png" type="image/png"/>
</head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
