"use client"
import React from 'react'

export default function SongComponent({songs}) {
    console.log(songs)
    if(songs.length === 0){
        return (<div className='mt-4 text-neutral-400'>
            No Songs Available
        </div>)
    }
  return (
   <div>
    {songs?.map((song)=>{return(
        <>{song.title}</>
    )})}
   </div>
  )
}
