import getSongs from '@/actions/getSongs'
import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import SongComponent from '@/components/SongComponent'
import Image from 'next/image'

export const revalidate = 0

export default async function Home() {
  const songs = await getSongs()
  console.log(songs)
  return (
    <div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto '>
      {/* Header */}
      <Header>
        <div className='mb-2'>
          <h1 className='text-white text-3xl font-semibold'>Welcome Back</h1>
          <div className='grid 
          grid-col-1 
          sm:grid-col-2 
          xl:grid-col-3
          2xl:grid-col-4
          gap-3 mt-4'
          >
            <ListItem image='/images/liked.png' name='Liked Songs' href='liked'/>
          </div>
        </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
        <div className='flex justify-between items-center '>
          <h1 className='text-white text-2xl font-semibold'>
            Newest Songs
          </h1>
          
        </div>
        <SongComponent songs={songs} />
      </div>
    </div>
  )
}
