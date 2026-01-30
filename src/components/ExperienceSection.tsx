import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Tech Company",
    location: "Remote / India",
    period: "2025 – Present",
    type: "Full-time",
    description: [
      "Developed and maintained full-stack web applications using React, Node.js, Express, and MongoDB",
      "Built RESTful APIs and integrated third-party services for enhanced functionality",
      "Improved UI/UX performance by optimizing React components and implementing lazy loading",
      "Collaborated with cross-functional teams following Agile/Scrum methodologies",
      "Managed version control and code reviews using Git and GitHub",
      "Implemented authentication and authorization using JWT tokens",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="section-container relative">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Journey
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My career path and the valuable experiences I've gained along the
            way
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 md:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border-4 border-background bg-primary md:left-1/2 md:block md:-translate-x-1/2" />

              <div
                className={`glass-card p-6 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Briefcase className="h-3 w-3" />
                    {exp.type}
                  </div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>

                {/* Meta */}
                <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
