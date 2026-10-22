// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  your site — no need to touch the components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Pratham Dubey",
  fullName: "Pratham Brijendra Dubey",
  initials: "PD",
  location: "Mumbai, Maharashtra, India",
  email: "prathamdubey03@gmail.com",
  phone: "+91 9579832094",
  whatsapp: "919579832094", // country code + number, no "+" or spaces
  // Add your links here. Empty links are hidden automatically.
  linkedin: "",
  github: "",
  resume: "Pratham_Dubey_Resume.pdf", // file inside /public
  roles: [
    "AWS Solutions Architect",
    "Cloud Engineer",
    "Technical Trainer",
    "Web Developer",
  ],
  tagline:
    "I design and deploy secure, scalable cloud solutions on AWS and Azure — and I teach teams how to run them. 3,000+ students trained across cloud, web development and AI.",
};

export const stats = [
  { value: 3000, suffix: "+", label: "Students trained" },
  { value: 2, suffix: "+", label: "Years in tech training" },
  { value: 2, suffix: "", label: "AWS certifications" },
  { value: 10, suffix: "+", label: "AWS services used" },
];

export const about = {
  paragraphs: [
    "I'm an AWS Certified Solutions Architect – Associate and a Technical Trainer at JetKing, Dadar. My work sits where cloud engineering meets teaching: I build real infrastructure on AWS and Azure, and I turn that experience into hands-on labs that people actually understand.",
    "At Magic Bus India Foundation, I delivered AWS training content for Accenture's CSR initiatives, ran AI awareness training across colleges with the IBM SkillsBuild team, and coached students on landing their first tech jobs.",
    "As a freelancer, I help small businesses, startups and institutes get their websites and workloads running reliably in the cloud — and I run workshops that upskill their teams.",
  ],
  highlights: [
    { title: "Accenture CSR", text: "Delivered AWS training content for Accenture's CSR programs." },
    { title: "IBM SkillsBuild", text: "AI training across multiple colleges with the IBM team." },
    { title: "JetKing, Dadar", text: "Technical Trainer for AWS, Azure, Linux & networking." },
  ],
};

export const services = [
  {
    icon: "cloud",
    title: "AWS Cloud Setup & Deployment",
    text: "Launch your app or website on AWS the right way — EC2, S3, RDS, VPC networking and IAM security configured from day one.",
    points: ["Architecture design", "Secure VPC & IAM", "Monitoring with CloudWatch"],
  },
  {
    icon: "code",
    title: "Website Design & Development",
    text: "Fast, responsive, modern websites built with HTML, CSS, JavaScript and React — hosted on reliable cloud infrastructure.",
    points: ["Responsive on every screen", "Portfolio & business sites", "Cloud hosting included"],
  },
  {
    icon: "chart",
    title: "Cloud Cost Optimization",
    text: "Review your AWS bill and resources, then cut waste. I've delivered a 15% reduction in monthly cloud spend.",
    points: ["Resource right-sizing", "Cost analysis report", "Savings recommendations"],
  },
  {
    icon: "cap",
    title: "Cloud & DevOps Training",
    text: "Lab-driven AWS, Azure and Linux training for colleges, institutes and corporate teams — including certification prep.",
    points: ["AWS & Azure workshops", "Hands-on labs", "Certification coaching"],
  },
  {
    icon: "spark",
    title: "AI Awareness Workshops",
    text: "Practical sessions on how modern AI tools work and how to use them productively — proven across colleges with IBM SkillsBuild.",
    points: ["Generative AI tools", "Real use-cases", "Student & staff sessions"],
  },
  {
    icon: "briefcase",
    title: "Career Readiness Coaching",
    text: "Help for students and freshers: finding and applying for jobs, resume building, portfolio creation and interview prep.",
    points: ["Resume & portfolio", "Job search strategy", "Mock interviews"],
  },
];

export const process = [
  { step: "01", title: "Discover", text: "We talk about your goals, budget and timeline." },
  { step: "02", title: "Plan", text: "I propose a clear architecture or course plan with fixed scope." },
  { step: "03", title: "Build", text: "I deliver in small, reviewable steps so you always see progress." },
  { step: "04", title: "Support", text: "Handover, documentation and support after launch." },
];

