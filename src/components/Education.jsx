import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const Education = () => {
    const education = [
        {
            school: 'Daffodil Polytechnic Institute',
            degree: 'Diploma in Engineering (MCA - Computer Science)',
            period: '2022 - Aug 2026 (Continuing)'
        },
        {
            school: "Queen's School & College",
            degree: "Secondary School Certificate",
            period: "2020 - 2021"
        }
    ]

    const certifications = [
        { title: 'AI-Powered Shopping Ads Certification', issuer: 'Google', date: 'Dec 2025' },
        { title: 'Facebook Marketing Course', issuer: 'Grameenphone Academy', date: 'Nov 2025' }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    }

    return (
        <div className="section-container">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Background
            </motion.h2>

            <motion.div
                className="edu-cert-wrapper"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="edu-section">
                    <div className="section-header-box">
                        <GraduationCap size={24} className="section-icon" />
                        <h3 className="sub-title">Education</h3>
                    </div>
                    {education.map((edu, i) => (
                        <motion.div key={i} className="item-card glass glass-hover" variants={itemVariants}>
                            <h4 className="school">{edu.school}</h4>
                            <p className="degree">{edu.degree}</p>
                            <div className="date-box">
                                <Calendar size={14} />
                                <span className="date">{edu.period}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="cert-section">
                    <div className="section-header-box">
                        <Award size={24} className="section-icon" />
                        <h3 className="sub-title">Certifications</h3>
                    </div>
                    <div className="cert-grid">
                        {certifications.map((cert, i) => (
                            <motion.div key={i} className="item-card glass glass-hover" variants={itemVariants}>
                                <h4 className="cert-title">{cert.title}</h4>
                                <p className="issuer">{cert.issuer}</p>
                                <div className="date-box">
                                    <Calendar size={14} />
                                    <span className="date">{cert.date}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
        .section-container {
          width: 100%;
          max-width: 1000px;
          padding: 40px 20px;
        }
        .section-title {
          margin-bottom: 4rem;
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
        .edu-cert-wrapper {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 40px;
        }
        .section-header-box {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
        }
        .section-icon {
            color: var(--accent-gold);
        }
        .sub-title {
            font-size: 1.1rem;
            color: #fff;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        .item-card {
            padding: 30px;
            margin-bottom: 20px;
            transition: var(--transition);
        }
        .school, .cert-title {
            color: #fff;
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 8px;
        }
        .degree, .issuer {
            color: var(--accent-gold);
            font-size: 0.95rem;
            margin-bottom: 20px;
            font-family: var(--font-heading);
            font-weight: 600;
        }
        .date-box {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--text-secondary);
        }
        .date {
            font-size: 0.85rem;
            font-weight: 500;
        }
        @media (max-width: 900px) {
            .edu-cert-wrapper {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </div>
    )
}

export default Education
