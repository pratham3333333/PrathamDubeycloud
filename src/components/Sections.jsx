import { useState } from "react";
import Icon from "./Icon.jsx";
import { spotlight } from "../hooks.js";
import {
  profile, about, services, process, skills, experience, projects, certifications,
} from "../data.js";

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="section-head">
      <p className="eyebrow reveal">{eyebrow}</p>
      <h2 className="reveal" style={{ "--d": ".08s" }}>{title}</h2>
      {text && <p className="section-head__text reveal" style={{ "--d": ".16s" }}>{text}</p>}
    </div>
  );
}

/* ── Marquee ─────────────────────────────── */
const marqueeItems = ["AWS", "EC2", "S3", "VPC", "Lambda", "IAM", "RDS", "CloudWatch", "Azure", "Linux", "Networking", "React", "JavaScript", "Python", "Git", "Generative AI"];
export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => <span key={i}>{t}<i>✦</i></span>)}
      </div>
    </div>
  );
}

/* ── About ───────────────────────────────── */
export function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__copy">
          <SectionHead eyebrow="About me" title="Cloud engineer who loves to teach" />
          {about.paragraphs.map((p, i) => (
            <p key={i} className="reveal" style={{ "--d": `${0.1 + i * 0.08}s` }}>{p}</p>
          ))}
        </div>
        <div className="about__cards">
          {about.highlights.map((h, i) => (
            <div key={h.title} className="card glow reveal" style={{ "--d": `${0.15 + i * 0.1}s` }} onMouseMove={spotlight}>
              <span className="card__num">0{i + 1}</span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services ────────────────────────────── */
export function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Freelance services"
          title="How I can help your business"
          text="From launching your website on AWS to upskilling your team — clear scope, fair pricing and on-time delivery."
        />
        <div className="grid grid--3">
          {services.map((s, i) => (
            <article key={s.title} className="card glow service reveal" style={{ "--d": `${(i % 3) * 0.1}s` }} onMouseMove={spotlight}>
              <div className="icon-box"><Icon name={s.icon} size={24} /></div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="ticks">
                {s.points.map((p) => <li key={p}><Icon name="check" size={16} /> {p}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="process">
          {process.map((p, i) => (
            <div key={p.step} className="process__step reveal" style={{ "--d": `${i * 0.12}s` }}>
              <span className="process__num">{p.step}</span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Skills ──────────────────────────────── */
export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead eyebrow="Toolkit" title="Skills & technologies" />
        <div className="grid grid--3 skills-grid">
          {skills.map((g, i) => (
            <div key={g.group} className="card glow skill reveal" style={{ "--d": `${(i % 3) * 0.1}s` }} onMouseMove={spotlight}>
              <div className="skill__head">
                <div className="icon-box icon-box--sm"><Icon name={g.icon} size={20} /></div>
                <h3>{g.group}</h3>
              </div>
              <div className="chips">
                {g.items.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Experience ──────────────────────────── */
export function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionHead eyebrow="Career" title="Experience" />
        <ol className="timeline">
          {experience.map((e, i) => (
            <li key={e.role + e.org} className="timeline__item reveal" style={{ "--d": `${i * 0.08}s` }}>
              <span className={`timeline__dot ${e.current ? "is-current" : ""}`} />
              <div className="card timeline__card">
                <div className="timeline__top">
                  <div>
                    <h3>{e.role}</h3>
                    <p className="timeline__org">{e.org}</p>
                  </div>
                  {e.period && <span className={`tag ${e.current ? "tag--live" : ""}`}>{e.period}</span>}
                </div>
                <ul className="ticks">
                  {e.points.map((p) => <li key={p}><Icon name="check" size={16} /> {p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── Projects ────────────────────────────── */
export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead eyebrow="Selected work" title="Projects" text="Hands-on cloud builds with measurable results." />
        <div className="grid grid--2">
          {projects.map((p, i) => (
            <article key={p.title} className="card glow project reveal" style={{ "--d": `${(i % 2) * 0.12}s` }} onMouseMove={spotlight}>
              <div className="project__top">
                <span className="project__metric">{p.metric}</span>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                    <Icon name="external" size={20} />
                  </a>
                )}
              </div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <div className="chips">
                {p.tags.map((t) => <span key={t} className="chip chip--sm">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Certifications ──────────────────────── */
export function Certifications() {
  return (
    <section id="certifications" className="section section--alt section--tight">
      <div className="container">
        <SectionHead eyebrow="Credentials" title="Certifications" />
        <div className="grid grid--3">
          {certifications.map((c, i) => (
            <div key={c.title} className="card glow cert reveal" style={{ "--d": `${i * 0.1}s` }} onMouseMove={spotlight}>
              <div className="cert__badge"><Icon name="award" size={28} /></div>
              <span className="tag">{c.level}</span>
              <h3>{c.title}</h3>
              <p>{c.issuer}{c.year && ` · ${c.year}`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ─────────────────────────────── */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: services[0].title, message: "" });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = `Project enquiry: ${form.service}`;
    const body = `Hi Pratham,\n\n${form.message}\n\nName: ${form.name}\nEmail: ${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const channels = [
    { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: "whatsapp", label: "WhatsApp", value: profile.phone, href: `https://wa.me/${profile.whatsapp}` },
    { icon: "phone", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: "pin", label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__wrap reveal">
          <div className="contact__info">
            <p className="eyebrow">Let's work together</p>
            <h2>Have a project in mind?</h2>
            <p className="contact__lead">
              Tell me what you need — a cloud setup, a new website, or a training workshop. I usually reply within 24 hours.
            </p>
            <ul className="channels">
              {channels.map((c) => (
                <li key={c.label}>
                  <span className="icon-box icon-box--sm"><Icon name={c.icon} size={18} /></span>
                  <div>
                    <small>{c.label}</small>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{c.value}</a>
                    ) : <span>{c.value}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className="form" onSubmit={submit}>
            <div className="form__row">
              <label>
                <span>Your name</span>
                <input required value={form.name} onChange={update("name")} placeholder="Jane Doe" />
              </label>
              <label>
                <span>Email</span>
                <input required type="email" value={form.email} onChange={update("email")} placeholder="jane@company.com" />
              </label>
            </div>
            <label>
              <span>Service</span>
              <select value={form.service} onChange={update("service")}>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
                <option>Something else</option>
              </select>
            </label>
            <label>
              <span>Project details</span>
              <textarea required rows="5" value={form.message} onChange={update("message")} placeholder="What would you like to build or learn?" />
            </label>
            <button className="btn btn--primary btn--block" type="submit">
              Send enquiry <Icon name="arrow" size={18} />
            </button>
            <small className="form__note">Opens your email app with the details filled in.</small>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────── */
export function Footer() {
  const socials = [
    { icon: "linkedin", href: profile.linkedin, label: "LinkedIn" },
    { icon: "github", href: profile.github, label: "GitHub" },
    { icon: "whatsapp", href: `https://wa.me/${profile.whatsapp}`, label: "WhatsApp" },
    { icon: "mail", href: `mailto:${profile.email}`, label: "Email" },
  ].filter((s) => s.href);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.fullName}. Built with React.</p>
        <div className="footer__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Icon name={s.icon} size={20} />
            </a>
          ))}
          <a href="#home" aria-label="Back to top" className="footer__top"><Icon name="arrowUp" size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
