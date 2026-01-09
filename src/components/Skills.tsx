"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Layout,
  Database,
  Smartphone,
  Globe,
  Wand2,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and performant web applications with React, TypeScript, and modern frameworks.",
    tools: ["React", "TypeScript", "Next.js", "Vue"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive user interfaces with a focus on usability, accessibility, and visual appeal.",
    tools: ["Figma", "Sketch", "Adobe XD", "Framer"],
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description:
      "Crafting layouts that look and work beautifully across all devices and screen sizes.",
    tools: ["Tailwind", "CSS Grid", "Flexbox", "SCSS"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Building robust server-side applications and APIs with modern technologies.",
    tools: ["Node.js", "ExpressJs", "MongoDB"],
  },
  {
    icon: Wand2,
    title: "Motion & Interaction",
    description:
      "Crafting expressive animations and transitions that bring interfaces to life.",
    tools: ["Framer Motion", "GSAP", "Lenis", "Scroll-based Motion"],
  },

  {
    icon: Globe,
    title: "Web Performance",
    description:
      "Optimizing applications for speed, SEO, and best practices.",
    tools: ["Lighthouse", "Core Vitals", "Analytics", "SEO"],
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 bg-secondary/30">
      <div className="container px-6">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-medium mb-4"
          >
            What I Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=" text-4xl fontB text-zinc-100 md:text-5xl font-semibold"
          >
            Skills & <span className="text-gradient">Expertise</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="fontZ group bg-card border border-[#0f172a] rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="fontZ text-zinc-100 text-xl font-semibold mb-3">
                {skill.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
