import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>
          <nav className='space-y-5 mt-6'>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <HomeIcon/>
              Home
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <Search/>
              Search
            </a>
            <a href="" className="flex items-center gap-2 text-sm font-semibold text-zinc-100">
              <Library/>
              Library
            </a>
          </nav>

          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brazil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Summer</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Week Mix</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>The Best One</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Come with me</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>I&apos;m love with God</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>My Niver</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Come on</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Night</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Day One</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Last Day</a>
          </nav>
        </aside>
  )
}