import { useState } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectCategory = "all" | "fullstack" | "frontend" | "backend";

interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  techStack: string[];
  features: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive healthcare management solution for hospitals to manage patients, doctors, appointments, and bed allocations efficiently.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
    category: "fullstack",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Patient registration & management",
      "Doctor scheduling system",
      "Bed allocation & tracking",
      "Admin dashboard with analytics",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Food Delivery Application",
    description:
      "A modern food delivery platform with real-time order tracking, user authentication, and an intuitive ordering experience.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    category: "fullstack",
    techStack: ["React", "Redux", "Node.js", "MongoDB"],
    features: [
      "User authentication & profiles",
      "Real-time order tracking",
      "Payment integration",
      "Restaurant & menu management",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    category: "frontend",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Dark/Light mode toggle",
      "Smooth animations",
      "Contact form integration",
    ],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

const categories: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "fullstack", label: "Full Stack" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 lg:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            My Work
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A collection of projects that showcase my skills in full-stack
            development
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                activeCategory === category.value
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-background/90 p-3 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-background/90 p-3 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="mb-4 space-y-1">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-2">
                  {project.github && (
                    <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm" className="flex-1 gap-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
