import React from 'react'
import { ModeToggle } from '@/components/toggle-modal'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <header className='flex justify-between items-center py-[1rem] lg:px-[2rem] md:px-[2rem] px-[1rem] fixed top-0 w-full'>
          <Link href="/">
            <Image width={226} height={204} className='lg:w-[3rem] md:w-[2rem] w-[2rem]' src="/Modern_Forest_Tree.png" alt="Logo" />
          </Link>
          <ModeToggle/>
        </header>
    </div>
  )
}
