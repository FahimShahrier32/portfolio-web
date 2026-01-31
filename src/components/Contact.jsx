import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Mail, MapPin, ExternalLink, Send, CheckCircle2 } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle, submitting, success

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.message) return

        setStatus('submitting')
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            event: 'portfolio_interaction',
            event_category: 'Form',
            event_label: 'Contact Form Attempt'
        })

        try {
            const response = await fetch("https://formsubmit.co/ajax/Fahimshahrier32@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Message from ${formData.name}`,
                    _template: "table"
                })
            });

            if (response.ok) {
                setStatus('success')
                window.dataLayer = window.dataLayer || []
                window.dataLayer.push({
                    event: 'portfolio_interaction',
                    event_category: 'Form',
                    event_label: 'Contact Form Success'
                })
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                alert("Something went wrong. Please try again.")
                setStatus('idle')
            }
        } catch (error) {
            console.error("Form error:", error)
            alert("Something went wrong. Please check your connection.")
            setStatus('idle')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
                Get In Touch
            </motion.h2>

            <motion.div
                className="contact-wrapper"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="contact-info">
                    <motion.div className="info-card glass" variants={itemVariants}>
                        <h3 className="reach-out">Let's build something elite.</h3>
                        <p className="contact-desc">Currently open to scale brands through data-driven marketing and AI implementation.</p>

                        <div className="info-links">
                            <a
                                href="mailto:Fahimshahrier32@gmail.com"
                                className="email-link"
                                onClick={() => {
                                    window.dataLayer = window.dataLayer || []
                                    window.dataLayer.push({
                                        event: 'portfolio_interaction',
                                        event_category: 'Social',
                                        event_label: 'Email Click'
                                    })
                                }}
                            >
                                Fahimshahrier32@gmail.com
                            </a>
                        </div>
                    </motion.div>

                    <div className="contact-socials">
                        <motion.a
                            href="https://n9.cl/fahim-shahrier"
                            target="_blank"
                            className="social-item glass glass-hover"
                            variants={itemVariants}
                            onClick={() => {
                                window.dataLayer = window.dataLayer || []
                                window.dataLayer.push({
                                    event: 'portfolio_interaction',
                                    event_category: 'Social',
                                    event_label: 'LinkedIn Interaction'
                                })
                            }}
                        >
                            <Linkedin size={20} />
                            <span>LinkedIn</span>
                            <ExternalLink size={14} className="icon-right" />
                        </motion.a>
                        <motion.div className="social-item glass" variants={itemVariants}>
                            <MapPin size={20} />
                            <span>Dhaka, BD</span>
                        </motion.div>
                    </div>
                </div>

                <motion.div className="contact-form-container" variants={itemVariants}>
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                className="success-overlay glass"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key="success"
                            >
                                <CheckCircle2 size={48} className="success-icon" />
                                <h3>Message Sent!</h3>
                                <p>I'll get back to you within 24 hours.</p>
                                <button onClick={() => setStatus('idle')} className="reset-btn">Send another</button>
                            </motion.div>
                        ) : (
                            <motion.form
                                className="contact-form glass"
                                onSubmit={handleSubmit}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key="form"
                            >
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="How can I help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className={`btn btn-primary submit-btn ${status === 'submitting' ? 'loading' : ''}`}
                                    disabled={status === 'submitting'}
                                >
                                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                                    <Send size={18} className={status === 'submitting' ? 'spinning' : ''} />
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
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
        .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 40px;
        }
        .info-card {
            padding: 40px;
            margin-bottom: 20px;
            text-align: left;
        }
        .reach-out {
            font-size: 1.8rem;
            margin-bottom: 15px;
            font-weight: 800;
            color: #fff;
        }
        .contact-desc {
            color: var(--text-secondary);
            margin-bottom: 30px;
            line-height: 1.6;
        }
        .email-link {
            font-size: 1.1rem;
            color: var(--accent-gold);
            font-weight: 700;
            border-bottom: 2px solid transparent;
        }
        .contact-socials {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        .social-item {
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        .social-item span { flex: 1; }
        .contact-form-container {
            position: relative;
            min-height: 400px;
        }
        .contact-form {
            padding: 40px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            height: 100%;
        }
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .form-group label {
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--text-secondary);
            letter-spacing: 1px;
        }
        .form-group input, .form-group textarea {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            padding: 14px 18px;
            color: #fff;
            font-family: inherit;
            transition: var(--transition);
            font-size: 0.95rem;
        }
        .form-group input:focus, .form-group textarea:focus {
            outline: none;
            border-color: var(--accent-gold);
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.1);
        }
        .form-group textarea {
            height: 140px;
            resize: none;
        }
        .submit-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 18px;
            margin-top: 10px;
            border-radius: 12px;
            background: var(--accent-gold);
            color: #000;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: var(--transition);
            border: none;
        }
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
            filter: brightness(1.1);
        }
        .submit-btn:active { transform: translateY(0); }
        .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
        }
        .success-overlay {
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100%;
            gap: 20px;
        }
        .success-icon {
            color: var(--accent-gold);
            filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.5));
        }
        .success-overlay h3 {
            font-size: 1.8rem;
            color: #fff;
            font-weight: 800;
        }
        .success-overlay p {
            color: var(--text-secondary);
        }
        .reset-btn {
            background: none;
            border: 1px solid var(--glass-border);
            color: #fff;
            padding: 10px 20px;
            border-radius: 50px;
            font-size: 0.8rem;
            font-weight: 700;
            cursor: pointer;
            transition: var(--transition);
        }
        .reset-btn:hover { background: rgba(255,255,255,0.05); border-color: #fff; }

        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .spinning {
            animation: spin 1s linear infinite;
        }

        @media (max-width: 900px) {
            .contact-wrapper { grid-template-columns: 1fr; }
        }
        @media (max-width: 500px) {
            .contact-form { padding: 30px 20px; }
        }
      `}</style>
        </div>
    )
}

export default Contact
