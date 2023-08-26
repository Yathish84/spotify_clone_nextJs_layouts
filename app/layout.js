import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify 🎧',
  description: 'Enjoy Music',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <NextuiProvider>
            <UserProvider>
              <Sidebar>
                {children}
              </Sidebar>
            </UserProvider>
          </NextuiProvider>
        </SupabaseProvider>
        </body>
    </html>
  )
}
