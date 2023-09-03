"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import {RxCaretLeft , RxCaretRight} from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'


import { useUser } from '@/hooks/useUser'
import { FaUserAlt } from 'react-icons/fa'
import { Toaster, toast } from 'react-hot-toast'
import AuthModel from '@/components/AuthModel'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import useAuthModal from '@/hooks/useAuthModel'

export default function Header({className , children}) {
    const [isOpen , setIsOpen] = useState(false)
    const router  = useRouter()
    const supabaseClient = useSupabaseClient()
    const handleLogOut=async()=>{
        const {error} = await supabaseClient.auth.signOut();
        router.refresh()
        toast.success('LogOut Success!')
        if(error){
            toast.error(error.message)
            console.log(error)
        }
        // todo : shut down if any song playing
    }
    const {user} = useUser();
    const authTrigger = useAuthModal()
    
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
                            onClick={() =>{authTrigger.onOpen()}}
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
        {/* <AuthModel isOpen={isOpen} setIsOpen={setIsOpen} /> */}
   
   
    
    </>
  )
}
