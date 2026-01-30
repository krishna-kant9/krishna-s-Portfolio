import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Analytical thinking to tackle complex technical challenges",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Continuously learning new technologies and best practices",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Effective collaboration in Agile development environments",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="section-container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                About Me
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Passionate Developer Building Digital Solutions
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Full Stack MERN Developer with over 1 year of hands-on
                experience in building modern web applications. My journey in
                software development has equipped me with strong skills in
                React, Node.js, Express, and MongoDB.
              </p>
              <p>
                I've successfully delivered real-world projects including a
                comprehensive{" "}
                <span className="font-medium text-foreground">
                  Hospital Management System
                </span>{" "}
                and a feature-rich{" "}
                <span className="font-medium text-foreground">
                  Food Delivery Application
                </span>
                . These projects have honed my abilities in full-stack
                development, database design, and creating intuitive user
                interfaces.
              </p>
              <p>
                I believe in writing clean, maintainable code and following best
                practices. I'm passionate about continuous learning and staying
                updated with the latest technologies and industry trends.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gradient">1+</p>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">5+</p>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gradient">10+</p>
                <p className="text-sm text-muted-foreground">
                  Technologies Used
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
