import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  return (
    <section id="resume" className="relative py-20 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="section-container relative">
        <div className="mx-auto max-w-2xl text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Resume
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Download My Resume
            </h2>
            <p className="text-muted-foreground">
              Get a comprehensive overview of my skills, experience, and
              qualifications in a professional PDF format.
            </p>
          </div>

          {/* Resume Preview Card */}
          <div className="glass-card mb-8 p-8">
            <div className="mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="h-40 w-28 rounded-lg border-2 border-dashed border-primary/30 bg-secondary/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-primary/50" />
                </div>
              </div>
            </div>

            <h3 className="mb-2 text-lg font-semibold">
              Krishna Kanta Sethi - Resume.pdf
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Full Stack MERN Developer | 1+ Year Experience
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="h-4 w-4" />
                  View Online
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-secondary/50 p-4">
              <p className="text-2xl font-bold text-gradient">1+</p>
              <p className="text-xs text-muted-foreground">Years Exp.</p>
            </div>
            <div className="rounded-lg bg-secondary/50 p-4">
              <p className="text-2xl font-bold text-gradient">5+</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
            <div className="rounded-lg bg-secondary/50 p-4">
              <p className="text-2xl font-bold text-gradient">10+</p>
              <p className="text-xs text-muted-foreground">Skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
