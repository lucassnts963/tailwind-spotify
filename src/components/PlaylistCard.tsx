import { Play } from "lucide-react";
import Image from "next/image";

export function PlaylistCard() {
  return (
    <a href='' className='bg-white/10 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
      <Image src='/album.jpg' width={104} height={104} alt='Capa do Album'  />
      <strong>Playlist name</strong>
      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play/>
      </button>
    </a>
  )
}