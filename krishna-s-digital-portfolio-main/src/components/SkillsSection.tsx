import { useState } from "react";
import { cn } from "@/lib/utils";

type SkillCategory = "all" | "frontend" | "backend" | "database" | "tools";

interface Skill {
  name: string;
  category: SkillCategory;
  level: number;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML5", category: "frontend", level: 95 },
  { name: "CSS3", category: "frontend", level: 90 },
  { name: "JavaScript", category: "frontend", level: 90 },
  { name: "React.js", category: "frontend", level: 88 },
  { name: "TypeScript", category: "frontend", level: 80 },
  { name: "Tailwind CSS", category: "frontend", level: 92 },
  { name: "Bootstrap", category: "frontend", level: 85 },
  { name: "Redux", category: "frontend", level: 78 },
  // Backend
  { name: "Node.js", category: "backend", level: 85 },
  { name: "Express.js", category: "backend", level: 85 },
  { name: "REST APIs", category: "backend", level: 88 },
  { name: "JWT Auth", category: "backend", level: 82 },
  // Database
  { name: "MongoDB", category: "database", level: 85 },
  { name: "MySQL", category: "database", level: 75 },
  { name: "Mongoose", category: "database", level: 82 },
  // Tools
  { name: "Git", category: "tools", level: 88 },
  { name: "GitHub", category: "tools", level: 90 },
  { name: "VS Code", category: "tools", level: 95 },
  { name: "Postman", category: "tools", level: 85 },
  { name: "npm/yarn", category: "tools", level: 88 },
];

const categories: { value: SkillCategory; label: string }[] = [
  { value: "all", label: "All Skills" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "database", label: "Database" },
  { value: "tools", label: "Tools" },
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-20 lg:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            My Skills
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I Work With
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A comprehensive toolkit of modern technologies for building
            full-stack web applications
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

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card group p-5"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700 ease-out group-hover:opacity-80"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
