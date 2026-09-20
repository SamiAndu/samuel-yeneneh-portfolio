'use client'

import { useState } from 'react'

const projects = [
    {
        title: 'Fraud Detection System',
        category: 'FinTech / ML',
        description: 'A transaction-risk pipeline combining rule-based detection with machine-learning features to identify suspicious activity.',
        tags: ['Python', 'SQL', 'ML', 'AWS'],
        icon: '◈',
        visual: 'Transaction → Rules → Features → Risk Score',
        github: 'https://github.com/SamiAndu/Fraud-Detection-System',
        demo: 'https://github.com/SamiAndu/Fraud-Detection-System#dashboard'
    },
    {
        title: 'LLM Reasoning Research',
        category: 'AI / Research',
        description: 'Exploring self-discovering reasoning structures for problem solving with large language models.',
        tags: ['LLMs', 'NLP', 'Research', 'Python'],
        icon: '✦',
        visual: 'Problem → Skills → Reasoning → Answer',
        github: '#research',
        demo: '#research'
    },
    {
        title: 'Data Warehouse Project',
        category: 'Data Engineering',
        description: 'A dimensional-modeling project using fact and dimension tables with an ETL pipeline for analytics.',
        tags: ['SQL', 'Spark', 'Scala', 'Data Modeling'],
        icon: '▦',
        visual: 'Sources → ETL → Fact + Dimensions → BI',
        github: '#research',
        demo: '#research'
    },
    {
        title: 'Cloud Automation Pipeline',
        category: 'Cloud / DevOps',
        description: 'Automated data workflows designed around AWS and Azure services for scalable processing.',
        tags: ['AWS', 'Azure', 'Python', 'DevOps'],
        icon: '☁',
        visual: 'Data → Cloud → Pipeline → Analytics',
        github: '#skills',
        demo: '#skills'
    },
]

const skills = ['Python','SQL','Scala','Spark','Machine Learning','LLMs','AWS','Azure','Snowflake','Git/GitHub','Data Warehousing','Fraud Detection']

