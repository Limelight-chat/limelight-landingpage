'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface FlipTextProps {
  words: string[]
  className?: string
  interval?: number
  onWordChange?: (word: string, index: number) => void
  isPaused?: boolean
}

export function FlipText({ words, className = '', interval = 2500, onWordChange, isPaused = false }: FlipTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      const nextIndex = (index + 1) % words.length
      setIndex(nextIndex)
      onWordChange?.(words[nextIndex], nextIndex)
    }, interval)
    return () => clearInterval(timer)
  }, [words, interval, isPaused, index, onWordChange])

  return (
    <span className="relative inline-flex flex-col h-[1.1em] overflow-hidden align-baseline translate-y-[0.05em]">
      {/* Invisible template word to lock width to the widest word */}
      <span className="invisible h-0 whitespace-nowrap select-none pointer-events-none pr-1">
        {words.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
      
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -20, opacity: 0, rotateX: 90 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.23, 1, 0.32, 1] 
          }}
          className={`inline-block whitespace-nowrap leading-none ${className}`}
          style={{ transformOrigin: "50% 50%" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
