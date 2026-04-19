import { cn } from '@/lib/utils'
import { LucideBookmark, LucideGitPullRequestCreateArrow } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function PortfolioIndex() {
  return (
    <div className={cn('py-10')}>
      <div className={cn('grid grid-cols-6 gap-4')}>
        <div className={cn('relative aspect-square  col-span-2 ')}>

          <Image src='/images/profile_01.png ' className={cn('relative rounded-2xl')} fill alt='png' />
        </div>
        <div dir='rtl' className={cn('col-span-4 flex flex-col gap-10')}>

          <h1 className={cn('text-9xl font-bold ')}>مهدی  ذبیحی </h1>
          <h3 className={cn('text-5xl text-purple-400 font-semibold')}>برنامه نویس  فرانت  اند  </h3>

        </div>


      </div>
      <hr className={cn('my-5  ')} />
      {/* مهارت های کلیدی  */}
      <div className='flex  items-center justify-center'>

        <h2 className={cn('text-6xl ')}>مهارت های کلیدی</h2>
        <LucideBookmark className='size-16'/>
      </div>

      {/* skill cart items */}
      
    </div>
  )
}
