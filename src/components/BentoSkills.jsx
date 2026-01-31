import React from 'react'
import { motion } from 'framer-motion'
import { Target, Search, Sparkles, Layout, BarChart3, Users } from 'lucide-react'

const BentoSkills = () => {
    const skillCategories = [
        {
            title: 'Meta Ads', level: 'Expert', desc: 'Full-funnel management & ROAS optimization.', size: 'large',
            icon: <Target className="skill-icon" />,
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80'
        },
        {
            title: 'SEO & SEM', level: 'Advanced', desc: 'Technical audits & keyword strategy.', size: 'medium',
            icon: <Search className="skill-icon" />,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
        },
        {
            title: 'AI Prompting', level: 'Specialist', desc: 'GPT-4 & Midjourney automation.', size: 'small',
            icon: <Sparkles className="skill-icon" />,
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
        },
        {
            title: 'WordPress', level: 'Expert', desc: 'Custom themes & optimization.', size: 'small',
            icon: <Layout className="skill-icon" />,
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80'
        },
        // {
        //     title: 'Analytics', level: 'Pro', desc: 'GA4 & data-driven reporting.', size: 'medium',
        //     icon: <BarChart3 className="skill-icon" />,
        //     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
        // },
        {
            title: 'Leadership', level: 'Manager', desc: 'Agile & team collaboration.', size: 'small',
            icon: <Users className="skill-icon" />,
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }

    return (
        <div className="section-container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Core Expertise
            </motion.h2>

            <motion.div
                className="bento-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skillCategories.map((skill, index) => (
                    <motion.div
                        key={index}
                        className={`skill-card ${skill.size}`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div
                            className="card-bg"
                            style={{ backgroundImage: `url(${skill.image})` }}
                        ></div>
                        <div className="card-overlay"></div>

                        <div className="skill-content">
                            <div className="skill-header">
                                <div className="icon-box">{skill.icon}</div>
                                <span className="level-badge">{skill.level}</span>
                            </div>
                            <div className="skill-footer">
                                <h3 className="skill-item">{skill.title}</h3>
                                <p className="skill-desc">{skill.desc}</p>
                            </div>
                        </div>
                        <div className="card-shine"></div>
                    </motion.div>
                ))}
            </motion.div>

            <style jsx>{`
        .section-container {
          width: 100%;
          max-width: 1100px;
          padding: 20px;
        }
        .section-title {
          margin-bottom: 3.5rem;
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 220px;
          gap: 20px;
        }
        .skill-card {
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.1);
            background: #000;
        }
        .card-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.4;
            transition: var(--transition);
        }
        .skill-card:hover .card-bg {
            opacity: 0.6;
            transform: scale(1.1);
        }
        .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(0,0,0,0.95) 20%, transparent 100%);
            z-index: 1;
        }
        .large {
            grid-column: span 2;
            grid-row: span 2;
        }
        .medium {
            grid-column: span 1;
            grid-row: span 2;
        }
        .skill-content {
            position: relative;
            z-index: 2;
            height: 100%;
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .skill-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .icon-box {
            color: var(--accent-gold);
            filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.4));
        }
        .skill-item {
            font-size: 1.6rem;
            margin-bottom: 8px;
            color: #fff;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .skill-desc {
            font-size: 0.95rem;
            color: rgba(255,255,255,0.7);
            line-height: 1.5;
            max-width: 90%;
        }
        .level-badge {
            font-size: 0.65rem;
            background: var(--accent-gold);
            color: #000;
            padding: 5px 12px;
            border-radius: 50px;
            text-transform: uppercase;
            font-weight: 800;
        }
        @media (max-width: 1000px) {
            .bento-grid { grid-template-columns: repeat(2, 1fr); }
            .large { grid-column: span 2; }
        }
        @media (max-width: 600px) {
            .bento-grid { grid-template-columns: 1fr; grid-auto-rows: 250px; }
            .large, .medium { grid-column: span 1; grid-row: span 1; }
        }
      `}</style>
        </div>
    )
}

export default BentoSkills
