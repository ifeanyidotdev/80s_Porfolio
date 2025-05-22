import React from "react";
import { Github } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { SOCIAL_LINKS } from "../utils/constant";

const Projects: React.FC = () => {
	const projects = [
		{
			id: 1,
			title: "Blucera",
			description:
				"Blucera is a pioneering digital technology company dedicated to empowering individuals, businesses, and communities and beyond",
			image:
				"https://www.blucera.com/_next/image?url=%2Fassets%2Fimages%2FhomeWinGPT-Img.png&w=3840&q=75",
			tags: ["Python", "Django", "Postgres", "Redis", "Docker", "Kafka", "AWS"],
			liveLink: "https://www.blucera.com/",
			githubLink: "#",
		},
		{
			id: 2,
			title: "Dora",
			description:
				"Dora is a technology company that provides a comprehensive delivery management platform designed to empower logistics businesses and e-commerce operators ",
			image:
				"https://usedora.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjrjesruj%2Fimage%2Fupload%2Fv1728901685%2FDora%2520Website%2FDora_App_kvnu52.png&w=3840&q=75",
			// image:
			// 	"https://res.cloudinary.com/djrjesruj/image/upload/v1728901685/Dora%20Website/Dora_App_kvnu52.png&w=3840&q=75",
			tags: ["Flutter", "Firebase"],
			liveLink: "https://usedora.com/",
			githubLink: "#",
		},
		{
			id: 3,
			title: "Sorom",
			description:
				"Looking for a fun, easy way to share your hidden travel gems and uncover new adventures around the globe",
			image:
				"https://framerusercontent.com/images/B7ej9Ddz3op5OJue49SKFyFPo.png",
			tags: [
				"Flutter",
				"Firebase",
				"Graphql",
				"PostgreSQL",
				"Node.js",
				"Express",
			],
			liveLink: "https://www.sorom.co/",
			githubLink: "#",
		},
		{
			id: 4,
			title: "KaboCash",
			description:
				"KaboCash Technologies is a pioneering fintech company specializing in secure, seamless, and cost-effective cross-border money transfers across Africa and beyond",
			image: "https://www.kabocash.com/send-money-with-kabocash-with-base.webp",
			tags: ["Flutter", "Firebase", "Node.js", "Socket.io"],
			liveLink: "https://www.kabocash.com/",
			githubLink: "#",
		},
	];

	return (
		<section id="projects" className="py-24 relative">
			<div className="section-container">
				<h2 className="section-title" data-text="Projects">
					Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>

				<div className="text-center mt-16">
					<a
						href={`${SOCIAL_LINKS.github.url}?tab=repositories`}
						target="_blank"
						rel="noopener noreferrer"
						className="neon-button inline-flex items-center"
					>
						<Github className="mr-2 h-5 w-5" />
						<span>More Projects on GitHub</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
