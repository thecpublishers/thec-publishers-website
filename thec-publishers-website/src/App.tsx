import { FormEvent, ReactNode, useEffect, useState } from "react";
import companyGraphic from "./imports/WhatsApp_Image_2026-08-19_at_3.45.09_PM.jpeg";

const logo = "https://thecpublishers.com/wp-content/uploads/2025/05/cropped-Thec-Logo-2.png";
const heroPhoto =
  "https://images.unsplash.com/photo-1721468184185-214871ec4411?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=1400";

const nav = [
  ["Home", "/"],
  ["About", "/about-us/"],
  ["Services", "/services/"],
  ["Portfolio", "/published-books/"],
  ["Blog", "/blog/"],
  ["Contact", "/contact/"],
];

const services = [
  ["✦", "Ghostwriting", "Shape an original idea or early draft into a clear, compelling manuscript in your voice."],
  ["Aa", "Editing & Proofreading", "Strengthen structure, language, consistency, and accuracy at every editorial stage."],
  ["▤", "Printing & Consultation", "Make informed production decisions, from paper and finishing to print quantity."],
  ["#", "Digital Publishing & ISBN", "Prepare your title for digital channels and navigate ISBN procurement with guidance."],
  ["↗", "Marketing & Distribution", "Build a practical plan to introduce your book to its intended readers and channels."],
  ["“ ”", "Transcription Services", "Turn recorded conversations, teaching, and spoken ideas into accurate written material."],
];

const books = [
  ["Fund It", "https://thecpublishers.com/wp-content/uploads/2025/07/fund-it-300x300.jpeg"],
  ["Second Halve", "https://thecpublishers.com/wp-content/uploads/2025/07/second-halve-300x300.jpeg"],
  ["Tyrannus", "https://thecpublishers.com/wp-content/uploads/2025/07/tyrannus-300x300.jpeg"],
  ["Wisdom", "https://thecpublishers.com/wp-content/uploads/2025/07/wisdom-300x300.jpeg"],
  ["Logistics", "https://thecpublishers.com/wp-content/uploads/2025/07/logistics-300x300.jpeg"],
  ["Palace of Thieves", "https://thecpublishers.com/wp-content/uploads/2025/07/palace-of-thieves-300x300.jpeg"],
  ["Whisper in Bukavu", "https://thecpublishers.com/wp-content/uploads/2025/07/whisper-in-bukavu-300x300.jpeg"],
  ["Extra Ordinary", "https://thecpublishers.com/wp-content/uploads/2025/07/extra-ordinary-300x300.jpeg"],
];

const faqs = [
  [
    "What services does Thec Writers & Publishers offer?",
    "We support authors with ghostwriting, editing and proofreading, printing and publishing consultation, digital publishing and ISBN procurement, marketing and distribution planning, and transcription services.",
  ],
  [
    "How long does publishing take?",
    "Timelines depend on manuscript length, readiness, the services required, and the production plan. After reviewing your project, our team will outline a realistic schedule.",
  ],
  [
    "Who retains the rights to a published book?",
    "Rights arrangements depend on the publishing agreement selected for the project. We recommend discussing your preferred arrangement during consultation so terms are clear up front.",
  ],
  [
    "What formats can a book be published in?",
    "Depending on your goals, a project may be prepared for print and digital formats. The suitable formats, trim size, and production specifications are confirmed during production planning.",
  ],
  [
    "How much does publishing cost?",
    "Every project has different editorial and production needs. Contact us with your manuscript details for a tailored estimate rather than a one-size-fits-all price.",
  ],
  [
    "How do I begin my publishing journey?",
    "Start by completing the publishing enquiry form or speaking with our team on WhatsApp. Tell us where your manuscript is now and what you hope to achieve.",
  ],
];

