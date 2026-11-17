import { FormEvent, useState } from "react";

type IconName =
  | "arrow"
  | "automation"
  | "code"
  | "web"
  | "ai"
  | "check"
  | "plus"
  | "mail"
  | "menu"
  | "close";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    automation: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="2" />
        <rect x="14" y="14" width="6" height="6" rx="2" />
        <path d="M10 7h3a4 4 0 0 1 4 4v3M14 17h-3a4 4 0 0 1-4-4v-3" />
      </>
    ),
    code: <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" />,
    web: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 9h18M8 4v5" />
      </>
    ),
    ai: (
      <>
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M18.4 5.6l-2.1 2.1m-8.6 8.6-2.1 2.1" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function BrandMark({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <svg
      aria-label="Masar Tech"
      className={className}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={light ? "mark-light" : "mark-dark"} x1="20" y1="76" x2="79" y2="17">
          <stop stopColor={light ? "#74E7FF" : "#00B7DB"} />
          <stop offset="1" stopColor={light ? "#FFFFFF" : "#0656D8"} />
        </linearGradient>
      </defs>
      <path
        d="M18 71V29.5C18 25.36 21.36 22 25.5 22C28.16 22 30.63 23.41 31.98 25.7L47.95 52.73L63.92 25.7C65.27 23.41 67.74 22 70.4 22C74.54 22 77.9 25.36 77.9 29.5V47"
        stroke={light ? "#FFFFFF" : "#07204A"}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 71H78V41M63.5 41H78V55.5"
        stroke={`url(#${light ? "mark-light" : "mark-dark"})`}
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className="logo" href="#top" aria-label="Masar Tech home">
      <BrandMark light={light} className="logo__mark" />
      <span className={light ? "logo__type logo__type--light" : "logo__type"}>
        MASAR <b>TECH</b>
      </span>
    </a>
  );
}

const services = [
  {
    number: "01",
    icon: "automation" as IconName,
    title: "Automation",
    text: "Connect your tools, streamline operations, and turn repetitive work into reliable automated flows.",
    points: ["Workflow automation", "System integrations", "Business process design"],
  },
  {
    number: "02",
    icon: "code" as IconName,
    title: "Software Systems",
    text: "Custom systems engineered around how your business actually works — secure, scalable, and built to last.",
    points: ["Business platforms", "Internal tools", "API architecture"],
  },
  {
    number: "03",
    icon: "web" as IconName,
    title: "Web & App",
    text: "High-performance digital products that feel intuitive, look distinctive, and move your business forward.",
    points: ["Web applications", "Mobile experiences", "Product design"],
  },
  {
    number: "04",
    icon: "ai" as IconName,
    title: "AI Solutions",
    text: "Practical AI that works inside your business — enhancing decisions, service, and everyday productivity.",
    points: ["AI assistants", "Data intelligence", "Smart operations"],
  },
];

const solutions = [
  {
    id: "automation",
    label: "Automation Hub",
    title: "One clear view of every moving part.",
    text: "A centralized operations layer that connects teams, tasks, data, and approvals — so work moves without friction.",
    tags: ["Operations", "Workflows", "Analytics"],
    metric: "Workflow",
    metricLabel: "Automation concept",
  },
  {
    id: "platform",
    label: "Business Platform",
    title: "Software shaped around your operation.",
    text: "A modular business system that replaces scattered tools with one secure, scalable source of truth.",
    tags: ["Custom software", "Cloud", "Integrations"],
    metric: "Custom",
    metricLabel: "Business software concept",
  },
  {
    id: "ai",
    label: "AI Workspace",
    title: "Intelligence built into the daily workflow.",
    text: "A focused AI layer for finding answers, creating content, and making faster decisions with your own knowledge.",
    tags: ["AI assistant", "Knowledge", "Insights"],
    metric: "AI",
    metricLabel: "AI workspace concept",
  },
];

