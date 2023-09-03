"use client"
import Dialog from '@/components/DialogComponent'
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import { Auth } from '@supabase/auth-ui-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import useAuthModal from '../hooks/useAuthModel'
export default function AuthModel() {
    const {session} = useSessionContext() 
    const router  = useRouter()
    const supabaseClient = useSupabaseClient()
    const authTrigger = useAuthModal()
    useEffect(()=>{
        if(session){
            router.refresh()
            authTrigger.onClose()
        }
    },[session,router])
  return (
    <Dialog isOpen={authTrigger?.isOpen} title="Welcome back" desc='Login to your account.' onClose={()=>{authTrigger.onClose()}}>
    <Auth 
        theme='dark'
        supabaseClient={supabaseClient}
        providers={['github','google']}
        appearance={{ 
            theme: ThemeSupa, 
            variables:{
                default:{
                    colors:{
                        brand:'#404040',
                        brandAccent:'#22c55e'
                    }
                }}
            }}
        
    />
</Dialog>
  )
}
