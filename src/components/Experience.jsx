import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, CheckCircle2, Briefcase, Search, X } from 'lucide-react'

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Marketing', 'SEO', 'AI', 'Data', 'Leadership']

  const jobs = [
    {
      company: 'Hi-Tech Professionals',
      role: 'Digital Media Assistant',
      period: 'May 2024 - Apr 2025',
      location: 'Dhaka, Bangladesh',
      categories: ['Marketing', 'SEO', 'Data'],
      aiWin: 'Automated creative testing workflows using Midjourney & GPT-4, reducing asset production time by 40% while maintaining brand consistency.',
      tasks: [
        'Optimized multi-channel digital advertising campaigns for maximum ROI.',
        'Managed CMS updates and visual content strategy.',
        'Developed interaction strategies for community engagement.',
        'Executed technical SEO improvements and data synchronization.'
      ]
    },
    {
      company: 'IIML',
      role: 'Data Entry Specialist',
      period: 'Jul 2023 - Apr 2024',
      location: 'Dhaka, Bangladesh',
      categories: ['Data', 'Leadership'],
      aiWin: 'Implemented custom Python-based LLM scripts to pre-validate high-volume data entries, achieving a record-breaking 99.8% precision rate.',
      tasks: [
        'Maintained 99%+ accuracy across high-volume data operations.',
        'Optimized data quality workflows and reporting standards.',
        'Collaborated on large-scale data migration projects.'
      ]
    }
  ]

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesCategory = activeCategory === 'All' || job.categories.includes(activeCategory)
      const matchesSearch = job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tasks.some(task => task.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (job.aiWin && job.aiWin.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  }

  return (
    <div className="section-container">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Work History</h2>

        <div className="filter-controls">
          <div className="search-box glass">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search roles, companies or AI impact..."
              value={searchQuery}
              onChange={(e) => {
                const val = e.target.value
                setSearchQuery(val)
                if (val.length > 3) {
                  window.dataLayer = window.dataLayer || []
                  window.dataLayer.push({
                    event: 'portfolio_interaction',
                    event_category: 'Search',
                    event_label: 'Search Query',
                    search_term: val
                  })
                }
              }}
            />
            {searchQuery && (
              <X
                size={16}
                className="clear-icon"
                onClick={() => setSearchQuery('')}
              />
            )}
          </div>

          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pill-btn glass ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat)
                  window.dataLayer = window.dataLayer || []
                  window.dataLayer.push({
                    event: 'portfolio_interaction',
                    event_category: 'Filter',
                    event_label: cat
                  })
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AnimatePresence mode="popLayout">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <motion.div
                key={job.company + job.role}
                className="job-card glass glass-hover"
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="job-header">
                  <div className="role-group">
                    <div className="role-flex">
                      <Briefcase size={20} className="role-icon" />
                      <h3 className="role">{job.role}</h3>
                    </div>
                    <p className="company">{job.company}</p>
                    <div className="job-tags">
                      {job.categories.map(cat => (
                        <span key={cat} className="job-tag">{cat}</span>
                      ))}
                    </div>
                  </div>
                  <div className="job-meta">
                    <span><Calendar size={14} /> {job.period}</span>
                    <span><MapPin size={14} /> {job.location}</span>
                  </div>
                </div>

                {job.aiWin && (
                  <motion.div
                    className="ai-win-box"
                    whileHover={{ scale: 1.01 }}
                  >
                    <motion.div
                      className="ai-glow"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="ai-header">
                      <span className="ai-label">AI Strategic Win</span>
                    </div>
                    <p className="ai-desc">{job.aiWin}</p>
                  </motion.div>
                )}

                <ul className="task-list">
                  {job.tasks.map((task, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="check-icon" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))
          ) : (
            <motion.div
              key="no-results"
              className="no-results glass"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>No matches found for your search.</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="reset-btn">
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        .section-container {
          width: 100%;
          max-width: 900px;
          padding: 40px 20px;
        }
        .section-title {
          margin-bottom: 2rem;
          text-align: center;
          font-size: 2.5rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 4px;
        }
        .filter-controls {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-bottom: 4rem;
        }
        .search-box {
            width: 100%;
            max-width: 500px;
            display: flex;
            align-items: center;
            padding: 12px 20px;
            gap: 12px;
            border-radius: 50px;
        }
        .search-box input {
            background: none;
            border: none;
            color: #fff;
            width: 100%;
            font-size: 0.95rem;
            outline: none;
        }
        .search-icon { color: var(--accent-gold); opacity: 0.7; }
        .clear-icon { color: var(--text-secondary); cursor: pointer; }
        
        .category-pills {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
        }
        .pill-btn {
            padding: 8px 18px;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-secondary);
            transition: var(--transition);
        }
        .pill-btn:hover { color: #fff; border-color: var(--accent-gold); }
        .pill-btn.active {
            background: var(--accent-gold);
            color: #000;
            border-color: var(--accent-gold);
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .job-card {
          padding: 40px;
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
          transition: var(--transition);
        }
        .job-card::after {
            content: "";
            position: absolute;
            left: 0;
            top: 15%;
            height: 70%;
            width: 4px;
            background: var(--accent-gold);
            border-radius: 0 4px 4px 0;
            opacity: 0.6;
        }
        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 25px;
          flex-wrap: wrap;
          gap: 20px;
        }
        .role-flex {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 8px;
        }
        .role-icon { color: var(--accent-gold); }
        .role { font-size: 1.6rem; color: #fff; font-weight: 800; }
        .company {
          color: var(--accent-gold);
          font-weight: 700;
          font-size: 0.9rem;
          font-family: var(--font-heading);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-left: 32px;
          margin-bottom: 12px;
        }
        .job-tags {
            margin-left: 32px;
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        .job-tag {
            font-size: 0.65rem;
            background: rgba(255,255,255,0.05);
            padding: 4px 10px;
            border-radius: 4px;
            color: var(--text-secondary);
            text-transform: uppercase;
            font-weight: 700;
            border: 1px solid var(--glass-border);
        }
        .job-meta {
          display: flex;
          gap: 25px;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 500;
        }
        .job-meta span { display: flex; align-items: center; gap: 8px; }

        .ai-win-box {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(255,255,255,0.03) 100%);
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 12px;
            padding: 20px;
            margin: 25px 0 30px 32px;
            position: relative;
            overflow: hidden;
        }
        .ai-glow {
            position: absolute;
            top: -20px;
            right: -20px;
            width: 60px;
            height: 60px;
            background: var(--accent-gold);
            filter: blur(40px);
            opacity: 0.2;
        }
        .ai-header {
            margin-bottom: 8px;
        }
        .ai-label {
            font-size: 0.65rem;
            color: var(--accent-gold);
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 2px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .ai-label::before {
            content: "";
            width: 8px;
            height: 8px;
            background: var(--accent-gold);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--accent-gold);
        }
        .ai-desc {
            font-size: 0.9rem;
            color: #fff;
            line-height: 1.6;
            font-weight: 500;
        }

        .task-list {
          list-style: none;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.8;
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-left: 32px;
        }
        .task-list li { display: flex; gap: 15px; align-items: flex-start; }
        .check-icon { color: var(--accent-gold); margin-top: 5px; flex-shrink: 0; opacity: 0.5; }
        
        .no-results {
            padding: 60px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        .reset-btn {
            background: none;
            border: none;
            color: var(--accent-gold);
            font-weight: 700;
            text-decoration: underline;
            font-family: inherit;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            .job-header { flex-direction: column; }
            .job-card { padding: 30px; }
            .role { font-size: 1.4rem; }
            .company, .task-list, .job-tags, .ai-win-box { margin-left: 0; }
            .job-meta { gap: 15px; }
        }
      `}</style>
    </div>
  )
}

export default Experience
