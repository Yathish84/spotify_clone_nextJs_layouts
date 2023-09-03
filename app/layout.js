import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import { UIProvider } from '@/providers/UIProvider'
import ToastProvider from '@/providers/ToastProvider'
import ModelProvider from '@/providers/ModelProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify 🎧',
  description: 'Enjoy Music',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark h-full w-full'>
      <body className={font.className}>
      <ToastProvider /> 
          <SupabaseProvider>
              <UserProvider>
              <ModelProvider />
                <UIProvider   themeProps={{ defaultTheme: "dark" }}>
               {/* ToastProvider is added here */}
             
                
                    <Sidebar>
                      {children}
                    </Sidebar>
                 
             
                </UIProvider>
              </UserProvider>
          </SupabaseProvider>
        </body>
    </html>
  )
}