export const skills = [
  {
    group: "Amazon Web Services",
    icon: "cloud",
    items: ["EC2", "S3", "VPC", "IAM", "RDS", "Lambda", "CloudWatch", "SNS", "CodeCommit", "CodeBuild", "CodeDeploy", "Well-Architected", "Cost Optimization"],
  },
  {
    group: "Microsoft Azure",
    icon: "azure",
    items: ["Azure Fundamentals", "Virtual Machines", "Azure SQL Database"],
  },
  {
    group: "Linux & Networking",
    icon: "terminal",
    items: ["Linux Administration", "Networking Basics", "TCP/IP", "Subnetting", "Routing", "VPC Networking"],
  },
  {
    group: "Web & Scripting",
    icon: "code",
    items: ["HTML", "CSS", "JavaScript", "React", "Python", "Bash", "Git", "GitHub"],
  },
  {
    group: "AI & Training",
    icon: "spark",
    items: ["Generative AI Tools", "AI Literacy", "Lab Design", "Live Demos", "Exam Coaching", "Career Coaching"],
  },
];

export const experience = [
  {
    role: "Technical Trainer",
    org: "JetKing, Dadar (Mumbai)",
    period: "Aug 2026 – Present",
    current: true,
    points: [
      "Deliver hands-on training in AWS (EC2, S3, VPC, IAM, RDS), including live labs building VPCs with public/private subnets and Internet Gateways.",
      "Teach Microsoft Azure fundamentals with practical labs, including Azure SQL Database.",
      "Teach networking basics and Linux administration as a foundation for cloud careers.",
      "Prepare students for AWS and Azure certification exams and manage a dedicated student batch end to end.",
    ],
  },
  {
    role: "Tech Trainer",
    org: "Magic Bus India Foundation",
    period: "Oct 2024 – Aug 2026",
    points: [
      "Trained students in web design and development, AWS, Microsoft Azure and Linux for IT careers.",
      "Delivered AWS training content for Accenture CSR initiatives.",
      "Ran AI training across multiple colleges with the IBM SkillsBuild team.",
      "Coached students on job search, resume building, portfolios and interview preparation.",
    ],
  },
  {
    role: "Cloud Computing Intern Trainer",
    org: "Magic Bus India Foundation",
    period: "",
    points: [
      "Led cloud computing sessions and hands-on AWS labs for students and staff with EC2, S3, RDS, Lambda, IAM and VPC.",
    ],
  },
  {
    role: "AWS re/Start Program",
    org: "Amazon Web Services × Magic Bus",
    period: "",
    points: [
      "Built Lambda automation that cut data processing time by 25%, and a cost analysis that reduced monthly AWS spend by 15%.",
    ],
  },
];

export const projects = [
  {
    title: "Static Website Deployment & Monitoring",
    text: "Deployed a static website on EC2 with S3 storage, using CloudWatch and SNS for real-time monitoring and alerting.",
    tags: ["EC2", "S3", "CloudWatch", "SNS"],
    metric: "Real-time alerts",
    link: "",
  },
  {
    title: "Automated CI/CD Pipeline",
    text: "Built an automated pipeline with CodeCommit, CodeBuild and CodeDeploy for continuous, hands-free website deployment.",
    tags: ["CodeCommit", "CodeBuild", "CodeDeploy"],
    metric: "Zero-touch deploys",
    link: "",
  },
  {
    title: "Serverless Data Processing",
    text: "Developed AWS Lambda automation scripts to streamline data processing tasks during the AWS re/Start program.",
    tags: ["Lambda", "Automation", "IAM"],
    metric: "25% faster",
    link: "",
  },
  {
    title: "Cloud Cost Optimization",
    text: "Analysed AWS resource usage and proposed right-sizing and optimization strategies for monthly spend.",
    tags: ["Cost Analysis", "EC2", "S3"],
    metric: "15% savings",
    link: "",
  },
];

export const certifications = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2026",
    level: "Associate",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "",
    level: "Foundational",
  },
  {
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services × Magic Bus",
    year: "",
    level: "Program",
  },
];
