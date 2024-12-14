'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import type SwiperType from 'swiper'
import { useEffect, useState } from 'react'
import { Pagination } from 'swiper/modules'
import { cn } from '@/lib/utils'

interface ImageSliderProps {
  urls: string[]
}

const ImageSlider = ({ urls }: ImageSliderProps) => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeIndex === (urls.length ?? 0) - 1,
  })

  useEffect(() => {
    swiper?.on('slideChange', ({ activeIndex }) => {
      setActiveIndex(activeIndex)
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (urls.length ?? 0) - 1,
      })
    })
  }, [swiper, urls])

  return (
    <div className='group relative bg-zinc-100 aspect-square overflow-hidden rounded-xl'>
      <div className='absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition'>
        <button
          onClick={(e) => {
            e.preventDefault()
            swiper?.slidePrev()
          }}
          className={cn(
            'absolute left-3 top-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full border-2 border-zinc-200 bg-white/70 text-zinc-700 transition hover:bg-white hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-50',
            {
              'hidden opacity-0': slideConfig.isBeginning,
              'opacity-100': !slideConfig.isBeginning,
            }
          )}
          aria-label='previous image'>
          <svg
            className='h-4 w-4 -translate-x-0.5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </button>

        <button
          onClick={(e) => {
            e.preventDefault()
            swiper?.slideNext()
          }}
          className={cn(
            'absolute right-3 top-1/2 z-50 flex h-11 w-11 items-center justify-center rounded-full border-2 border-zinc-200 bg-white/70 text-zinc-700 transition hover:bg-white hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-50',
            {
              'hidden opacity-0': slideConfig.isEnd,
              'opacity-100': !slideConfig.isEnd,
            }
          )}
          aria-label='next image'>
          <svg
            className='h-4 w-4 translate-x-0.5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </button>
      </div>

      <Swiper
        pagination={{
          renderBullet: (_, className) => {
            return `<span class="rounded-full transition ${className}"></span>`
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        modules={[Pagination]}
        slidesPerView={1}
        className='h-full w-full'>
        {urls.map((url, i) => (
          <SwiperSlide key={i} className='-z-10 relative h-full w-full'>
            <Image
              fill
              loading='eager'
              className='-z-10 h-full w-full object-cover object-center'
              src={url}
              alt='Product image'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider