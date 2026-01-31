import React from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  Briefcase,
  Cpu,
  GraduationCap,
  Mail,
  Linkedin,
  ExternalLink,
  ShieldCheck,
  BarChart3
} from 'lucide-react'

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Cpu size={20} /> },
    { id: 'education', label: 'Background', icon: <GraduationCap size={20} /> },
    // { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ]

  return (
    <nav className="sidebar glass">
      <div className="nav-items">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => {
              setActiveSection(item.id)
              window.dataLayer = window.dataLayer || []
              window.dataLayer.push({
                event: 'portfolio_interaction',
                event_category: 'Navigation',
                event_label: item.label
              })
            }}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="icon-wrapper">{item.icon}</div>
            <span className="label">{item.label}</span>
            {activeSection === item.id && (
              <motion.div
                className="active-indicator"
                layoutId="active-nav"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <style jsx>{`
        .sidebar {
          width: 80px;
          height: fit-content;
          margin: auto 30px;
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 50%;
          transform: translateY(-50%);
          padding: 20px 10px;
          z-index: 1000;
          border-radius: 40px;
          gap: 10px;
        }
        .nav-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }
        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: var(--text-secondary);
          transition: var(--transition);
        }
        .icon-wrapper {
            position: relative;
            z-index: 2;
        }
        .nav-item:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        .nav-item.active {
          color: var(--accent-gold);
        }
        .active-indicator {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(212, 175, 55, 0.1);
            border: 1px solid rgba(212, 175, 55, 0.3);
            border-radius: 50%;
            z-index: 1;
        }
        .label {
          position: absolute;
          left: 65px;
          background: #fff;
          color: #000;
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          opacity: 0;
          transform: translateX(-10px);
          pointer-events: none;
          transition: var(--transition);
          white-space: nowrap;
        }
        .nav-item:hover .label {
          opacity: 1;
          transform: translateX(0);
        }
        @media (max-width: 768px) {
          .sidebar {
            width: calc(100% - 40px);
            height: 70px;
            flex-direction: row;
            position: fixed;
            bottom: 30px;
            top: auto;
            left: 20px;
            margin: 0;
            transform: none;
            border-radius: 35px;
          }
          .nav-items {
            flex-direction: row;
            width: 100%;
            justify-content: space-around;
            padding: 0 10px;
          }
          .label {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}

export default Sidebar
