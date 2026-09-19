import type { Route } from "./+types/home";

const projects = [
	{
		number: "01",
		title: "Homebridge Vacuum Zones",
		description:
			"A Homebridge plugin that brings first and second-generation Xiaomi Roborock vacuums into the Apple Home ecosystem.",
		tags: ["JavaScript", "Home automation"],
		href: "https://github.com/Smileydude/homebridge-xiaomi-roborock-vacuum",
		featured: true,
	},
	{
		number: "02",
		title: "3D Particle System",
		description:
			"A real-time 3D particle simulation exploring motion, interaction, and the visual language of emergent systems.",
		tags: ["C++", "OpenGL", "3D graphics"],
		href: "https://github.com/Smileydude/3D-Particle-System",
		featured: true,
	},
	{
		number: "03",
		title: "vis",
		description:
			"A dynamic, browser-based visualization library for turning complex information into something people can explore.",
		tags: ["JavaScript", "Data viz"],
		href: "https://github.com/Smileydude/vis",
		featured: false,
	},
	{
		number: "04",
		title: "Augmented Platformer",
		description:
			"An augmented reality video game for Mac and iOS, built with C++, OpenGL, and the Vuforia SDK.",
		tags: ["C++", "OpenGL", "AR"],
		href: "https://github.com/Smileydude/Augmented-Platformer",
		featured: false,
	},
];

const skills = [
	"TypeScript",
	"JavaScript",
	"React",
	"Angular",
	"Node.js",
	"C++",
	"OpenGL",
	"Home automation",
];

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Smileydude — Builder, tinkerer, problem solver" },
		{
			name: "description",
			content:
				"Personal portfolio of Smileydude: open-source projects, experiments, and a career spent making useful things.",
		},
	];
}

export default function Home() {
	return (
		<main>
			<nav className="site-nav" aria-label="Main navigation">
				<a className="wordmark" href="#top" aria-label="Smileydude home">
					<span className="wordmark-mark">S</span>
					<span>smileydude<span className="wordmark-dot">.</span></span>
				</a>
				<div className="nav-links">
					<a href="#work">Selected work</a>
					<a href="#about">About</a>
					<a className="nav-contact" href="mailto:hello@smileydude.com">
						Let&apos;s talk <span aria-hidden="true">↗</span>
					</a>
				</div>
			</nav>

			<section className="hero section-shell" id="top">
				<div className="hero-copy">
					<p className="eyebrow"><span className="eyebrow-dot" /> Available for a good challenge</p>
					<h1>I make things<br /><em>worth using.</em></h1>
					<p className="hero-intro">
						I&apos;m Smileydude — a developer, tinkerer, and lifelong
						student of how technology can make everyday life a little
						more delightful.
					</p>
					<div className="hero-actions">
						<a className="button button-primary" href="#work">See what I&apos;ve built <span>↓</span></a>
						<a className="text-link" href="https://github.com/Smileydude" target="_blank" rel="noreferrer">
							GitHub profile <span>↗</span>
						</a>
					</div>
				</div>
				<div className="hero-aside" aria-label="Profile details">
					<div className="avatar-wrap">
						<img src="https://avatars.githubusercontent.com/u/3520319?v=4" alt="Smileydude" />
						<span className="status-badge">✦</span>
					</div>
					<p className="aside-label">Based in</p>
					<p className="aside-value">California, USA</p>
					<div className="hero-rule" />
					<p className="aside-label">Currently exploring</p>
					<p className="aside-value">The space between<br />useful &amp; delightful</p>
				</div>
				<div className="hero-stamp" aria-hidden="true">SCROLL<br /><span>↓</span></div>
			</section>

			<section className="marquee" aria-label="Areas of interest">
				<div className="marquee-track">
					<span>OPEN SOURCE</span><b>✳</b><span>SMART TOOLS</span><b>✳</b><span>GOOD UX</span><b>✳</b><span>OPEN SOURCE</span><b>✳</b><span>SMART TOOLS</span><b>✳</b><span>GOOD UX</span><b>✳</b>
				</div>
			</section>

			<section className="work-section section-shell" id="work">
				<div className="section-heading">
					<div>
						<p className="eyebrow">A few things I&apos;ve made</p>
						<h2>Selected <em>work</em></h2>
					</div>
					<a className="text-link" href="https://github.com/Smileydude?tab=repositories" target="_blank" rel="noreferrer">View all on GitHub <span>↗</span></a>
				</div>
				<div className="project-grid">
					{projects.map((project) => (
						<a className={`project-card ${project.featured ? "featured" : ""}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
							<div className="project-top"><span>{project.number}</span><span className="arrow">↗</span></div>
							<div className="project-body">
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
							</div>
						</a>
					))}
				</div>
			</section>

			<section className="about-section section-shell" id="about">
				<div className="about-label">
					<p className="eyebrow">A little context</p>
					<div className="big-number">/ 02</div>
				</div>
				<div className="about-copy">
					<h2>Curious by default.<br /><em>Practical by choice.</em></h2>
					<p>
						My work has always lived at the intersection of a hard technical
						problem and a human one. I&apos;ve built developer tools, connected
						things that weren&apos;t meant to connect, and made a few games along
						the way.
					</p>
					<p>
						I like small, focused teams, generous collaboration, and shipping
						something real. If it&apos;s useful, a little weird, and built with
						care, I&apos;m probably interested.
					</p>
					<div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
				</div>
			</section>

			<section className="contact-section section-shell">
				<p className="eyebrow"><span className="eyebrow-dot" /> Have a project in mind?</p>
				<h2>Let&apos;s make something<br /><em>people remember.</em></h2>
				<a className="button button-light" href="mailto:hello@smileydude.com">Start a conversation <span>↗</span></a>
			</section>

			<footer className="site-footer section-shell">
				<a className="wordmark" href="#top"><span className="wordmark-mark">S</span><span>smileydude<span className="wordmark-dot">.</span></span></a>
				<p>© {new Date().getFullYear()} Smileydude. Made with curiosity.</p>
				<div className="footer-links">
					<a href="https://github.com/Smileydude" target="_blank" rel="noreferrer">GitHub ↗</a>
					<a href="https://www.linkedin.com/public-profile/settings/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
				</div>
			</footer>
		</main>
	);
}