function Icon({ name }: { name: "arrow" | "menu" | "close" | "check" | "plus" | "mail" | "phone" | "pin" }) {
  const paths: Record<string, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    plus: <><path d="M5 12h14M12 5v14" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M6.6 3h3l1.5 4-2 1.5a15 15 0 0 0 6.4 6.4l1.5-2 4 1.5v3c0 2-1.6 3.6-3.6 3.6C9.4 21 3 14.6 3 6.6 3 4.6 4.6 3 6.6 3Z" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  };
  return <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function LinkButton({ href, children, secondary = false, light = false }: { href: string; children: ReactNode; secondary?: boolean; light?: boolean }) {
  return <a className={`button ${secondary ? "button-secondary" : ""} ${light ? "button-light" : ""}`} href={href}>{children}<Icon name="arrow" /></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="site-header">
      <a href="/" className="brand" aria-label="Thec Writers & Publishers, home">
        <img src={logo} alt="Thec Writers & Publishers" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="/publish-your-book/">Publish Your Book <Icon name="arrow" /></a>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
        <Icon name={open ? "close" : "menu"} />
      </button>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {nav.map(([label, href], i) => <a key={label} href={href}><span>0{i + 1}</span>{label}</a>)}
          <a className="mobile-cta" href="/publish-your-book/">Publish Your Book <Icon name="arrow" /></a>
        </nav>
      </div>
    </header>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>;
}

function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "center" : ""}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function Hero() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>Empowering African ideas.</Eyebrow>
          <h1>Your story deserves to become a <em>book.</em></h1>
          <p>From the first idea to the finished book, we help authors develop, refine, publish, print, and share their work with confidence.</p>
          <div className="button-row">
            <LinkButton href="/publish-your-book/">Publish Your Book</LinkButton>
            <LinkButton href="/services/" secondary>Explore Our Services</LinkButton>
          </div>
          <div className="hero-note"><span>Based in Nigeria</span><span>Supporting authors everywhere</span></div>
        </div>
        <div className="hero-visual">
          <img src={heroPhoto} alt="An author writing thoughtfully at a desk" />
          <div className="hero-caption"><span>01</span><p>Ideas deserve careful attention, honest guidance, and beautiful execution.</p></div>
          <div className="hero-stamp">We bring<br />your words<br /><strong>to life.</strong></div>
        </div>
      </section>

      <section className="trust" aria-label="Why authors work with Thec">
        {[
          ["Editorial expertise", "Careful hands for every manuscript"],
          ["End-to-end support", "From first draft to finished book"],
          ["Production quality", "Every detail considered"],
          ["Author advocacy", "Your vision stays at the centre"],
        ].map(([title, copy], i) => <div key={title} className="trust-item"><span>0{i + 1}</span><div><strong>{title}</strong><p>{copy}</p></div></div>)}
      </section>

      <section className="section services-section" id="services">
        <div className="section-intro">
          <SectionHeading eyebrow="How we help" title="Every chapter of your publishing journey." />
          <p>Professional support designed around where your book is now—and where you want it to go.</p>
        </div>
        <div className="service-grid">
          {services.map(([icon, title, copy], i) => (
            <article className="service-card" key={title}>
              <div className="service-top"><span className="service-icon">{icon}</span><span className="card-number">0{i + 1}</span></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href={`/services/${title.toLowerCase().replaceAll(" & ", "-and-").replaceAll(" ", "-")}/`}>Learn more <Icon name="arrow" /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-section">
        <div className="about-visual">
          <div className="image-frame"><img src={companyGraphic} alt="Thec Prints and Publishing operational entities and services" /></div>
          <div className="about-index"><span>Since</span><strong>2024</strong><small>Keffi, Nigeria</small></div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="About Thec" title="Turning ideas into books that matter." />
          <p className="lead">Publishing a book can feel complex. We make the journey clearer—with professional guidance, attention to quality, and deep respect for the author’s vision.</p>
          <ul>
            <li>Professional writing and editorial support</li>
            <li>Personalised publishing guidance</li>
            <li>Transparent communication</li>
            <li>Attention to production quality</li>
            <li>Support throughout the publishing journey</li>
          </ul>
          <LinkButton href="/about-us/" secondary>Discover Our Story</LinkButton>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-head section">
          <SectionHeading eyebrow="Selected work" title="Books brought to life." copy="A selection of titles published with Thec Writers & Publishers." />
          <LinkButton href="/published-books/" secondary>View all books</LinkButton>
        </div>
        <div className="book-rail">
          {books.map(([title, src], i) => (
            <a href="/published-books/" className="book-card" key={title}>
              <div className="book-cover"><img src={src} alt={`${title} book cover`} loading="lazy" /></div>
              <h3>{title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <SectionHeading eyebrow="Our process" title="A clear path from manuscript to market." copy="A thoughtful, collaborative process keeps every decision focused and every stage visible." />
        <div className="process-grid">
          {[
            ["Consultation", "We understand your vision, manuscript, audience, and requirements."],
            ["Manuscript Development", "Writing, editing, and preparation are shaped around what your work needs."],
            ["Production", "Design, formatting, and printing arrangements bring the book together."],
            ["Publication & Promotion", "We prepare your title for its intended channels and audience."],
          ].map(([title, copy], i) => <article key={title}><div className="step-line"><span>0{i + 1}</span><i /></div><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="section team-section">
        <div className="section-intro"><SectionHeading eyebrow="Our people" title="A small team with a serious commitment to books." /><p>The people guiding projects, supporting authors, and keeping everything focused on the work.</p></div>
        <div className="team-grid">
          {[["PE", "Paul Elijah", "Founder & CEO"], ["JM", "Joshua Caleb Mechi", "Human Resources"], ["AA", "Aardhan Abdull", "Project Manager"]].map(([initials, name, role]) => (
            <article className="team-card" key={name as string}><div className="team-photo" aria-label={`Photo placeholder for ${name}`}><span>{initials}</span><small>Official photo to be added</small></div><h3>{name}</h3><p>{role}</p></article>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-mark">“</div>
        <Eyebrow>Author stories</Eyebrow>
        <h2>Every book begins with trust.</h2>
        <p>Verified author experiences will be shared here as they become available. We never publish invented endorsements.</p>
        <a href="/contact/">Work with our team <Icon name="arrow" /></a>
      </section>


      <section className="section faq-section">
        <div>
          <SectionHeading
            eyebrow="Frequently asked"
            title="Questions before the first page."
          />
          <p className="faq-intro">
            Every book is different. These answers cover the essentials, and our team is happy to discuss specifics for your project.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <Faq key={q} question={q} answer={a} index={i} />
          ))}
        </div>
      </section>


      <section className="cta-section">
        <div><Eyebrow>Your next chapter</Eyebrow><h2>Ready to bring your book to life?</h2><p>Tell us about your manuscript and let us help you plan your next step.</p></div>
        <div className="button-row"><LinkButton href="/publish-your-book/" light>Start Your Publishing Journey</LinkButton><a className="text-link-light" href="http://wa.link/2u3nsm" target="_blank" rel="noreferrer">Chat on WhatsApp <Icon name="arrow" /></a></div>
      </section>
    </main>
  );
}

function Faq({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return <div className={`faq-item ${open ? "active" : ""}`}><h3><button type="button" onClick={() => setOpen(!open)} aria-expanded={open}><span>{question}</span><Icon name="plus" /></button></h3><div className="faq-answer"><p>{answer}</p></div></div>;
}

function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { setStatus("error"); form.reportValidity(); return; }
    setStatus("success");
  }
  return (
    <form className="enquiry-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label><span>Full name</span><input name="name" required placeholder="Your name" /></label>
        <label><span>Email address</span><input name="email" required type="email" placeholder="you@example.com" /></label>
        <label><span>Phone number</span><input name="phone" required type="tel" placeholder="+234" /></label>
        <label><span>Service needed</span><select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(([, title]) => <option key={title}>{title}</option>)}</select></label>
        <label className="full"><span>Tell us about your book</span><textarea name="message" required rows={6} placeholder="What stage is your manuscript at, and what support do you need?" /></label>
      </div>
      <button className="button" type="submit">Review my enquiry <Icon name="arrow" /></button>
      <p className="form-note">This preview validates your information but does not send or store enquiries yet. You can contact the team directly by email or WhatsApp.</p>
      {status === "error" && <p className="form-status error" role="alert">Please complete all required fields with valid information.</p>}
      {status === "success" && <p className="form-status success" role="status">Your details look ready. Direct submission will be enabled when the site’s form integration is connected.</p>}
    </form>
  );
}

const pageContent: Record<string, { eyebrow: string; title: string; intro: string; kind?: string }> = {
  "/about-us/": {
    eyebrow: "About Thec",
    title: "A publishing partner for ideas that deserve to travel.",
    intro: "Founded in 2024 by Paul Elijah, Thec Writers & Publishers helps writers move from possibility to publication with practical, transparent support.",
    kind: "about",
  },
  "/services/": { eyebrow: "Our services", title: "Professional support for every stage of the book.", intro: "Choose the guidance your manuscript needs — from writing and editorial development to print and publishing support.", kind: "services" },
  "/published-books/": { eyebrow: "Published books", title: "A growing shelf of African ideas.", intro: "Explore selected titles brought to life with Thec Writers & Publishers.", kind: "books" },
  "/blog/": { eyebrow: "The journal", title: "Practical thinking for serious authors.", intro: "Publishing guidance, editorial perspectives, and useful ideas for writers. Current posts are on our WordPress blog.", kind: "blog" },
  "/careers/": { eyebrow: "Careers", title: "Help us bring important words to life.", intro: "Future opportunities with Thec Writers & Publishers will be published here. No open roles are currently listed.", kind: "careers" },
  "/referral-program/": { eyebrow: "Referral programme", title: "Introduce a writer to the right publishing support.", intro: "This page is prepared for the existing referral programme. Confirmed terms and reporting can be added when the programme is active.", kind: "referral" },
  "/bookstore/": { eyebrow: "Bookstore", title: "Discover books published with Thec.", intro: "The future storefront can connect to the existing WooCommerce catalogue. Products, accounts, and orders will be managed there.", kind: "bookstore" },
  "/contact/": { eyebrow: "Contact", title: "Let’s talk about your book.", intro: "Tell us where you are in the publishing journey. Our team is available Monday to Saturday, 9:00 AM–5:00 PM.", kind: "contact" },
  "/publish-your-book/": { eyebrow: "Publishing enquiry", title: "Your book starts with a conversation.", intro: "Share a little about your manuscript, goals, and the support you need. We’ll help you plan the next step.", kind: "enquiry" },
};

function InnerPage({ data }: { data: { eyebrow: string; title: string; intro: string; kind?: string } }) {
  return <main className="inner-page"><section className="inner-hero"><Eyebrow>{data.eyebrow}</Eyebrow><h1>{data.title}</h1><p>{data.intro}</p></section>
    {data.kind === "services" && (
      <section className="section service-list">
        <div className="section-intro"><SectionHeading eyebrow="Our services" title="How we work with authors." copy="Select a service below to learn what it includes." /></div>
        <div className="service-grid">
          {services
            .filter(([, title]) => ["Ghostwriting", "Editing & Proofreading", "Printing & Consultation", "Marketing & Distribution", "Transcription Services"].includes(title))
            .map(([icon, title, copy], i) => (
              <article className="service-card" key={title}>
                <div className="service-top"><span className="service-icon">{icon}</span><span className="card-number">0{i + 1}</span></div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ul>
                  {title === "Ghostwriting" && <><li>Concept development and structure</li><li>Full manuscript writing in your voice</li><li>Collaboration and revision rounds</li></>}
                  {title === "Editing & Proofreading" && <><li>Structural and developmental editing</li><li>Line editing for clarity and tone</li><li>Proofreading before publication</li></>}
                  {title === "Printing & Consultation" && <><li>Advice on paper, trim size and finishes</li><li>Print-on-demand and short-run options</li><li>Costing and supplier coordination</li></>}
                  {title === "Marketing & Distribution" && <><li>Audience and channel planning</li><li>Metadata and retailer preparation</li><li>Launch and ongoing promotion advice</li></>}
                  {title === "Transcription Services" && <><li>Accurate transcription of interviews and recordings</li><li>Speaker attribution and timestamping options</li><li>Turnaround time estimate and file handling</li></>}
                </ul>
              </article>
            ))}
        </div>
        <p className="note">Digital publishing and ISBN support are also available as part of our production services.</p>
      </section>
    )}

    {data.kind === "books" && (
      <section className="section book-page-grid">
        {books.map(([title, src]) => (
          <article className="book-card" key={title}>
            <div className="book-cover"><img src={src} alt={`${title} book cover`} loading="lazy" /></div>
            <h3>{title}</h3>
            <a href="/published-books/">View details</a>
          </article>
        ))}
      </section>
    )}

    {data.kind === "about" && (
      <section className="section about-story">
        <SectionHeading eyebrow="Our approach" title="Author-centred, quality-minded." />
        <p>We help authors navigate publishing with clarity and care. Our services are designed to match the needs of the manuscript and the goals of the author — whether the project requires writing, editing, production, or marketing support.</p>

        <div className="about-sections">
          <article>
            <h3>Company</h3>
            <p>Thec Writers & Publishers was founded in 2024 and operates from Keffi, Nasarawa State. We combine editorial experience with practical production knowledge to help writers publish reliably and with confidence.</p>
          </article>

          <article>
            <h3>Author support</h3>
            <ul>
              <li>Ghostwriting and manuscript development</li>
              <li>Comprehensive editing (developmental, line, and proofreading)</li>
              <li>Publishing guidance and contract clarity</li>
              <li>Marketing and distribution planning</li>
            </ul>
          </article>

          <article>
            <h3>Our publishing process</h3>
            <ol>
              <li><strong>Consultation:</strong> We discuss your idea, goals, and timeline.</li>
              <li><strong>Manuscript development:</strong> Writing and editing to prepare a publishable manuscript.</li>
              <li><strong>Production:</strong> Design, typesetting, and printing coordination.</li>
              <li><strong>Publication & promotion:</strong> Retail preparation, metadata, and launch support.</li>
            </ol>
          </article>
        </div>

        <LinkButton href="/services/" secondary>See our services</LinkButton>
      </section>
    )}

    {data.kind === "blog" && (
      <section className="section empty-state">
        <span>Journal archive</span>
        <h2>Articles and guidance for writers</h2>
        <p>We keep practical editorial and publishing guidance on our WordPress blog. If you’re looking for existing articles and resources, visit our blog where the current archive is hosted.</p>
        <p><a href="https://thecpublishers.com/blog/" target="_blank" rel="noreferrer">Visit the WordPress blog</a></p>
      </section>
    )}

    {data.kind === "contact" && (
      <section className="section contact-layout">
        <div>
          <h2>Start with the essentials.</h2>
          <p><Icon name="mail" /> <a href="mailto:talk2thecservices@gmail.com">talk2thecservices@gmail.com</a></p>
          <p><Icon name="phone" /> <a href="tel:+2347068566254">+234 706 856 6254</a></p>
          <p><Icon name="pin" /> Corporate HQ: Suite 31-34, Hassan Sadiq Plaza, Beside Atlantic Guest Inn, Total Roundabout, Keffi.</p>
          <p><Icon name="pin" /> Fulfilment Office: Etari LLC Building, Beside Youth Center Hall, Inside Youth Center, Keffi.</p>
          <p>Opening hours: Mon–Sat, 9:00 AM–5:00 PM</p>
          <p><a href="http://wa.link/2u3nsm" target="_blank" rel="noreferrer">Chat on WhatsApp <Icon name="arrow" /></a></p>
        </div>
        <div>
          <h3>Publishing enquiry</h3>
          <p>The enquiry form validates your information locally; direct submission will be enabled once a form integration is configured. For immediate contact, email or WhatsApp is the fastest option.</p>
          <EnquiryForm />
        </div>
      </section>
    )}

    {!data.kind && (
      <section className="section empty-state">
        <span>Page template</span>
        <h2>This page is ready for verified content.</h2>
        <p>The layout intentionally avoids inventing programme terms, vacant biographies, or imagined endorsements — content is published only after it is verified with the team.</p>
      </section>
    )}
  </main>;
}

function Footer() {
  return <footer className="footer"><div className="footer-top">
    <div className="footer-brand"><img src={logo} alt="Thec Writers & Publishers" /><p>Professional publishing support for writers, authors, and educators. Empowering African ideas.</p><a href="mailto:talk2thecservices@gmail.com">talk2thecservices@gmail.com</a></div>
    <div><h3>Explore</h3>{[...nav, ["Careers", "/careers/"], ["Referral Program", "/referral-program/"]].map(([l, h]) => <a key={l} href={h}>{l}</a>)}</div>
    <div><h3>Services</h3>{services.slice(0, 5).map(([, title]) => <a key={title} href="/services/">{title}</a>)}</div>
    <div><h3>Visit & contact</h3><p>Corporate HQ: Suite 31-34, Hassan Sadiq Plaza, Beside Atlantic Guest Inn, Total Roundabout, Keffi.</p><p>Fulfilment Office: Etari LLC Building, Beside Youth Center Hall, Inside Youth Center, Keffi.</p><p>+234 706 856 6254</p><p>Mon–Sat, 9:00 AM–5:00 PM</p></div>
  </div><div className="footer-bottom"><p>© {new Date().getFullYear()} Thec Writers & Publishers. All rights reserved.</p><p>Social links will be added when confirmed.</p><a href="/bookstore/">Bookstore</a></div></footer>
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("a");
      if (!target || target.target === "_blank" || target.origin !== window.location.origin) return;
      event.preventDefault();
      window.history.pushState({}, "", target.pathname);
      setPath(target.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const onPop = () => setPath(window.location.pathname);
    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPop);
    return () => { document.removeEventListener("click", onClick); window.removeEventListener("popstate", onPop); };
  }, []);
  const exact = path === "/" ? null : pageContent[path];
  const serviceDetail = path.startsWith("/services/") && path !== "/services/";
  const data = exact ?? (serviceDetail ? { eyebrow: "Publishing service", title: "Expert support shaped around your manuscript.", intro: "Speak with our team to understand the scope, process, timeline, and support you need." } : null);
  return <><Header />{path === "/" ? <Hero /> : data ? <InnerPage data={data} /> : <InnerPage data={{ eyebrow: "Not found", title: "This page has not been published yet.", intro: "Return to the homepage and explore our current services and guidance." }} />}</>;
}

export default App;
