Components they use (mapped to xBond)
XRay.tech
Sticky top nav with “Schedule intro” CTA. 
xray.tech
Hero: strong headline + sub + single primary CTA to book. 
xray.tech
Services grid (Workflow Automation, Workflow Design, Integrations, AI Tools, Training). 
xray.tech
“Integrations for Product Teams” section (partner-facing value prop). 
xray.tech
Blog preview & Case studies preview. 
xray.tech
Proof block (stats like “5,000+ Automations Under Management”). 
xray.tech
Footer with links + booking CTA repeated. 
xray.tech
Bima (Framer template)
Pages: Home, Case studies (+detail), Blog (+detail), Legal, 404. 
Framer
Features: animations/effects, sticky scrolling, CMS, forms, SEO (JSON-LD), layout templates, components. 
Framer
“Easy to customize” theming & asset swaps. 
Framer
MQLFlow
ROI-first hero + services; dedicated Case Studies section with detailed write-ups. 
mqlflow.com
+1
Prompts for your agent (copy/paste)
1) Sticky Nav + Book CTA
Goal: Responsive sticky nav with logo (left), links (Services, Pricing, Case Studies, Blog, Contact), right-side “Book a call” button.
Prompt:
“Build a sticky <Nav> for Next.js (App Router, TS). Dark theme. Left: xBond logo. Center: links to /services, /pricing, /case-studies, /blog, /contact. Right: primary button ‘Book a call’ → /contact. On scroll, add backdrop-blur and border. Keyboard/ARIA accessible; focus styles; mobile drawer with ESC to close.”
2) Hero + Primary CTA
Goal: XRay/MQLFlow-style hero.
Prompt:
“Create a <Hero> with headline ‘AI-Powered Outreach & Lead Systems’, subtext (2 lines), primary CTA ‘See pricing’ → /pricing, secondary ‘Book a discovery call’ → /contact. Add subtle motion on load (Framer Motion). Must pass Lighthouse a11y > 95.”
3) Services Grid (5 cards)
Goal: Mirror XRay’s breadth but with xBond language.
Prompt:
“Create <ServicesGrid> with 5 cards:
AI Chatbots & Assistants
Outreach & Nurture Automations
Lead Qualification Systems
Data & Systems Integration
Training & Enablement
Each card: icon, 1-sentence desc, 3 bullets. Mobile 1-col, md 2-col, lg 3-col. Props-driven so we can reorder. Add schema.org/Service JSON-LD.”
4) Integrations for Product Teams (Partner Section)
Goal: A section like XRay’s “Integrations for Product Teams.” 
xray.tech
Prompt:
“Add <PartnerIntegrations> section: headline, paragraph, 6 logo slots, and a right-side card ‘Embed our integration docs’ with CTA to /contact. Include caption about reducing churn & support via tutorials. Provide CMS fields (title, copy, logos[]).”
5) Case Studies (List + Dynamic Pages)
Goal: Grid + dynamic route like Bima/MQLFlow. 
Framer
mqlflow.com
Prompt:
“Scaffold /case-studies index (cards with logo, title, KPI chips like ‘+35% replies’, ‘-48% manual work’) and dynamic /case-studies/[slug]. Add MDX support for body, frontmatter (title, summary, date, KPIs[], industry, heroImage, gallery[]). Generate JSON-LD Article + BreadcrumbList.”
6) Blog (Index + Post)
Goal: Simple CMS-ready blog like Bima’s page set. 
Framer
Prompt:
“Implement /blog index with categories & search (client-side). Post route /blog/[slug] via MDX. Add reading time, share meta, prev/next, and code block styling. Inject BlogPosting JSON-LD. Provide RSS at /rss.xml.”
7) Pricing with Monthly/Yearly Toggle
Goal: Pricing table with 3 tiers + yearly -15% toggle.
Prompt:
“Create <PricingTable> with Basic ($99/mo), Growth ($299/mo), Bespoke (contact). Yearly = 15% off. Add ‘+ One-time setup from $290’ note (editable). Compare features as checklist. ‘Choose’ buttons link to /contact?plan=….”
8) Proof/Stats Bar
Goal: Quick credibility like XRay’s “5,000+ Automations.” 
xray.tech
Prompt:
“Add <ProofBar> with 3 metrics (e.g., ‘5,000+ automations managed’, ‘Avg +32% reply rate’, ‘<14 days to first ROI’). Animate counting on in-view; provide props.”
9) CTA Banner (Mid + Final)
Goal: Repeated conversion points.
Prompt:
“Create reusable <CTABanner> component with title, subtitle, primary/secondary buttons. Variants: solid, outline, gradient. Use on home mid-page and footer-adjacent.”
10) Contact Form → Email/Slack
Goal: Turn your /api/contact into a real flow.
Prompt:
“Wire /api/contact to send email (Resend or SMTP) and Slack webhook. Validate fields (name, email, company, message). Rate-limit by IP (upstash-ratelimit). Return JSON. Show success/error toasts.”
11) SEO + JSON-LD + Sitemaps
Goal: Template-level SEO like Bima’s “SEO Booster with JSON-LD.” 
Framer
Prompt:
“Add sitewide SEO utilities: OpenGraph/Twitter defaults, per-page overrides, SiteNavigationElement JSON-LD, Organization JSON-LD, automatic /sitemap.xml + /robots.txt. Include canonical + prev/next on paginated lists.”
12) Animations & Sticky Scrolling
Goal: Tasteful motion like Bima features. 
Framer
Prompt:
“Add a small animation system using Framer Motion variants (fade-in, slide-up, stagger). Optional sticky scroll section (pinned visuals) for ‘How it works’. Ensure 60fps and reduced-motion support.”
13) Trust/Logo Row
Goal: Social proof near top.
Prompt:
“Add <TrustLogos> with 6–12 logos, monochrome variant, accessible alt. Lazy-load and clamp height. Props: title, logos[].”
14) Legal Pages
Goal: Match Bima’s page set. 
Framer
Prompt:
“Create /legal/privacy and /legal/terms. Minimal layout, ToC anchors, last-updated date.”
Optional power-ups (quick wins)
Calendar embed (Calendly/Cal.com) on /contact to mirror “Schedule intro”. 
xray.tech
Newsletter mini form in footer.
Performance: image next/image, route-level revalidate, and script strategy afterInteractive.
