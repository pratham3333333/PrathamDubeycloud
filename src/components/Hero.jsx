import Icon from "./Icon.jsx";
import { profile, stats } from "../data.js";
import { useCountUp, useTypewriter } from "../hooks.js";

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resume}`;

function Stat({ value, suffix, label, i }) {
  const [ref, val] = useCountUp(value);
  return (
    <div className="stat reveal" style={{ "--d": `${0.5 + i * 0.1}s` }} ref={ref}>
      <strong>
        {val.toLocaleString("en-IN")}
        <span>{suffix}</span>
      </strong>
      <small>{label}</small>
    </div>
  );
}

const terminal = [
  { c: "prompt", t: "aws sts get-caller-identity" },
  { c: "out", t: '{ "User": "pratham", "Role": "SolutionsArchitect" }' },
  { c: "prompt", t: "deploy --stack client-website" },
  { c: "ok", t: "✔ VPC  10.0.0.0/16 · 2 public · 2 private subnets" },
  { c: "ok", t: "✔ EC2 + ALB · auto scaling ready" },
  { c: "ok", t: "✔ S3 static assets · CloudFront" },
  { c: "ok", t: "✔ CloudWatch alarms → SNS" },
  { c: "out", t: "Deployment complete · all health checks passing" },
];

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="orb orb--1" />
        <span className="orb orb--2" />
        <span className="orb orb--3" />
        <div className="grid-bg" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="pill reveal">
            <span className="pulse" /> Available for freelance projects
          </p>
          <h1 className="reveal" style={{ "--d": ".1s" }}>
            Hi, I'm <span className="grad-text">{profile.name}</span>
          </h1>
          <p className="hero__role reveal" style={{ "--d": ".2s" }}>
            <span className="mono">&gt;</span> <span className="hero__role-text">{role}</span>
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero__tagline reveal" style={{ "--d": ".3s" }}>{profile.tagline}</p>
          <div className="hero__ctas reveal" style={{ "--d": ".4s" }}>
            <a href="#contact" className="btn btn--primary">
              Hire Me <Icon name="arrow" size={18} />
            </a>
            <a href={resumeUrl} className="btn btn--ghost" download>
              <Icon name="download" size={18} /> Download Resume
            </a>
          </div>
        </div>

        <div className="hero__visual reveal" style={{ "--d": ".35s" }}>
          <div className="terminal">
            <div className="terminal__bar">
              <i /><i /><i />
              <span>pratham@cloud: ~</span>
            </div>
            <div className="terminal__body">
              {terminal.map((l, i) => (
                <p key={i} className={`tl tl--${l.c}`} style={{ "--l": i }}>
                  {l.c === "prompt" && <span className="tl__ps">$</span>}
                  {l.t}
                </p>
              ))}
              <p className="tl tl--prompt" style={{ "--l": terminal.length }}>
                <span className="tl__ps">$</span>
                <span className="caret caret--sm" />
              </p>
            </div>
          </div>
          <div className="badge-float badge-float--1">
            <Icon name="award" size={18} /> AWS Solutions Architect
          </div>
          <div className="badge-float badge-float--2">
            <Icon name="cap" size={18} /> 3,000+ students trained
          </div>
        </div>
      </div>

      <div className="container">
        <div className="stats">
          {stats.map((s, i) => <Stat key={s.label} {...s} i={i} />)}
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
}
