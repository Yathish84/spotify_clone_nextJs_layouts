"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import {RxCaretLeft , RxCaretRight} from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'
import Dialog from '../providers/ModalProvider'
import { Auth } from '@supabase/auth-ui-react'
import { useSupabaseClient , useSessionContext } from '@supabase/auth-helpers-react' 
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useUser } from '@/hooks/useUser'
import { FaUserAlt } from 'react-icons/fa'
import { Toaster, toast } from 'react-hot-toast'

export default function Header({className , children}) {
    const [isOpen , setIsOpen] = useState(false)
    const router  = useRouter()
    const supabaseClient = useSupabaseClient()
    const {session} = useSessionContext() 
    const {user} = useUser();
    const handleLogOut=async()=>{
        const {error} = await supabaseClient.auth.signOut();
        router.refresh()
        toast.error("woeking")
        if(error){
            toast.error(error.message)
            console.log(error)
        }
        // todo : shut down if any song playing
    }
    useEffect(()=>{
        if(session){
            router.refresh()
            setIsOpen(false)
        }
    },[session,router])
  return (
    <>
    <div 
    className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6 `,className)}>
       <div 
            className='w-full mb-4 flex items-center justify-between'
        >
            {/* large screen */}
            <div className='hidden md:flex gap-x-2 items-center'>
                <button 
                onClick={()=>router.back()}
                className=' rounded-full bg-black flex items-center justify-center hover:opacity-75 transition '>
                    <RxCaretLeft size={35} className='text-white'/>
                </button>
                <button 
                onClick={()=>router.forward()}
                className=' rounded-full bg-black flex items-center justify-center hover:opacity-75 transition '>
                    <RxCaretRight size={35} className='text-white'/>
                </button>
            </div>
            {/* mobile view */}
            <div className='flex md:hidden gap-x-2 items-center'>
                <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                    <HiHome size={20} className='text-black'/>
                </button>
                <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                    <BiSearch size={20} className='text-black'/>
                </button>
            </div>

            <div className='flex justify-between items-center gap-x-4'>
                {user ? (
                    <div className='flex gap-x-4 items-center'>
                       <Button
                            onClick={handleLogOut}
                            className='bg-white px-6 py-2'
                        >
                           LogOut
                        </Button>
                        <Button
                            onClick={()=>{router.push('/account')}}
                            className='bg-white'
                        >
                         <FaUserAlt />
                        </Button>
                    </div>
                ):(
                <>
                    <div>
                        <Button
                            className='bg-transparent text-neutral-300 font-medium'
                        >
                            Sign up
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={() =>{setIsOpen(true)}}
                            className='bg-white px-6 py-2'
                        >
                        Log in
                        </Button>
                    </div>
                </>
                )}
            </div>
            
       </div>
       {children}
    </div>
    <Dialog isOpen={isOpen} title="Welcome" onClose={()=>{setIsOpen(false)}}>
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
    <div>
    <Toaster 
        toastOptions={
            {style:{
                background:'#333', 
                color:'#fff'
            }
        }}
    />
    </div>
    
    </>
  )
}
