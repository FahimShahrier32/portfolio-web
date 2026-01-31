import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Briefcase, TrendingUp, Cpu, Globe } from 'lucide-react'

const TrustedBy = () => {
  const clients = [
    {
      name: 'Hi-Tech Professionals',
      role: 'Creative Marketing & Ads',
      desc: 'Optimized multi-channel campaigns and managed visual content strategy to scale ROI.',
      icon: <Briefcase size={20} />,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'IIML',
      role: 'Data Operations',
      desc: 'Ensured 99%+ accuracy in data quality workflows and high-volume operations.',
      icon: <Cpu size={20} />,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Local E-commerce Brands',
      role: 'SEO & Growth Strategy',
      desc: 'Implemented technical SEO audits and keyword strategies to drive organic traffic.',
      icon: <TrendingUp size={20} />,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Mollahs IT',
      role: 'Prompt Engineering',
      desc: 'Built custom GPT-4 and Midjourney workflows for digital content automation.',
      icon: <Globe size={20} />,
      image: '/mollahs-it.png'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <div className="section-container">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ShieldCheck className="header-icon" size={32} />
        <h2 className="section-title">Trusted By</h2>
        <p className="section-subtitle">Collaborating with industry leaders to deliver data-driven results.</p>
      </motion.div>

      <motion.div
        className="client-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {clients.map((client, index) => (
          <motion.div
            key={index}
            id={`client-${index}`}
            className="client-card glass glass-hover"
            variants={itemVariants}
          >
            <div className="card-top">
              <div className="client-avatar-wrapper">
                <img src={client.image} alt={client.name} className="client-avatar" />
                <div className="client-icon-overlay">{client.icon}</div>
              </div>
              <div className="client-meta">
                <h3 className="client-name">{client.name}</h3>
                <p className="client-role">{client.role}</p>
              </div>
            </div>

            <div className="client-content">
              <div className="divider"></div>
              <p className="client-desc">{client.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        .section-container {
          width: 100%;
          max-width: 1000px;
          padding: 40px 20px;
        }
        .section-header {
            text-align: center;
            margin-bottom: 4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .header-icon {
            color: var(--accent-gold);
            margin-bottom: 1rem;
            filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 4px;
          margin-bottom: 1rem;
        }
        .section-subtitle {
            color: var(--text-secondary);
            font-size: 1.1rem;
            max-width: 600px;
            font-weight: 500;
        }
        .client-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }
        .client-card {
            padding: 30px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            transition: var(--transition);
        }
        .card-top {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        .client-avatar-wrapper {
            position: relative;
            width: 70px;
            height: 70px;
            flex-shrink: 0;
            background: rgba(255,255,255,0.05);
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .client-avatar {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border: 1px solid var(--glass-border);
            filter: brightness(0.9) contrast(1.1);
            color: transparent; /* Hide broken alt text */
        }
        .client-icon-overlay {
            position: absolute;
            bottom: -2px;
            right: -2px;
            background: var(--accent-gold);
            color: #000;
            width: 26px;
            height: 26px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
            border: 2px solid #000;
            z-index: 2;
        }
        .client-meta {
            flex: 1;
            min-width: 0;
        }
        .client-name {
            font-size: 1.15rem;
            color: #fff;
            font-weight: 800;
            margin-bottom: 2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .client-role {
            font-size: 0.75rem;
            color: var(--accent-gold);
            font-family: var(--font-heading);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .divider {
            width: 30px;
            height: 1px;
            background: var(--accent-gold);
            opacity: 0.3;
            margin-bottom: 12px;
        }
        .client-desc {
            font-size: 0.85rem;
            color: var(--text-secondary);
            line-height: 1.6;
            font-style: italic;
        }
        @media (max-width: 850px) {
            .client-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 500px) {
            .client-card { padding: 25px; }
            .card-top { flex-direction: row; text-align: left; }
            .client-avatar-wrapper { width: 60px; height: 60px; }
            .client-name { font-size: 1rem; }
            .client-role { font-size: 0.7rem; }
        }
      `}</style>
    </div>
  )
}

export default TrustedBy
