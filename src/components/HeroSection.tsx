import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/krishna_profile.jpg";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Pattern */}
      <div className="hero-pattern absolute inset-0 opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:gap-16 lg:text-left">
          {/* Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <p className="animate-fade-in text-sm font-semibold uppercase tracking-widest text-primary">
                Full Stack MERN Developer
              </p>
              <h1 className="animate-fade-in animation-delay-200 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="text-gradient">Krishna Kanta Sethi</span>
              </h1>
              <p className="animate-fade-in animation-delay-400 max-w-xl text-lg text-muted-foreground sm:text-xl">
                Passionate about building scalable web applications and solving
                real-world problems using modern web technologies. 1+ year of
                hands-on experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in animation-delay-600 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-full bg-primary px-8 hover:bg-primary/90"
              >
                <a href="#resume">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 rounded-full border-border hover:bg-secondary"
              >
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in animation-delay-600 flex items-center justify-center gap-4 pt-4 lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-secondary p-3 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-secondary p-3 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:krishna@example.com"
                className="rounded-full bg-secondary p-3 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="glow">
              <div className="floating relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/20 to-accent/20 sm:h-80 sm:w-80">
                <img
                  src={profileImage}
                  alt="Krishna Kanta Sethi"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border-2 border-dashed border-primary/30" />
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full border-2 border-dashed border-accent/30" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll
            </span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
