
import { useState } from "react";
import { motion } from "framer-motion";
import avatar from '/Anh_Bui.jpg'
import resumePdf from '/resume.pdf'

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-20 sm:py-28 border-b border-neutral-800">
    <Container>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-3 text-neutral-400 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-10">{children}</div>
    </Container>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-700 px-4 py-1 text-xs font-medium whitespace-nowrap">
    {children}
  </span>
);

const PrimaryButton = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="inline-flex items-center justify-center rounded-2xl px-5 py-2 text-sm font-semibold shadow-lg shadow-cyan-500/10 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-neutral-900 transition"
  >
    {children}
  </a>
);

const GhostButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-2xl px-5 py-2 text-sm font-semibold border border-neutral-700 hover:border-neutral-500 text-neutral-200 transition"
  >
    {children}
  </a>
);

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70 border-b border-neutral-800">
      <Container className="flex h-14 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">Anh Bui</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              className="text-neutral-300 hover:text-white"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-xl border border-neutral-700"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t border-neutral-800">
          <Container className="py-3 flex flex-col gap-2">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => onNav(n.id)}
                className="text-left px-2 py-2 rounded-xl hover:bg-neutral-800"
              >
                {n.label}
              </button>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-36">
      {/* Soft animated gradient pulse */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Main cyan pulse */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_-20%,rgba(32,211,238,0.18),rgba(0,0,0,0))]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Soft warm secondary pulse (subtle) */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(50%_30%_at_20%_20%,rgba(255,255,255,0.04),rgba(0,0,0,0))]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.95, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </motion.div>

      <Container>
  <div className="grid gap-0 md:grid-cols-2 md:items-center">
          {/* Avatar column (left) */}
          <div className="flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-neutral-800 bg-neutral-900 shadow-lg"
            >
              <img src={avatar} alt="Anh Bui" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Text column (right) */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight"
            >
              Hi, I am Anh Bui
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-3 max-w-2xl text-neutral-300 text-lg"
            >
              I build reliable software and data systems. I like simple, minimal interfaces with bold tech behind the scenes.
            </motion.p>
            <div className="mt-6 flex items-center gap-3">
              <PrimaryButton href="#projects">View Projects</PrimaryButton>
              <GhostButton href="#contact">Contact Me</GhostButton>
            </div>
            <div className="mt-4 flex gap-2">
              <Pill>Software Engineer</Pill>
              <Pill>Data Engineer</Pill>
              <Pill>CS + Business Analytics, DePauw</Pill>
              <Pill>GPA 3.95</Pill>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Card = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="rounded-2xl border border-neutral-800 p-5 bg-neutral-900/40"
  >
    <h3 className="font-semibold mb-3">{title}</h3>
    {children}
  </motion.div>
);

const TagList = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <span key={t} className="text-xs rounded-full bg-neutral-800 px-2.5 py-1 border border-neutral-700">
        {t}
      </span>
    ))}
  </div>
);

const About = () => (
  <Section id="about" title="About" subtitle="Quick snapshot of who I am and how I work.">
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Bio">
        <p>
          Senior at DePauw University studying Computer Science and Business Analytics. I ship full stack apps and data pipelines. I focus on clarity, reliability, and measurable impact.
        </p>
      </Card>
      <Card title="Skills">
        <TagList
          items={[
            "Python","Java","SQL","Stata","JavaScript","React","Vue","ASP.NET","MSAL","pandas","scikit-learn","Firebase","MySQL","Power Query","Azure DevOps"
          ]}
        />
      </Card>
      <Card title="Highlights">
        <ol className="space-y-2 text-neutral-300 text-sm">
          <li>1st Prize TigerHacks Spring 2024 for DeFind</li>
          <li>Top 25 Harvard Global Case Competition</li>
          <li>Internships at Parker Hannifin and BCforward</li>
        </ol>
      </Card>
    </div>
  </Section>
);

