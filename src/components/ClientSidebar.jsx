import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Cpu, TrendingUp, Globe } from 'lucide-react'

const ClientSidebar = ({ activeSection }) => {
  // Only show on home section
  // if (activeSection !== 'home') return null;

  const clients = [
    { id: 'client-0', name: 'Hi-Tech Professionals', icon: <Briefcase size={20} /> },
    { id: 'client-1', name: 'IIML', icon: <Cpu size={20} /> },
    { id: 'client-2', name: 'Local E-commerce', icon: <TrendingUp size={20} /> },
    { id: 'client-3', name: 'AI Automation', icon: <Globe size={20} /> },
  ]

  const scrollToClient = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Optional: Add a brief "highlight" effect to the card
      element.classList.add('highlight-glow');
      setTimeout(() => element.classList.remove('highlight-glow'), 2000);
    }
  }

  return (
    <motion.nav
      className="client-sidebar glass"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    >
      <div className="dock-title">Clients</div>
      <div className="nav-items">
        {clients.map((client) => (
          <motion.button
            key={client.id}
            className="nav-item"
            onClick={() => scrollToClient(client.id)}
            whileHover={{ scale: 1.2, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="icon-wrapper">{client.icon}</div>
            <span className="label-left">{client.name}</span>
          </motion.button>
        ))}
      </div>

      <style jsx>{`
        .client-sidebar {
          width: 80px;
          height: fit-content;
          margin: auto 0;
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 50%;
          right: 30px;
          transform: translateY(-50%);
          padding: 25px 10px;
          z-index: 1000;
          border-radius: 40px;
          gap: 15px;
          margin-right: 30px;
        }
        .dock-title {
            font-size: 0.6rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--accent-gold);
            font-weight: 800;
            text-align: center;
            opacity: 0.6;
            margin-bottom: 5px;
        }
        .nav-items {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: center;
        }
        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 14px;
          color: var(--text-secondary);
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--glass-border);
          transition: var(--transition);
        }
        .nav-item:hover {
          color: var(--accent-gold);
          border-color: var(--accent-gold);
          background: rgba(212, 175, 55, 0.05);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
        }
        .label-left {
          position: absolute;
          right: 65px;
          background: rgba(255, 255, 255, 0.95);
          color: #000;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 800;
          opacity: 0;
          transform: translateX(10px);
          pointer-events: none;
          transition: var(--transition);
          white-space: nowrap;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .nav-item:hover .label-left {
          opacity: 1;
          transform: translateX(0);
        }
        @media (max-width: 768px) {
            .client-sidebar {
                display: none; /* Hide on mobile only */
            }
        }
      `}</style>
    </motion.nav>
  )
}

export default ClientSidebar
