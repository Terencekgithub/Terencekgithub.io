const webSkills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'MySQL', level: 80 },
];

const iotSkills = [
  { name: 'ESP32/Arduino', level: 70 },
  { name: 'Home Automation', level: 85 },
  { name: 'Python', level: 65 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-muted-foreground font-mono">{level}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card/30 relative">
      <div className="absolute inset-0 circuit-pattern opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">My Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Web Development Skills */}
            <div className="p-8 rounded-2xl card-gradient border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-mono text-lg">{'</>'}</span>
                </div>
                <h3 className="text-xl font-semibold">Web Development</h3>
              </div>
              <div className="space-y-6">
                {webSkills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>

            {/* IoT Skills */}
            <div className="p-8 rounded-2xl card-gradient border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-mono text-lg">⚡</span>
                </div>
                <h3 className="text-xl font-semibold">IoT & Automation</h3>
              </div>
              <div className="space-y-6">
                {iotSkills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Additional Tools */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Also experienced with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Git', 'REST APIs'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground hover:border-primary hover:text-foreground transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
