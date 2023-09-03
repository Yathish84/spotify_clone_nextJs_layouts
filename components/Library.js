import React, { useState } from 'react'
import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import { useUser } from '@/hooks/useUser'
import useAuthModal from '@/hooks/useAuthModel'
import useUploadModalTrigger from '@/hooks/useUploadModalTrigger'
export default function Library() {
  const authTrigger = useAuthModal()
  const {user} = useUser()
  const uploadTrigger = useUploadModalTrigger()
  const handleClick = () =>{
    if(!user){
     return authTrigger.onOpen()
    }
    return uploadTrigger.onOpen()
  }

  return (
    <div className='flex flex-col h-full'>
        {/* your library */}
        <div className='flex items-start justify-between px-5 pt-4 w-full'>
            <div className=' inline-flex items-center gap-x-2 w-full'>
                <TbPlaylist 
                    className='text-neutral-400' size={26} 
                />
                <p className='text-neutral-400 font-medium text-md'
                >Your Library</p>
            </div>
                <AiOutlinePlus 
                    onClick={handleClick}
                    className='text-neutral-400 cursor-pointer hover:text-white transition' 
                    size={20}
                />
                
    
        </div>
        <div className='flex flex-col gap-y-2 mt-4 px-3'>
          <p>List of items!!</p>
          
        </div>
    </div>
  )
}
