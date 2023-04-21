import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Controller } from '@/components/Controller'
import { MixCard } from '@/components/MixCard'
import { OthersControllers } from '@/components/OtherControllers'
import { PlayingDetails } from '@/components/PlayingDetails'
import { PlaylistCard } from '@/components/PlaylistCard'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='text-3xl font-semibold mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
            <PlaylistCard />
          </div>

          <h2 className='text-2xl font-semibold mt-10'>Made for Lucas Santos</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <MixCard/>
            <MixCard/>
            <MixCard/>
            <MixCard/>
            <MixCard/>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-3 flex items-center justify-between">
        <PlayingDetails/>
        <Controller/>
        <OthersControllers/>
      </footer>
    </div>
  )
}
