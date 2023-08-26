"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import {FaPlay} from 'react-icons/fa'

export default function ListItem({image, name, href}) {
    const router = useRouter()
    const onClick = ()=>{
        //  add auth
        router.push(href)
    }
  return (
    <button
    onClick={onClick}
    className="
      relative 
      group 
      flex 
      w-max
      items-center 
      rounded-md 
      overflow-hidden 
      gap-x-4 
      bg-neutral-100/10 
      cursor-pointer 
      hover:bg-neutral-100/20 
      transition 
      pr-4
    "
  >
    <div className="relative min-h-[64px] min-w-[64px]">
      <Image
        className="object-cover"
        src={image}
        fill
        alt="Image"
      />
    </div>
    <p className="font-medium truncate py-5">
      {name}
    </p>
    <div 
      className="
        relative 
        transition 
        opacity-0 
        rounded-full 
        flex 
        items-center 
        justify-center 
        bg-green-500 
        p-4 
        drop-shadow-md 
        group-hover:opacity-100 
        hover:scale-110
      "
    >
      <FaPlay className="text-black" />
    </div>
  </button>
  )
}
