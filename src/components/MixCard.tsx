import Image from "next/image";

export function MixCard() {
  return (
    <a href='' className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10' >
      <Image src='/album.jpg' className='w-full' width={120} height={120} alt='Capa do Album'  />
      <strong className='font-semibold'>Daily Mix 1</strong>
      <span className='text-xs text-zinc-500'>Listen now, this mix was made for you!</span>
    </a>
  )
}