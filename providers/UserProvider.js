"use client"
import { MyUserContextProvider } from '@/hooks/useUser'
import React from 'react'

export default function UserProvider({children}) {
  return (
   <MyUserContextProvider>
        {children}
   </MyUserContextProvider>
  )
}
