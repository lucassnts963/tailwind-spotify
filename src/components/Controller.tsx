import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";

export function Controller() {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center gap-6'>
        <Shuffle size={20} className='text-zinc-400'/>
        <SkipBack size={20} className='text-zinc-400'/>

        <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
          <Play/>
        </button>

        <SkipForward size={20} className='text-zinc-400'/>
        <Repeat size={20} className='text-zinc-400'/>
      
      </div>
      <div className='flex items-center gap-2'>
        <span className='text-xs text-zinc-400'>8:31</span>
        <div className='h-1 rounded-full w-96 bg-zinc-600'>
          <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
        </div>
        <span className='text-xs text-zinc-400'>2:25</span>
      </div>
    </div>
  )
}