function ProductVisual({ active }: { active: number }) {
  return (
    <div className={`product-visual product-visual--${active + 1}`}>
      <div className="product-visual__bar">
        <div className="mini-logo">
          <BrandMark light className="mini-logo__mark" />
        </div>
        <span>MASAR / WORKSPACE</span>
        <div className="avatar">MT</div>
      </div>
      <div className="product-visual__body">
        <aside className="visual-nav">
          <span className="visual-nav__active" />
          <span />
          <span />
          <span />
          <span />
        </aside>
        <div className="visual-content">
          <div className="visual-heading">
            <div>
              <span>{solutions[active].label}</span>
              <b>Overview</b>
            </div>
            <button aria-label="Add new item">
              <Icon name="plus" />
            </button>
          </div>
          <div className="visual-grid">
            <div className="metric-card">
              <span>SOLUTION CONCEPT</span>
              <strong>{solutions[active].metric}</strong>
              <small>{solutions[active].metricLabel}</small>
              <div className="metric-line">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="status-card">
              <span>CONCEPT MODULES</span>
              <div>
                <i /> Core platform <b>Demo</b>
              </div>
              <div>
                <i /> Data workflow <b>Demo</b>
              </div>
              <div>
                <i /> Intelligence layer <b>Demo</b>
              </div>
            </div>
            <div className="chart-card">
              <div className="chart-card__head">
                <span>ACTIVITY</span>
                <b>Illustrative data</b>
              </div>
              <svg viewBox="0 0 500 130" role="img" aria-label="Rising activity chart">
                <defs>
                  <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop stopColor="#45DDF0" stopOpacity=".35" />
                    <stop offset="1" stopColor="#45DDF0" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 114C54 104 77 71 125 82S196 105 242 70s69-48 106-23 65 42 92 8 42-38 60-36V130H0Z"
                  fill="url(#chart-fill)"
                />
                <path
                  d="M0 114C54 104 77 71 125 82S196 105 242 70s69-48 106-23 65 42 92 8 42-38 60-36"
                  fill="none"
                  stroke="#45DDF0"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const submitConsultation = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setFormStatus("");
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not send request.");
      form.reset();
      setFormStatus("Your request was sent successfully. I'll reply by email.");
    } catch (error) {
      setFormStatus(error instanceof Error ? error.message : "Please try again or email directly.");
    } finally { setSubmitting(false); }
  };

  return (
    <main id="top">
      <header className="nav-shell">
        <Logo />
        <nav
          className={menuOpen ? "main-nav main-nav--open" : "main-nav"}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>
            Solutions
          </a>
          <a href="#process" onClick={() => setMenuOpen(false)}>
            Process
          </a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Start a project <Icon name="arrow" />
          </a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <section className="hero-section">
        <div className="hero-section__glow" />
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>Technology with direction</span>
            <i />
          </div>
          <h1>
            Building the path
            <br />
            <em>to what’s next.</em>
          </h1>
          <p>
            We design and build automation, software systems, digital products, and AI solutions
            that make ambitious businesses move smarter.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#contact">
              Book a consultation <Icon name="arrow" />
            </a>
            <a className="button button--text" href="#services">
              Explore our services <span>↓</span>
            </a>
          </div>
          <div className="hero-proof">
            <span>ONE TECHNOLOGY PARTNER</span>
            <div>
              <i />
              <i />
              <i />
            </div>
            <p>From first idea to a scalable working system.</p>
          </div>
        </div>

        <div className="hero-art" aria-label="Masar Tech technology path illustration">
          <div className="hero-art__orbit hero-art__orbit--one" />
          <div className="hero-art__orbit hero-art__orbit--two" />
          <div className="hero-art__grid" />
          <div className="path-card path-card--automation">
            <Icon name="automation" />
            <span>Automation</span>
            <i>Live</i>
          </div>
          <div className="path-card path-card--ai">
            <Icon name="ai" />
            <span>AI engine</span>
            <i>Ready</i>
          </div>
          <div className="hero-mark-wrap">
            <BrandMark light className="hero-mark" />
          </div>
          <svg className="hero-path" viewBox="0 0 600 640" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="hero-line" x1="74" y1="530" x2="536" y2="98">
                <stop stopColor="#45DDF0" />
                <stop offset="1" stopColor="#0875E1" />
              </linearGradient>
            </defs>
            <path
              d="M55 550 204 401l106 106L530 287"
              stroke="url(#hero-line)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M450 287h80v80"
              stroke="url(#hero-line)"
              strokeWidth="11"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hero-art__label hero-art__label--top">MASAR / 01</span>
          <span className="hero-art__label hero-art__label--bottom">THE DIGITAL PATH</span>
        </div>
      </section>

      <div className="capability-strip" aria-label="Masar Tech capabilities">
        <div>
          <span>Automation</span>
          <i />
          <span>Software Systems</span>
          <i />
          <span>Web & App</span>
          <i />
          <span>AI Solutions</span>
          <i />
          <span>Automation</span>
        </div>
      </div>

      <section className="about-section section-shell" id="about">
        <div className="section-label">
          <span>01</span> About Masar
        </div>
        <div className="about-layout">
          <div className="about-heading">
            <h2>
              Technology is only powerful when it has <em>direction.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              Masar means <b>path</b>. It is how we think about technology: not as disconnected
              tools, but as one clear route from a business challenge to measurable progress.
            </p>
            <p>
              We bring strategy, design, engineering, automation, and AI into one founder-led studio —
              building systems that are easier to use, easier to scale, and ready for what comes
              next.
            </p>
            <a href="#process">
              How we work <Icon name="arrow" />
            </a>
          </div>
        </div>
        <div className="value-grid">
          <div>
            <span>01 /</span>
            <b>Business first</b>
            <p>Every technical decision starts with a real operational goal.</p>
          </div>
          <div>
            <span>02 /</span>
            <b>Built as one</b>
            <p>Strategy, design, software, and intelligence work as one system.</p>
          </div>
          <div>
            <span>03 /</span>
            <b>Ready to scale</b>
            <p>Clear foundations that grow with your team and your ambitions.</p>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-shell">
          <div className="section-label section-label--light">
            <span>02</span> What we do
          </div>
          <div className="services-heading">
            <h2>
              Four capabilities.
              <br />
              <em>One clear path.</em>
            </h2>
            <p>
              Everything your business needs to turn a complex challenge into a focused, working
              digital solution.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card__top">
                  <span>{service.number}</span>
                  <div>
                    <Icon name={service.icon} />
                  </div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>
                      <Icon name="check" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a href="#contact" aria-label={`Discuss ${service.title}`}>
                  Discuss your project <Icon name="arrow" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section section-shell" id="solutions">
        <div className="section-label">
          <span>03</span> What we build
        </div>
        <div className="solutions-intro">
          <h2>
            Digital solutions designed around <em>real work.</em>
          </h2>
          <p>
            Not software for the sake of software. Focused systems that remove friction and create
            momentum across your business.
          </p>
        </div>
        <div className="solutions-layout">
          <div className="solution-tabs">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                className={
                  activeSolution === index ? "solution-tab solution-tab--active" : "solution-tab"
                }
                onClick={() => setActiveSolution(index)}
                type="button"
              >
                <span>0{index + 1}</span>
                <div>
                  <b>{solution.label}</b>
                  <p>{solution.title}</p>
                </div>
                <Icon name="arrow" />
              </button>
            ))}
          </div>
          <div className="solution-showcase">
            <ProductVisual active={activeSolution} />
            <div className="solution-caption">
              <p>{solutions[activeSolution].text}</p>
              <div>
                {solutions[activeSolution].tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-shell">
          <div className="section-label section-label--light">
            <span>04</span> Our process
          </div>
          <div className="process-heading">
            <h2>
              From complexity
              <br />
              to a <em>clear path.</em>
            </h2>
            <p>
              A focused process built to keep decisions sharp, progress visible, and every stage
              connected to the business goal.
            </p>
          </div>
          <div className="process-track">
            {[
              [
                "Discover",
                "We understand the challenge, the users, and what progress should look like.",
              ],
              [
                "Define",
                "We shape the right solution, scope the system, and build a clear roadmap.",
              ],
              [
                "Design & Build",
                "We prototype, engineer, test, and refine as one focused engineering workflow.",
              ],
              [
                "Launch & Evolve",
                "We launch with confidence, measure performance, and improve what matters.",
              ],
            ].map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div className="process-dot">
                  <i />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="consultation-section" id="contact">
        <div className="consultation-panel">
          <div className="consultation-copy">
            <span className="consultation-kicker">START A PROJECT</span>
            <h2>
              Let’s find the smartest path <em>forward.</em>
            </h2>
            <p>
              Tell us what you are building, improving, or trying to solve. We will help you turn it
              into a clear next step.
            </p>
            <div className="consultation-contact">
              <span>Prefer email?</span>
              <a href="mailto:abdallahsay10@gmail.com">
                <Icon name="mail" /> abdallahsay10@gmail.com
              </a>
            </div>
          </div>
          <form className="consultation-form" onSubmit={submitConsultation}>
            <div className="form-row">
              <label>
                <span>Your name</span>
                <input name="name" placeholder="Your name" minLength={2} maxLength={120} required />
              </label>
              <label>
                <span>Work email</span>
                <input name="email" type="email" placeholder="you@company.com" required />
              </label>
            </div>
            <label>
              <span>Company</span>
              <input name="company" placeholder="Your company name" />
            </label>
            <label>
              <span>What can we help you build?</span>
              <textarea
                name="project"
                minLength={10}
                placeholder="Tell us a little about your project, challenge, or idea..."
                required
              />
            </label>
            <button className="button button--primary" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Request a consultation"} <Icon name="arrow" />
            </button>
            <small>Requests are processed securely. {formStatus && <span role="status" aria-live="polite">{formStatus}</span>}</small>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <Logo light />
            <p>
              Automation, software systems, digital products, and AI solutions — built with
              direction.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <span>EXPLORE</span>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#solutions">Solutions</a>
              <a href="#process">Process</a>
            </div>
            <div>
              <span>CONNECT</span>
              <a href="mailto:abdallahsay10@gmail.com">Email</a>
              <a href="#contact">Consultation</a>
              <a href="/masar-tech-canva-kit.zip" download>
                Brand kit
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MASAR TECH. ALL RIGHTS RESERVED.</span>
          <span>BUILDING THE PATH FORWARD.</span>
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}