const PROJECTS = [
  {
    title: "DeFind - Accessibility Map",
    blurb: "Real time campus accessibility map using Google API so students can share ramp, elevator, and door info.",
    stack: ["React", "Firebase", "Google Maps API"],
    highlights: ["Live updates from contributors","Role based moderation","Won 1st Prize at TigerHacks"],
    codeUrl: "https://github.com/buikhueanh/DeFind",
    demoUrl: "https://www.youtube.com/watch?v=hgdK3gzxcAc",
    image: null,
  },
  {
    title: "DeCarpool - Student Rides",
    blurb: "Carpool app connecting students who have cars with those who need rides. Focus on affordability and safety.",
    stack: ["Java", "Firebase"],
    highlights: ["Driver verification","Ratings and chat","Schedule board"],
    codeUrl: "https://github.com/buikhueanh/DeRiver_Carpool_App",
    demoUrl: "https://github.com/buikhueanh/DeRiver_Carpool_App/blob/main/README.md",
    image: null,
  },
  {
    title: "CognizenX - Dementia Assisting App",
    blurb: "A cross-platform mobile app to support elderly users with dementia, featuring trivia and memory games involving pattern recognition and finger movement",
    stack: ["MongoDB","React Native"],
    highlights: ["Auth + rules","Responsive UI","Realtime updates"],
    codeUrl: "https://github.com/CognizenX/CognizenX_Backend/tree/main",
    demoUrl: "https://apps.apple.com/us/app/cognizenx/id6745492895",
    image: null,
  },
    {
    title: "M&A Strategy for IBM and Equinix",
    blurb: "Developed a comprehensive M&A strategy leveraging data analytics and market research.",
    stack: ["Python","Stata","scikit-learn"],
    highlights: ["Feature engineering","Model comparison","Visualization"],
    codeUrl: "#",
    demoUrl: "https://www.linkedin.com/posts/anh-k-bui-b3954b212_our-teams-submission-activity-7201612458157895681-f_sY/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXUcJ0BGurgccmhxYHT35HQVRcPJ7Q7kis",
    image: null,
  },
];

const Projects = () => (
  <Section id="projects" title="Projects" subtitle="Selected work that shows both software engineering and data engineering depth.">
    <div className="grid md:grid-cols-2 gap-6">
      {PROJECTS.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  </Section>
);

const ProjectCard = ({ project }) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 overflow-hidden"
  >
    {project.image ? (
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    ) : (
      <div className="w-full h-2 bg-gradient-to-r from-cyan-500/60 via-transparent to-transparent" />
    )}
    <div className="p-5">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{project.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="text-[10px] uppercase tracking-wide rounded bg-neutral-800 px-2 py-1 border border-neutral-700">
            {s}
          </span>
        ))}
      </div>
      <ul className="mt-3 space-y-1 text-sm text-neutral-300">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-500" /> {h}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-2xl px-5 py-2 text-sm font-semibold shadow-lg shadow-cyan-500/10 bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-neutral-900 transition"
        >
          Demo
        </a>
        <GhostButton href={project.codeUrl}>Code</GhostButton>
      </div>
    </div>
  </motion.article>
);

const Resume = () => (
  <Section id="resume" title="Resume" subtitle="View it inline or download the PDF.">
    <div className="rounded-2xl border border-neutral-800 overflow-hidden">
      <iframe
        src={resumePdf}
        title="Resume"
        className="w-full h-[720px]"
      />
    </div>
    <div className="mt-4">
      <PrimaryButton href="/resume.pdf">Download</PrimaryButton>
    </div>
  </Section>
);

const Contact = () => {
  return (
    <Section id="contact" title="Contact" subtitle="I read every message.">
      <div className="grid gap-6 items-start">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-neutral-300">GitHub</h4>
            <a href="https://github.com/buikhueanh" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://github.com/buikhueanh</a>
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-300">Email</h4>
            <a href="mailto:anhkhuebui.work@gmail.com" className="text-cyan-400 hover:underline">anhkhuebui.work@gmail.com</a>
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral-300">LinkedIn</h4>
            <a href="https://www.linkedin.com/in/anh-k-bui-b3954b212/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">https://www.linkedin.com/in/anh-k-bui-b3954b212/</a>
            <div className="mt-3">
              <a
                href="https://www.linkedin.com/in/anh-k-bui-b3954b212/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-lg shadow-cyan-500/10 bg-cyan-500 hover:bg-cyan-400 text-neutral-900"
              >
                Let's connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Footer = () => (
  <footer className="py-10">
    <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
      <p>© {new Date().getFullYear()} Anh Bui. Built with React, Tailwind, Vite, and Framer Motion.</p>
      <div className="flex items-center gap-4">
        <a className="hover:text-white" href="https://github.com/buikhueanh" target="_blank" rel="noreferrer">GitHub</a>
        <a className="hover:text-white" href="https://www.linkedin.com/in/anh-k-bui-b3954b212/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="hover:text-white" href="mailto:anhkhuebui.work@gmail.com">Email</a>
      </div>
    </Container>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
