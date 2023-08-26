import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'


// icon : Icon aliasing or remapping
export default function SidebarItem({icon : Icon, label, active,href}) {
  return (
  
    <Link 
        href={href} 
        className={
            twMerge(`flex flex-row h-auto w-full items-center gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1 ` ,active && 'text-white')}
        >
            <Icon size={26}/>
            <p className='truncate w-full'>{label}</p>

    </Link>
  
  )
}