export default function Home() {
  const [menu, setMenu] = useState(false)
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home"><span>SY</span> Samuel Yeneneh</a>
        <button className="menuBtn" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">☰</button>
        <div className={`links ${menu?'open':''}`}>
          {['Home','About','Projects','Experience','Research','Skills','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={()=>setMenu(false)}>{x}</a>)}
          <a className="resume" href="/resume.pdf">↓ &nbsp;Download Resume</a>
        </div>
      </nav>

      <section id="home" className="hero section">
        <div className="heroGlow" />
        <div className="heroCopy">
          <p className="eyebrow">HELLO, I&apos;M</p>
          <h1>Samuel <em>Yeneneh</em></h1>
          <h2>AI <span>•</span> Data <span>•</span> FinTech</h2>
          <p className="lead">Computer Science graduate and Master&apos;s student in Artificial Intelligence at Kennesaw State University. I build intelligent systems that turn data into decisions, with a focus on AI, data, fintech, payments, compliance and cloud technologies.</p>
          <div className="actions"><a className="primary" href="#projects">View My Projects <b>→</b></a><a className="secondary" href="#contact">Get In Touch</a></div>
          <div className="socials"><a href="https://github.com/" target="_blank">GH</a><a href="linkedin.com/in/samuel-yeneneh-588476210/" target="_blank">in</a><a href="samuelandualem93@gmail.com

">✉</a><a href="/resume.pdf">CV</a></div>
        </div>
        <div className="heroVisual">
          <div className="window"><div className="dots"><i/><i/><i/></div><div className="code"><span>const</span> future = <span>await</span> build();<br/><br/><span>function</span> <b>solve</b>(problem) {'{'}<br/> &nbsp; data = analyze(problem);<br/> &nbsp; model = train(data);<br/> &nbsp; <span>return</span> impact(model);<br/>{'}'}</div></div>
          <div className="floating">BUILD<br/><strong>LEARN</strong><br/>GROW<br/><span>REPEAT.</span></div>
        </div>
      </section>

      <section className="stats"><div><b>01</b><span>Master&apos;s Program<small>Kennesaw State University</small></span></div><div><b>04+</b><span>Years Experience<small>FinTech • Compliance • Tech</small></span></div><div><b>10+</b><span>Projects<small>AI • Data • Cloud</small></span></div><div><b>∞</b><span>Curiosity<small>Always learning</small></span></div></section>

      <section id="projects" className="section light"><div className="sectionHead"><div><p className="eyebrow">FEATURED WORK</p><h2>Projects</h2><p>A selection of work across AI, data, fintech and cloud.</p></div><a href="#contact">View All Projects →</a></div>
          <div className="grid4">
            {projects.map(p => (
              <article className="card" key={p.title}>
                <div className="projectArt">
                  <span>{p.icon}</span>
                  <small>{p.category}</small>
                  <div className="projectFlow">{p.visual}</div>
                </div>

                <div className="cardBody">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>

                  <div className="tags">
                    {p.tags.map(t => <span key={t}>{t}</span>)}
                  </div>

                  <div className="projectLinks">
                    <a href={p.github}>GitHub ↗</a>
                    <a href={p.demo}>View Project →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      <section id="about" className="section about"><div className="aboutVisual"><div className="portraitPlaceholder">SY</div></div><div><p className="eyebrow">ABOUT ME</p><h2>Building a better future with technology.</h2><p>I&apos;m a Computer Science graduate currently pursuing a Master&apos;s in Artificial Intelligence at Kennesaw State University. My professional experience spans payments, compliance, technical service and data-driven operations, giving me a practical perspective on how technology and data support real-world organizations.</p><p>I&apos;m especially interested in artificial intelligence, fraud detection, data engineering, fintech, machine learning and practical automation.</p><a className="secondary dark" href="#experience">Explore My Journey →</a></div><div className="pillars"><div>✦ <b>AI & Machine Learning</b><small>Intelligent systems</small></div><div>▣ <b>FinTech & Compliance</b><small>Safer financial technology</small></div><div>▤ <b>Data Engineering</b><small>From data to insights</small></div><div>◎ <b>Global Impact</b><small>Technology for tomorrow</small></div></div></section>

      <section id="experience" className="section light"><div className="sectionHead"><div><p className="eyebrow">PROFESSIONAL EXPERIENCE</p><h2>Work Experience</h2><p>A timeline of my professional journey.</p></div></div><div className="timeline"><div><strong>Alcon</strong><span>Technical Service Administrator</span><small>2023 — 2026</small><p>Service operations, contracts, billing, parts coordination, field-engineer dispatch, CRM data and preventive-maintenance planning.</p></div><div><strong>Amazon</strong><span>Senior Compliance Analyst</span><small>2022 — 2023</small><p>Compliance operations involving product restrictions, KYC, AML transaction monitoring and data-driven investigations.</p></div><div><strong>Square</strong><span>Payment Analyst</span><small>2021 — 2022</small><p>Payment processing analysis, transaction monitoring and operational support for payment activity.</p></div><div><strong>ING Bank</strong><span>Transaction Monitoring Analyst</span><small>2020 — 2021</small><p>Transaction monitoring and investigation of potentially suspicious financial activity.</p></div></div></section>

      <section id="research" className="section research"><div><p className="eyebrow">RESEARCH & LEARNING</p><h2>Curious by default.</h2><p>I use academic work and hands-on projects to explore how AI and data systems can solve practical problems.</p></div><div className="researchCards"><article><span>01</span><h3>LLM Reasoning</h3><p>Self-discovery and structured reasoning approaches for problem solving.</p></article><article><span>02</span><h3>Data Warehousing</h3><p>Dimensional modeling, ETL and analytical data architecture.</p></article><article><span>03</span><h3>Fraud Detection</h3><p>Rules, features and ML approaches for transaction monitoring.</p></article></div></section>

      <section id="skills" className="section light"><div className="sectionHead"><div><p className="eyebrow">TECHNOLOGY</p><h2>Skills</h2><p>Tools and concepts I work with.</p></div></div><div className="skillCloud">{skills.map(s=><span key={s}>{s}</span>)}</div></section>

      <section id="contact" className="contact section"><p className="eyebrow">LET&apos;S CONNECT</p><h2>Interested in working together?</h2><p>I&apos;m open to discussing opportunities, projects, research and ideas in AI, data and fintech.</p><div className="actions"><a className="primary" href="mailto:your@email.com">Get In Touch →</a><a className="secondary" href="https://github.com/" target="_blank">GitHub ↗</a><a className="secondary" href="https://www.linkedin.com/" target="_blank">LinkedIn ↗</a></div></section>
      <footer>© 2026 Samuel Yeneneh <span>AI • Data • FinTech</span><a href="#home">Back to top ↑</a></footer>
    </main>
  )
}
