import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import { UIProvider } from '@/providers/UIProvider'
import ToastProvider from '@/providers/ToastProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify 🎧',
  description: 'Enjoy Music',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark h-full w-full'>
      <body className={font.className}>
          <SupabaseProvider>
              <UserProvider>
                <UIProvider   themeProps={{ defaultTheme: "dark" }}>
            {/* <ToastProvider> */}
                  
                    <Sidebar>
                      {children}
                    </Sidebar>
                 
              {/* </ToastProvider> */}
                </UIProvider>
              </UserProvider>
          </SupabaseProvider>
        </body>
    </html>
  )
}
