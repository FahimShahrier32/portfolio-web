import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import profileImg from '../assets/profile_new.jpg'
import Magnetic from './Magnetic'
import { Rocket, Send, Mail } from 'lucide-react'

const Typewriter = ({ texts, delay = 2000, speed = 100 }) => {
    const [index, setIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        let timeout

        const handleTyping = () => {
            const fullText = texts[index]

            if (!isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length + 1))
                if (currentText === fullText) {
                    timeout = setTimeout(() => setIsDeleting(true), delay)
                } else {
                    timeout = setTimeout(handleTyping, speed)
                }
            } else {
                setCurrentText(fullText.substring(0, currentText.length - 1))
                if (currentText === '') {
                    setIsDeleting(false)
                    setIndex((prev) => (prev + 1) % texts.length)
                } else {
                    timeout = setTimeout(handleTyping, speed / 2)
                }
            }
        }

        timeout = setTimeout(handleTyping, speed)
        return () => clearTimeout(timeout)
    }, [currentText, isDeleting, index, texts, delay, speed])

    return (
        <span className="typewriter-text">
            {currentText}
            <span className="cursor">|</span>
        </span>
    )
}

const Hero = ({ setActiveSection }) => {
    const roles = [
        "Digital Media Specialist",
        "SEO Specialist",
        "AI Growth Strategist",
        "Ads Optimizer"
    ]

    return (
        <div className="hero-container">
            <div className="decorative-orb orb-1"></div>
            <div className="decorative-orb orb-2"></div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="profile-container">
                    <motion.div
                        className="avatar-circle"
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    >
                        <img src={profileImg} alt="Fahim Shahrier" className="profile-img" />

                        {/* Success Badges */}
                        <motion.div
                            className="badge badge-top-right glass"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            <span className="badge-val">99%+</span>
                            <span className="badge-lab">Data Accuracy</span>
                        </motion.div>

                        <motion.div
                            className="badge badge-bottom-left glass"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 }}
                        >
                            <span className="badge-val">High-ROI</span>
                            <span className="badge-lab">Ads Strategist</span>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.h1
                    className="name"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Fahim Shahrier
                </motion.h1>

                <motion.div
                    className="title-box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="subtitle">
                        <Typewriter texts={roles} />
                    </div>
                </motion.div>

                <motion.p
                    className="description glass"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <span className="usp-text">Scaling Brands with Precision.</span><br />
                    I solve complex marketing challenges through <span className="highlight">Analytical Thinking</span> and <span className="highlight">AI Intelligence</span>, specialized in driving high ROI across Meta & Search channels.
                </motion.p>

                <motion.div
                    className="stats-row"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <div className="stat-item">
                        <span className="stat-val">50+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat-sep"></div>
                    <div className="stat-item">
                        <span className="stat-val">Dhaka</span>
                        <span className="stat-label">Based</span>
                    </div>
                    <div className="stat-sep"></div>
                    <div className="stat-item">
                        <span className="stat-val">2026</span>
                        <span className="stat-label">Certified</span>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <Magnetic>
                        <a
                            href="https://n9.cl/fahim-shahrier"
                            target="_blank"
                            className="btn btn-primary"
                        >
                            <span>LinkedIn Portfolio</span>
                            <Rocket size={16} style={{ marginLeft: '8px' }} />
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            href="#"
                            className="btn btn-outline"
                            onClick={(e) => {
                                e.preventDefault()
                                setActiveSection('contact')
                            }}
                        >
                            <span>Contact Me</span>
                            <Mail size={16} style={{ marginLeft: '8px' }} />
                        </a>
                    </Magnetic>
                </motion.div>
            </motion.div>

            <style jsx>{`
        .hero-container {
          max-width: 900px;
          text-align: center;
          position: relative;
        }
        .decorative-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            z-index: -1;
            opacity: 0.15;
        }
        .orb-1 {
            width: 300px;
            height: 300px;
            background: var(--accent-gold);
            top: -100px;
            right: -50px;
        }
        .orb-2 {
            width: 250px;
            height: 250px;
            background: #fff;
            bottom: -50px;
            left: -50px;
        }
        .profile-container {
            margin-bottom: 2.5rem;
            display: flex;
            justify-content: center;
        }
        .avatar-circle {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            background: linear-gradient(135deg, #111, #000);
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid var(--glass-border);
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            padding: 5px;
        }
        .profile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            filter: grayscale(20%);
            transition: var(--transition);
        }
        .avatar-circle:hover .profile-img {
            filter: grayscale(0%);
            transform: scale(1.05);
        }
        .name {
          font-size: 4.5rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          background: linear-gradient(to bottom, #fff 40%, rgba(255,255,255,0.5));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -2px;
        }
        .subtitle {
          color: var(--accent-gold);
          font-family: var(--font-heading);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-weight: 600;
          min-height: 1.5em;
        }
        .typewriter-text {
            display: inline-block;
        }
        .cursor {
            display: inline-block;
            margin-left: 2px;
            animation: blink 1s step-end infinite;
        }
        @keyframes blink {
            from, to { opacity: 1; }
            50% { opacity: 0; }
        }
        .description {
          padding: 35px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          font-size: 1.1rem;
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        .usp-text {
            display: block;
            font-size: 1.8rem;
            color: #fff;
            font-weight: 800;
            margin-bottom: 10px;
            font-family: var(--font-heading);
            letter-spacing: -0.5px;
        }
        .badge {
            position: absolute;
            padding: 10px 18px;
            display: flex;
            flex-direction: column;
            gap: 2px;
            z-index: 10;
        }
        .badge-top-right {
            top: 20px;
            right: -60px;
        }
        .badge-bottom-left {
            bottom: 20px;
            left: -60px;
        }
        .badge-val {
            color: var(--accent-gold);
            font-weight: 800;
            font-size: 0.9rem;
            letter-spacing: 1px;
        }
        .badge-lab {
            color: #fff;
            font-size: 0.65rem;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 1px;
            white-space: nowrap;
        }
        .highlight {
            color: var(--accent-gold);
            font-weight: 700;
        }
        .hero-actions {
            display: flex;
            gap: 25px;
            justify-content: center;
        }
        .btn {
            padding: 16px 40px;
            border-radius: 50px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 0.75rem;
            transition: var(--transition);
        }
        .btn-primary {
            background: #fff;
            color: #000;
        }
        .btn-primary:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(255,255,255,0.1);
        }
        .btn-outline {
            border: 1px solid var(--glass-border);
            color: var(--text-primary);
            backdrop-filter: blur(10px);
        }
        .btn-outline:hover {
            background: var(--accent-gold);
            color: #000;
            border-color: var(--accent-gold);
            transform: translateY(-5px);
        }
        .stats-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            margin-bottom: 3.5rem;
        }
        .stat-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        .stat-val {
            font-size: 1.4rem;
            color: #fff;
            font-weight: 800;
            font-family: var(--font-heading);
        }
        .stat-label {
            font-size: 0.7rem;
            color: var(--accent-gold);
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 2px;
        }
        .stat-sep {
            width: 1px;
            height: 25px;
            background: rgba(255,255,255,0.1);
        }
        @media (max-width: 768px) {
            .name { font-size: 3rem; letter-spacing: -1px; }
            .avatar-circle { width: 140px; height: 140px; }
            .hero-actions { flex-direction: column; align-items: center; }
            .badge-top-right { right: -20px; top: -10px; }
            .badge-bottom-left { left: -20px; bottom: -10px; }
            .stats-row { gap: 20px; flex-wrap: wrap; }
            .usp-text { font-size: 1.4rem; }
            .stat-sep { display: none; }
        }
      `}</style>
        </div>
    )
}

export default Hero
