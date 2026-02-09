import { Code2, Cpu, Zap } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <span className="text-primary font-mono text-sm mb-4 block">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bridging the gap between
                <span className="text-gradient"> digital & physical</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over years of experience in full stack development and IoT systems architecture, 
                I specialize in creating seamless experiences that connect users to their environments.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From responsive web applications to smart home automation, industrial monitoring systems, 
                and connected device networks—I bring ideas to life with clean code and robust architecture.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-gradient">3+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-gradient">2+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Exp</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-gradient">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">Passion</div>
                </div>
              </div>
            </div>

            {/* Visual Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Full Stack Development</h3>
                <p className="text-muted-foreground text-sm">
                  Modern, responsive applications built with React, TypeScript, and cutting-edge frameworks.
                </p>
              </div>

              <div className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">IoT Architecture</h3>
                <p className="text-muted-foreground text-sm">
                  Designing connected systems with ESP32.
                </p>
              </div>

              <div className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">IoT Automation</h3>
                <p className="text-muted-foreground text-sm">
                  Smart workflows and process automation that save time and reduce complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
