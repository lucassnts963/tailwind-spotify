import Image from "next/image";

export function PlayingDetails() {
  return (
    <div className='flex items-center gap-2'>
      <Image src='/album.jpg' className='w-full' width={48} height={48} alt='Capa do Album'  />
      <div className='flex flex-col'>
        <strong className='font-normal'>Fernandinho</strong>
        <span className='text-xs text-zinc-400'>Teus Sonhos</span>
      </div>
    </div>
  )
}