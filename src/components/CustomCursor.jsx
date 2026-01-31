import React, { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false)

    const cursorX = useSpring(0, { stiffness: 500, damping: 30 })
    const cursorY = useSpring(0, { stiffness: 500, damping: 30 })

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 10)
            cursorY.set(e.clientY - 10)

            const target = e.target
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer')
        }

        window.addEventListener('mousemove', moveCursor)
        return () => window.removeEventListener('mousemove', moveCursor)
    }, [])

    return (
        <motion.div
            className="custom-cursor"
            style={{
                translateX: cursorX,
                translateY: cursorY,
                scale: isPointer ? 1.5 : 1,
                backgroundColor: isPointer ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.4)',
            }}
        >
            <style jsx>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          backdrop-filter: blur(2px);
          mix-blend-mode: difference;
          transition: background-color 0.3s ease, scale 0.3s ease;
        }
        @media (max-width: 768px) {
          .custom-cursor { display: none; }
        }
      `}</style>
        </motion.div>
    )
}

export default CustomCursor
