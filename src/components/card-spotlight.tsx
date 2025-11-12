'use client'

import { useEffect } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface CardSpotlightProps {
  title: string
  content: string
  imageSrc?: string | StaticImageData
  blobColor?: string
}

const CardSpotlightDemo = ({ title, content, imageSrc, blobColor = 'bg-orange-400' }: CardSpotlightProps) => {
  useEffect(() => {
    const all = document.querySelectorAll('.spotlight-card')

    const handleMouseMove = (ev: MouseEvent) => {
      all.forEach(e => {
        const blob = e.querySelector('.blob') as HTMLElement
        const fblob = e.querySelector('.fake-blob') as HTMLElement

        if (!blob || !fblob) return

        const rec = fblob.getBoundingClientRect()
        blob.style.opacity = '1'

        blob.animate(
          [
            {
              transform: `translate(${
                ev.clientX - rec.left - rec.width / 2
              }px, ${ev.clientY - rec.top - rec.height / 2}px)`
            }
          ],
          { duration: 300, fill: 'forwards' }
        )
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className='h-80 w-full'>
      <div className='spotlight-card group bg-border relative overflow-hidden rounded-xl p-px transition-all duration-300 ease-in-out h-full w-full'>
        <Card className='bg-[#202020] group-hover:bg-[#202020]/90 h-full w-full border-none transition-all duration-300 ease-in-out group-hover:backdrop-blur-[20px] flex flex-col'>
          {/* Image Section */}
          {imageSrc && (
          <div className="relative h-[65%] -mx-2">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain w-full h-full scale-125"
            />
          </div>
        )}

          {/* Title + Content at bottom-left */}
          <CardContent className="shrink-0 mt-auto p-4">
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-left text-lg">{title}</CardTitle>
            </CardHeader>
            <p className="text-left text-sm text-muted-foreground">{content}</p>
          </CardContent>
        </Card>

        {/* Blob */}
        <div className={`blob absolute start-0 top-0 h-20 w-20 rounded-full ${blobColor} opacity-0 blur-2xl transition-all duration-300 ease-in-out hidden md:block`} />
        <div className='fake-blob absolute start-0 top-0 h-20 w-20 rounded-full hidden md:block' />
      </div>
    </div>
  )
}

export default CardSpotlightDemo