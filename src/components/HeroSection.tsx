import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient circuit-pattern">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">
              Available for projects collaboration
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Full Stack Developer &<br />
            <span className="text-gradient">IoT Systems Architect</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Building connected experiences from the browser to the edge. I craft
            beautiful web applications and design intelligent automation
            systems.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://github.com/Terencekgithub"
              className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/terence-kamogelo-moabi-20415029b/"
              className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:terencekamowork@gmail.com"
              className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
