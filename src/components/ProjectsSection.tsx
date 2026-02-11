import { ExternalLink, Github, Cpu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart Automation Dashboard",
    description:
      "A real-time IoT dashboard for monitoring and controlling smart home devices. Built with React and Arduino for seamless communication.",
    tags: ["React", "HTML", "CSS", "Javascript", "Node.js", "ESP32", "C/C++"],
    type: "iot",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["ReactJS", "TypeScript", "MySQL", "Payfast"],
    type: "web",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    title: "Generator Automation Monitoring System",
    description:
      "Real-time monitoring solution for industrial equipment using Modbus protocol and predictive analytics.",
    tags: ["Python"],
    type: "iot",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Beautiful analytics dashboard with real-time data visualization, user management, and API integrations.",
    tags: ["React"],
    type: "web",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium">
                      {project.type === "iot" ? (
                        <>
                          <Cpu className="w-3 h-3 text-primary" />
                          IoT
                        </>
                      ) : (
                        <>
                          <Globe className="w-3 h-3 text-primary" />
                          Web
                        </>
                      )}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
