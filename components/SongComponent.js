"use client"
import React from 'react'
import SongItem from './SongItem'

export default function SongComponent({songs}) {
    console.log(songs)
    if(songs.length === 0){
        return (<div className='mt-4 text-neutral-400'>
            No Songs Available
        </div>)
    }
  return (
   <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:gris-cols-5 2xl:grid-cols-8 gap-4 mt-4'>
    {songs?.map((song)=>(
        <SongItem key={song.id} onClick={()=>{}} data={song} />
    ))}
   </div>
  )
}
