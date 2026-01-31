import React from 'react'
import { motion } from 'framer-motion'

const BackgroundEffects = () => {
    const orbs = [
        { size: 400, color: 'rgba(212, 175, 55, 0.05)', top: '-10%', left: '-10%', duration: 15 },
        { size: 300, color: 'rgba(255, 255, 255, 0.03)', top: '60%', left: '80%', duration: 10 },
        { size: 500, color: 'rgba(212, 175, 55, 0.03)', top: '20%', left: '40%', duration: 20 },
    ]

    return (
        <div className="bg-effects">
            {orbs.map((orb, i) => (
                <motion.div
                    key={i}
                    className="floating-orb"
                    style={{
                        width: orb.size,
                        height: orb.size,
                        backgroundColor: orb.color,
                        top: orb.top,
                        left: orb.left,
                    }}
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -50, 50, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
            <div className="grid-overlay"></div>

            <style jsx>{`
        .bg-effects {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
          overflow: hidden;
          pointer-events: none;
        }
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse at center, black, transparent 80%);
        }
      `}</style>
        </div>
    )
}

export default BackgroundEffects
