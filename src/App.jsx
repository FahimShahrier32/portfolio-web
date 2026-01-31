import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundEffects from './components/BackgroundEffects'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import BentoSkills from './components/BentoSkills'
import Education from './components/Education'
import Contact from './components/Contact'
import TrustedBy from './components/TrustedBy'
import ClientSidebar from './components/ClientSidebar'
// import CommandCenter from './components/CommandCenter'

const App = () => {
  const [activeSection, setActiveSection] = useState('home')

  // Handle direct navigation to specific sections
  useEffect(() => {
    const path = window.location.pathname.replace(/^\//, '')
    const validSections = ['home', 'experience', 'skills', 'education', 'contact']
    if (validSections.includes(path)) {
      setActiveSection(path)
    }
  }, [])

  const renderSection = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="section-wrapper"
        >
          {(() => {
            switch (activeSection) {
              case 'home': return (
                <div className="home-layout">
                  <Hero setActiveSection={setActiveSection} />
                  <TrustedBy />
                </div>
              )
              case 'experience': return <Experience />
              case 'skills': return <BentoSkills />
              case 'education': return <Education />
              // case 'analytics': return <CommandCenter />
              case 'contact': return <Contact />
              default: return (
                <div className="home-layout">
                  <Hero />
                  <TrustedBy />
                </div>
              )
            }
          })()}
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <div className="layout">
      <BackgroundEffects />
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="content">
        {renderSection()}
      </main>

      <ClientSidebar activeSection={activeSection} />

      {/* Premium Floating Navigation - Moved to end and using explicit styles */}
      {/* Removed FloatingNav component */}

      <style jsx>{`
        .layout {
          display: flex;
          min-height: 100vh;
          background: transparent;
        }
        .content {
          flex: 1;
          padding: 40px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          overflow-y: auto;
          height: 100vh;
        }
        .section-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .home-layout {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: 80px;
            padding-bottom: 100px;
        }
        @media (max-width: 768px) {
          .layout {
            flex-direction: column;
          }
          .content {
            padding: 40px 20px 120px 20px;
            height: auto;
            overflow-y: visible;
          }
        }
      `}</style>
    </div>
  )
}

export default App
